import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/reveal";
import mysterySigning from "@/assets/mystery-signing.asset.json";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects, Muhammad Fasih Ur Rehman" },
      { name: "description", content: "Projects by Muhammad Fasih Ur Rehman, interactive school events and creative web design." },
      { property: "og:title", content: "Projects, Muhammad Fasih Ur Rehman" },
      { property: "og:description", content: "Creative projects bringing ideas to life: events, web design, and more." },
      { property: "og:image", content: mysterySigning.url },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    title: "Interactive School Murder Mystery",
    kind: "Event Design",
    scale: "School-wide collaborative event",
    summary: "A collaborative school event blending creativity, teamwork, and event planning. Designed and coordinated end to end to deliver an immersive evening of discovery for fellow students.",
    bullets: ["Concept & narrative design", "Logistics & coordination", "Audience engagement"],
    image: mysterySigning.url,
    accent: true,
  },
  {
    title: "Creative Web Design",
    kind: "Web & Design",
    scale: "Personal projects",
    summary: "Personal website projects exploring thoughtful design, structured organisation, and the practical applications of technology.",
    bullets: ["Visual identity", "Responsive layouts", "Hands-on iteration"],
    image: null as string | null,
    accent: false,
  },
];

function Projects() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-primary/70 mb-5">Projects</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-display text-5xl md:text-7xl leading-[1.05] max-w-4xl">
              Turning ideas into <span className="italic text-primary">practical</span> outcomes.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              A small collection of work, large in scope and careful in execution. Each project is an exercise in planning, collaboration, and craft.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article
                className={`group relative overflow-hidden rounded-2xl border hover-lift ${
                  p.accent
                    ? "bg-gradient-to-br from-emerald-deep to-emerald text-cream border-gold/40"
                    : "bg-card border-border"
                }`}
              >
                <div className="grid md:grid-cols-12 gap-0 items-stretch">
                  <div className={`p-8 md:p-14 ${p.image ? "md:col-span-7" : "md:col-span-12"}`}>
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em]">
                      <span className={p.accent ? "text-gold-soft" : "text-primary/70"}>{p.kind}</span>
                      <span className="opacity-50">·</span>
                      <span className={p.accent ? "text-cream/70" : "text-muted-foreground"}>{p.scale}</span>
                    </div>
                    <h2 className="mt-4 text-display text-4xl md:text-5xl leading-tight">{p.title}</h2>
                    <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${p.accent ? "text-cream/85" : "text-foreground/80"}`}>
                      {p.summary}
                    </p>
                    <ul className="mt-6 grid sm:grid-cols-3 gap-3">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm">
                          <span className="mt-2 h-px w-4 bg-gold flex-none" />
                          <span className={p.accent ? "text-cream/90" : "text-foreground/85"}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {p.image && (
                    <div className="md:col-span-5 relative min-h-[260px] md:min-h-0">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-emerald-deep/40 md:to-emerald-deep/20" />
                    </div>
                  )}
                </div>
                <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full border border-gold/20 pointer-events-none" />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-card/30 border-y border-border/60">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <SectionHeading
            eyebrow="What's next"
            title="More projects on the way"
            lead="Exploring new ideas at the intersection of events, organisation, and creative thinking."
          />
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:shadow-[var(--shadow-gold)] transition">
            Collaborate with me →
          </Link>
        </div>
      </section>
    </>
  );
}
