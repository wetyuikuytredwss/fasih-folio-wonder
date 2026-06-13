import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/site/reveal";
import portraitAsset from "@/assets/portrait-suit.asset.json";
import mentoringAsset from "@/assets/mentoring.asset.json";
import deputyAsset from "@/assets/deputy-head-boy.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About, Muhammad Fasih Ur Rehman" },
      { name: "description", content: "About Muhammad Fasih Ur Rehman, student at H.H. Sheikh Khalifa Public School, leader, organiser, and builder." },
      { property: "og:title", content: "About Muhammad Fasih Ur Rehman" },
      { property: "og:description", content: "A journey shaped by learning, leadership, and meaningful contribution." },
      { property: "og:image", content: "/Screenshot_20260613-172749.png" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-primary/70 mb-5">About</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="text-display text-5xl md:text-7xl leading-[1.05] max-w-4xl">
              Learning. <span className="italic text-primary">Leading.</span> Leaving a positive impact.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <img
                src="/Screenshot_20260613-172749.png"
                alt="Muhammad Fasih Ur Rehman portrait"
                className="w-full rounded-xl shadow-[var(--shadow-elegant)] border border-border object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block bg-card border border-gold/40 rounded-lg px-5 py-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Senior Prefect</p>
                <p className="text-display text-xl text-primary">2025 / 2026</p>
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-7 space-y-6 text-[17px] leading-relaxed text-foreground/85">
            <Reveal>
              <p className="text-display text-2xl md:text-3xl text-foreground/95 italic">
                "Growth is a continuous process, and every experience offers an opportunity to learn something new."
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p>
                I am Muhammad Fasih Ur Rehman, a student at H.H. Sheikh Khalifa Public School. My journey has been shaped by a commitment to learning, a willingness to embrace responsibility, and an appreciation for opportunities that encourage growth and meaningful contribution.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Over the years, I have been fortunate to serve in student leadership, participate in academic and co-curricular conferences, organise school events, and contribute to creative projects. These experiences have strengthened my understanding of teamwork, organisation, and service while encouraging me to approach new challenges with confidence and curiosity.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p>
                Alongside my academics, I take a genuine interest in organising events, coordinating school initiatives, and bringing people together around shared experiences. From conferences to community gatherings, I enjoy the work of planning, coordinating, and seeing ideas come to life.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/30 border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Values" title="What guides the work" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Learning", d: "Every challenge is an invitation to grow. Curiosity drives the questions I ask and the projects I take on." },
              { t: "Leading", d: "Leadership is service. I aim to organise, listen, and create space for others to contribute meaningfully." },
              { t: "Building", d: "From events to web projects, I enjoy turning ideas into practical, polished outcomes." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 100}>
                <article className="h-full p-8 rounded-xl bg-card border border-border hover-lift">
                  <p className="text-display text-3xl text-primary mb-3">{v.t}</p>
                  <p className="text-muted-foreground leading-relaxed">{v.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src="/57375.jpeg" alt="Mentoring moment" className="rounded-xl border border-border shadow-[var(--shadow-elegant)]" />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs uppercase tracking-[0.4em] text-primary/70 mb-4">In practice</p>
            <h2 className="text-display text-4xl md:text-5xl leading-tight">Small moments. <span className="italic text-primary">Real impact.</span></h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
              Whether mentoring a younger student, organising an event, or representing a country at a Model UN, I try to bring the same care to every responsibility, and learn from each one.
            </p>
            <Link to="/experience" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-primary hover:gap-3 transition-all">
              See the experience →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <img
              src="/FB_IMG_1781346170365.jpg.jpeg"
              alt="Muhammad Fasih Ur Rehman wearing the Deputy Head Boy sash"
              className="w-full max-h-[640px] object-cover rounded-xl border border-gold/40 shadow-[var(--shadow-elegant)]"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
