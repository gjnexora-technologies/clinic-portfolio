import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { NoObjectGeneratedError, Output } from "ai";
import { z } from "zod";

import { createResponsesCall } from "./ai-gateway/responses.server";

const symptomInput = z.object({
  symptoms: z.string().trim().min(10).max(2000),
});

export const suggestAppointmentQuestions = createServerFn({ method: "POST" })
  .validator((data) => symptomInput.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) {
      throw new Error("The AI helper is not configured right now. Please continue with a regular appointment request.");
    }

    const request = getRequest();
    const result = createResponsesCall(
      request,
      { apiKey, model: "openai/gpt-6-astra" },
      [
        {
          role: "system",
          content:
            "You are Meridian Clinic's appointment preparation assistant. Do not diagnose, triage, prescribe, or predict outcomes. Given a visitor's symptom description, suggest 4 to 6 concise, neutral questions they can ask a licensed clinician. Include one question about what details to track and one about when to seek more urgent help, without giving emergency advice yourself. Keep questions plain-language and under 18 words each.",
        },
        {
          role: "user",
          content: `Visitor symptom description:\n${data.symptoms}`,
        },
      ],
      Output.object({
        schema: z.object({ questions: z.array(z.string()) }),
        name: "appointment_questions",
        description: "Questions a visitor can discuss with a licensed clinician.",
      }),
    );

    let output: { questions: string[] } | undefined;
    try {
      output = await result.output;
    } catch (error) {
      console.error("Symptom question AI request failed", error);
      if (NoObjectGeneratedError.isInstance(error)) {
        throw new Error("The AI helper could not create appointment questions. Please try again.");
      }
      throw new Error("The AI helper could not complete this request. Please try again.");
    }

    if (!output?.questions?.length) {
      throw new Error("The AI helper returned no suggestions. Please try again or request an appointment.");
    }

    return {
      questions: output.questions.slice(0, 6).map((question) => question.trim()).filter(Boolean),
    };
  });