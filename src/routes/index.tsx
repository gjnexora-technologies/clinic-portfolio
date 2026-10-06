import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  HeartPulse,
  MapPin,
  Menu,
  MessageCircleHeart,
  Phone,
  ShieldCheck,
  Stethoscope,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import heroImage from "@/assets/meridian-hero.jpg";
import checkupImage from "@/assets/meridian-checkup.jpg";
import facilitiesImage from "@/assets/meridian-facilities.jpg";
import doctorsImage from "@/assets/meridian-doctors.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meridian Clinic | Calm, Human Healthcare" },
      {
        name: "description",
        content:
          "Meridian is a modern private clinic for calm, human, unhurried care. Explore services, meet our fictional care team, and request an appointment.",
      },
      { property: "og:title", content: "Meridian Clinic | Calm, Human Healthcare" },
      {
        property: "og:description",
        content: "Bright spaces, thoughtful clinicians, and healthcare designed around you.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: "C",
    tone: "sky",
    title: "Primary care",
    description: "Everyday health, prevention, and the conversations that usually get rushed.",
  },
  {
    icon: "H",
    tone: "mint",
    title: "Heart & blood",
    description: "Gentle, thorough cardiovascular screening with results you can actually understand.",
  },
  {
    icon: "W",
    tone: "sun",
    title: "Wellness & sleep",
    description: "Sleep, stress, and energy — treated as one system, not three separate complaints.",
  },
];

const insights = [
  { category: "Prevention", title: "Why regular health checkups matter", time: "4 min read" },
  { category: "Wellness", title: "Small habits that support better sleep", time: "6 min read" },
  { category: "Family health", title: "Making healthcare feel easier for children", time: "5 min read" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("loading");
    window.setTimeout(() => setFormState("success"), 700);
  };

  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased selection:bg-teal/20">
      <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-2.5" onClick={closeMenu}>
            <span className="grid size-9 place-items-center rounded-xl bg-teal font-display text-lg font-bold text-primary-foreground">
              m
            </span>
            <span className="font-display text-xl font-bold tracking-tight">meridian</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex" aria-label="Primary navigation">
            <a href="#services" className="transition-colors hover:text-teal">Services</a>
            <a href="#doctors" className="transition-colors hover:text-teal">Doctors</a>
            <a href="#facilities" className="transition-colors hover:text-teal">Facilities</a>
            <a href="#insights" className="transition-colors hover:text-teal">Insights</a>
            <a href="#contact" className="transition-colors hover:text-teal">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#book" className="rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-teal">
              Book a visit
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-10 place-items-center rounded-full border border-line text-ink md:hidden"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
        {menuOpen ? (
          <nav className="border-t border-line bg-paper px-5 py-4 md:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 text-sm font-medium">
              {["services", "doctors", "facilities", "insights", "contact"].map((item) => (
                <a key={item} href={`#${item}`} onClick={closeMenu} className="rounded-xl px-3 py-3 capitalize hover:bg-mint">
                  {item}
                </a>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      <main id="top" className="relative">
        <div className="pointer-events-none fixed bottom-3 right-3 z-50 select-none rounded-full border border-black/5 bg-white/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/70 backdrop-blur-sm shadow-sm md:bottom-4 md:right-4 md:text-[11px]">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-teal" />
            GJ NEXORA • DEMO PROJECT
          </span>
        </div>
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 lg:grid-cols-12 lg:pt-20">
          <div className="animate-rise lg:col-span-7">
            <h1 className="mt-0 max-w-[12ch] font-display text-[clamp(2.75rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight">
              Care that feels like a <span className="italic text-teal">morning</span>, not a queue.
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg text-ink-soft">
              Meridian is a private clinic built around one idea — that good medicine should feel calm, human, and unhurried. Book in minutes, and walk in to a room that already knows your name.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#book" className="rounded-full bg-coral px-7 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-teal">
                Book an appointment
              </a>
              <a href="#services" className="rounded-full border-2 border-ink/15 px-6 py-4 font-semibold transition-colors hover:border-teal hover:text-teal">
                Explore services
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-soft">
              <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-sun" /> 4.9 patient rating</span>
              <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-teal" /> Same-day slots</span>
              <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-coral" /> 12 specialists</span>
            </div>
          </div>
          <div className="animate-rise [animation-delay:120ms] lg:col-span-5">
            <div className="relative">
              <div className="overflow-hidden rounded-[28px] ring-1 ring-black/5">
                <img src={heroImage} alt="Clinician speaking with a patient in a bright consultation room" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
              </div>
              <div className="animate-pop [animation-delay:300ms] absolute -bottom-5 -left-5 rounded-2xl bg-card px-5 py-4 shadow-sm ring-1 ring-black/5">
                <p className="font-mono text-xs text-ink-soft">Next available</p>
                <p className="font-display text-lg font-bold">Today · 10:30</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-teal text-primary-foreground" aria-label="How a visit works">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 py-5 md:grid-cols-4">
            {[
              ["1", "Book online", "In under 2 minutes"],
              ["2", "Meet your doctor", "A calm, private room"],
              ["3", "Clear plan", "No jargon, ever"],
              ["4", "Ongoing care", "We follow up"],
            ].map(([number, title, copy]) => (
              <div key={number} className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary-foreground/15 font-display font-bold">{number}</span>
                <div><p className="text-sm font-semibold">{title}</p><p className="text-xs text-primary-foreground/70">{copy}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div><p className="font-mono text-xs text-teal-deep">(a) Services</p><h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">What we look after</h2></div>
            <a href="#book" className="text-sm font-semibold text-teal">Book a checkup <ArrowRight className="ml-1 inline" size={15} /></a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl bg-card p-7 shadow-card ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-card-hover">
                <span className={`grid size-12 place-items-center rounded-2xl font-display text-xl font-bold ${service.tone === "sky" ? "bg-sky text-teal-deep" : service.tone === "mint" ? "bg-mint text-teal-deep" : "bg-sun/30 text-ink"}`}>{service.icon}</span>
                <h3 className="mt-5 font-display text-2xl font-bold">{service.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{service.description}</p>
                <a href="#book" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal">Book a checkup <ArrowRight size={14} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="grid items-center gap-10 rounded-[32px] bg-teal-deep p-8 text-primary-foreground md:p-12 lg:grid-cols-2">
            <div>
              <span className="font-mono text-xs text-primary-foreground/60">(b) Featured</span>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">The Meridian Health Check</h2>
              <p className="mt-4 max-w-[42ch] text-primary-foreground/80">A single morning that maps your whole health picture — bloodwork, heart, and a 40-minute sit-down with a doctor who listens.</p>
              <ul className="mt-6 space-y-2 text-sm text-primary-foreground/85">
                {["40+ biomarkers, explained in plain language", "Heart & blood pressure screening", "Personal follow-up plan within 48 hours"].map((item) => <li key={item} className="flex gap-2"><span className="text-sun">•</span>{item}</li>)}
              </ul>
              <a href="#book" className="mt-8 inline-block rounded-full bg-primary-foreground px-6 py-3.5 font-semibold text-teal-deep transition-colors hover:bg-sun">Reserve this checkup</a>
            </div>
            <img src={checkupImage} alt="Clinician explaining health results on a tablet" width={1024} height={1024} loading="lazy" className="aspect-square w-full rounded-3xl object-cover ring-1 ring-primary-foreground/20" />
          </div>
        </section>

        <section id="doctors" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-xs text-teal-deep">(c) Doctors</p><h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">The people in the room</h2></div><span className="text-sm text-ink-soft">Fictional profile examples</span></div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Dr. Amara Osei", "General Practice", "Believes the best diagnosis starts with a long, unhurried question.", "doctor-image--one"],
              ["Dr. Elena Vidal", "Cardiology", "Turns complex heart data into a plan you can act on the same day.", "doctor-image--two"],
              ["Dr. Noah Reyes", "Wellness & Sleep", "Specialist in energy, rest, and the small habits that compound.", "doctor-image--three"],
            ].map(([name, specialty, copy, imageClass]) => (
              <article key={name} className="rounded-3xl bg-card p-5 shadow-card ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-card-hover">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-mint"><img src={doctorsImage} alt={`${name}, ${specialty}`} width={1536} height={768} loading="lazy" className={`doctor-image ${imageClass}`} /></div>
                <h3 className="mt-4 font-display text-xl font-bold">{name}</h3><p className="text-sm font-medium text-teal">{specialty}</p><p className="mt-2 text-sm text-ink-soft">{copy}</p>
                <a href="#book" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal">Book with this doctor <ArrowRight size={14} /></a>
              </article>
            ))}
          </div>
        </section>

        <section id="facilities" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-xs text-teal-deep">(d) Facilities</p><h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">A space that settles you</h2></div><span className="text-sm text-ink-soft">Bright, calm, and private</span></div>
          <div className="grid gap-5 md:grid-cols-3">
            <img src={facilitiesImage} alt="Bright clinic reception with plants and warm wood" width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card ring-1 ring-black/5 md:col-span-2" />
            <div className="grid gap-5"><div className="rounded-3xl bg-mint p-6"><HeartPulse className="text-teal-deep" size={24} /><h3 className="mt-5 font-display text-xl font-bold">Thoughtful spaces</h3><p className="mt-2 text-sm text-ink-soft">Natural light, comfortable seating, and room to ask every question.</p></div><div className="rounded-3xl bg-sky p-6"><ShieldCheck className="text-teal-deep" size={24} /><h3 className="mt-5 font-display text-xl font-bold">Clear by design</h3><p className="mt-2 text-sm text-ink-soft">Simple wayfinding and accessible care from the moment you arrive.</p></div></div>
          </div>
        </section>

        <section id="insights" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-xs text-teal-deep">(e) Insights</p><h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">Good care starts with understanding</h2></div><span className="max-w-[28ch] text-right text-sm text-ink-soft">Helpful reading, never a substitute for professional medical advice.</span></div>
          <div className="grid gap-5 md:grid-cols-3">{insights.map((insight) => <article key={insight.title} className="rounded-3xl bg-card p-6 shadow-card ring-1 ring-black/5"><p className="font-mono text-xs text-teal">{insight.category}</p><h3 className="mt-4 font-display text-2xl font-bold leading-tight">{insight.title}</h3><p className="mt-6 flex items-center gap-2 text-sm text-ink-soft"><Clock3 size={15} /> {insight.time}</p><a href="#book" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal">Talk to a clinician <ArrowRight size={14} /></a></article>)}</div>
        </section>

        <section className="bg-sky/60"><div className="mx-auto max-w-4xl px-5 py-20 text-center"><span className="font-mono text-xs text-teal-deep">(f) Philosophy</span><p className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight md:text-[2.75rem]">“We don’t do clinics that feel like waiting rooms. We design the hour around you — the light, the pace, the people — so leaving feels a little lighter than arriving.”</p><p className="mt-6 font-mono text-sm text-ink-soft">— The Meridian team</p></div></section>

        <section id="book" className="mx-auto grid max-w-6xl scroll-mt-20 items-start gap-10 px-5 py-20 lg:grid-cols-2">
          <div><span className="font-mono text-xs text-teal-deep">(g) Book</span><h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">Let’s find you a morning</h2><p className="mt-4 max-w-[40ch] text-ink-soft">Tell us a little and we’ll confirm a time within the hour. No phone tag, no hold music.</p><div className="mt-8 rounded-3xl bg-card p-6 shadow-card ring-1 ring-black/5"><p className="font-display text-lg font-bold">Prefer to talk?</p><p className="mt-1 text-sm text-ink-soft">Call us any weekday, 8am–6pm.</p><a href="tel:+15550182240" className="mt-3 inline-flex items-center gap-2 font-mono text-sm text-teal-deep"><Phone size={15} /> +1 (555) 018-2240</a></div>
            <div className="mt-5 rounded-3xl bg-sky/70 p-6 ring-1 ring-teal/10">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-teal-deep">Before your visit</p>
              <h3 className="mt-3 font-display text-2xl font-bold">Bring the details that matter most.</h3>
              <p className="mt-2 text-sm text-ink-soft">A quick note on your symptoms, any recent tests, and the questions you want answered will help your consultation feel focused and unhurried.</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-[28px] bg-card p-7 shadow-card ring-1 ring-black/5" aria-label="Request an appointment">
            {formState === "success" ? <div className="rounded-2xl bg-mint p-6 text-center"><span className="mx-auto grid size-12 place-items-center rounded-full bg-teal text-primary-foreground"><Check /></span><h3 className="mt-4 font-display text-2xl font-bold">Request received</h3><p className="mt-2 text-sm text-ink-soft">Thanks — our care team will confirm your appointment request shortly.</p><button type="button" onClick={() => setFormState("idle")} className="mt-5 text-sm font-semibold text-teal underline underline-offset-4">Send another request</button></div> : <><div className="grid gap-4 sm:grid-cols-2"><label className="block"><span className="text-sm font-medium">Full name</span><input required name="name" type="text" placeholder="Jordan Lee" className="mt-1.5 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-teal focus:ring-2 focus:ring-teal/20" /></label><label className="block"><span className="text-sm font-medium">Phone</span><input required name="phone" type="tel" placeholder="+1 (555) 000-0000" className="mt-1.5 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-teal focus:ring-2 focus:ring-teal/20" /></label></div><label className="mt-4 block"><span className="text-sm font-medium">Email</span><input required name="email" type="email" placeholder="you@example.com" className="mt-1.5 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-teal focus:ring-2 focus:ring-teal/20" /></label><label className="mt-4 block"><span className="text-sm font-medium">Service</span><select name="service" className="mt-1.5 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"><option>Primary care</option><option>Heart & blood</option><option>Wellness & sleep</option><option>Meridian Health Check</option></select></label><div className="mt-4 grid gap-4 sm:grid-cols-2"><label className="block"><span className="text-sm font-medium">Preferred date</span><input required name="date" type="date" className="mt-1.5 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-teal focus:ring-2 focus:ring-teal/20" /></label><label className="block"><span className="text-sm font-medium">Preferred time</span><select name="time" className="mt-1.5 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"><option>Morning</option><option>Early afternoon</option><option>Late afternoon</option></select></label></div><label className="mt-4 block"><span className="text-sm font-medium">Anything we should know?</span><textarea name="message" rows={3} placeholder="Optional — a note for your doctor" className="mt-1.5 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-teal focus:ring-2 focus:ring-teal/20" /></label><button disabled={formState === "loading"} type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-coral py-4 font-semibold text-primary-foreground transition-colors hover:bg-teal disabled:cursor-wait disabled:opacity-70">{formState === "loading" ? "Sending request…" : "Request appointment"} <ArrowRight size={17} /></button><p className="mt-3 text-center text-xs text-ink-soft">We’ll confirm by text. No payment needed to book.</p></>}
          </form>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20"><div className="flex flex-col gap-5 rounded-3xl border border-coral/30 bg-coral/10 p-7 md:flex-row md:items-center"><span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-coral text-primary-foreground"><MessageCircleHeart size={22} /></span><div><h3 className="font-display text-2xl font-bold">If it’s an emergency</h3><p className="mt-1 text-sm text-ink-soft">For chest pain, difficulty breathing, or a serious injury, call your local emergency number now. This clinic is for scheduled and urgent-but-stable care — not emergencies.</p></div><a href="tel:+917867089788" className="shrink-0 rounded-full bg-coral px-5 py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-teal">Emergency contact</a></div></section>
      </main>

      <footer id="contact" className="scroll-mt-20 bg-ink text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
          <div><div className="flex items-center gap-2.5"><span className="grid size-9 place-items-center rounded-xl bg-teal font-display text-lg font-bold text-primary-foreground">m</span><span className="font-display text-xl font-bold">meridian</span></div><p className="mt-4 max-w-[30ch] text-sm text-primary-foreground/60">A private clinic for calm, human, unhurried care.</p></div>
          <div><p className="font-mono text-xs text-primary-foreground/50">Visit</p><p className="mt-3 flex items-start gap-2 text-sm text-primary-foreground/80"><MapPin size={16} className="mt-0.5 shrink-0" />14 Larkspur Lane<br />Suite 200, Brightwater</p><p className="mt-4 font-mono text-xs text-primary-foreground/50">Hours</p><p className="mt-3 flex items-start gap-2 text-sm text-primary-foreground/80"><Clock3 size={16} className="mt-0.5 shrink-0" />Mon–Fri · 8am–6pm<br />Sat · 9am–1pm</p></div>
          <div><p className="font-mono text-xs text-primary-foreground/50">Contact</p><p className="mt-3 text-sm text-primary-foreground/80">hello@meridian.clinic<br />+1 (555) 018-2240</p><a href="#book" className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-coral">Book a visit <ArrowRight size={15} /></a></div>
        </div>
        <div className="border-t border-primary-foreground/10"><div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-5 py-6 text-xs text-primary-foreground/40"><span>© 2026 Meridian Clinic — a fictional prototype.</span><span>Privacy · Terms · Patient rights</span></div></div>
      </footer>
    </div>
  );
}