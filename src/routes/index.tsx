import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal, SectionHeading } from "@/components/site/reveal";
import podiumAsset from "@/assets/podium-speech.asset.json";
import munAsset from "@/assets/mun-delegates.asset.json";
import mentoringAsset from "@/assets/mentoring.asset.json";
import trophiesAsset from "@/assets/trophies-mun.asset.json";
import campusAsset from "@/assets/aitchison-campus.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Fasih Ur Rehman, Student. Leader. Builder." },
      { name: "description", content: "Portfolio of Muhammad Fasih Ur Rehman: leadership, conferences, and creative projects." },
      { property: "og:title", content: "Muhammad Fasih Ur Rehman, Portfolio" },
      { property: "og:description", content: "Learning. Leading. Leaving a positive impact." },
   { property: "og:image", content: "/FB_IMG_1781346114823.jpg.jpeg" },
      { name: "twitter:image", content: "/FB_IMG_1781346114823.jpg.jpeg" },
    ],
  }),
  component: Home,
});

function Hero() {
  const words = ["Student.", "Leader.", "Builder."];
  const [idx, setIdx] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    setTilt({ x, y });
  };
  const onLeave = () => setTilt({ x: 0, y: 0 });


  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_55%),radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--emerald-deep)_22%,transparent),transparent_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center w-full py-20">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.5em] text-primary/70 mb-6">
              Portfolio · {new Date().getFullYear()}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-foreground">
              Muhammad <span className="italic shimmer-text">Fasih</span> <br />
              Ur Rehman
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex items-baseline gap-3">
              <span className="text-display text-2xl md:text-3xl text-muted-foreground">A</span>
              <div className="relative h-12 md:h-14 overflow-hidden">
                {words.map((w, i) => (
                  <span
                    key={w}
                    className={`absolute left-0 text-display text-3xl md:text-4xl text-primary transition-all duration-700 ${
                      i === idx ? "translate-y-0 opacity-100" : i < idx ? "-translate-y-full opacity-0" : "translate-y-full opacity-0"
                    }`}
                  >
                    {w}
                  </span>
                ))}
                <span className="invisible text-display text-3xl md:text-4xl">Builder.</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed italic">
              Learning. Leading. Leaving a positive impact.
            </p>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:shadow-[var(--shadow-gold)]"
              >
                Explore the journey
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground hover:border-gold hover:text-primary transition"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 relative" onMouseMove={onMove} onMouseLeave={onLeave} style={{ perspective: "1200px" }}>
          <Reveal delay={300}>
            <div
              className="relative aspect-[4/5] w-full max-w-md mx-auto transition-transform duration-300 ease-out"
              style={{ transform: `rotateY(${tilt.x * 6}deg) rotateX(${-tilt.y * 6}deg)` }}
            >
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-gold/30 via-transparent to-emerald-deep/30 blur-2xl" />
              <div className="absolute inset-0 rounded-2xl border border-gold/30 rotate-3" />
              <img
                src="/FB_IMG_1781346114823.jpg.jpeg"
                alt="Muhammad Fasih Ur Rehman addressing the assembly at his school"
                className="relative h-full w-full object-cover rounded-2xl shadow-[var(--shadow-elegant)]"
                loading="eager"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at ${50 + tilt.x * 30}% ${50 + tilt.y * 30}%, color-mix(in oklab, var(--gold) 28%, transparent), transparent 55%)`,
                  mixBlendMode: "soft-light",
                }}
              />
              <div className="absolute -bottom-6 -left-6 bg-card border border-gold/40 rounded-lg px-4 py-3 shadow-[var(--shadow-elegant)]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Deputy Head Boy</p>
                <p className="text-display text-lg text-primary">2024 / 2025</p>
              </div>
            </div>
          </Reveal>
        </div>

      </div>

      <a
        href="#welcome"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition"
      >
        Scroll to learn more
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </a>
    </section>
  );
}

function useCountUp(target: number, suffix = "", start = false, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return `${value}${suffix}`;
}

function Stat({ n, suffix, l, delay }: { n: number; suffix: string; l: string; delay: number }) {
  const [show, setShow] = useState(false);
  const ref = (el: HTMLDivElement | null) => {
    if (!el || show) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShow(true); io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe(el);
  };
  const value = useCountUp(n, suffix, show);
  return (
    <Reveal delay={delay} className="text-center px-4">
      <div ref={ref}>
        <p className="text-display text-5xl md:text-6xl text-primary">{value}</p>
        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">{l}</p>
      </div>
    </Reveal>
  );
}

function Stats() {
  return (
    <section className="py-20 border-y border-border/60 bg-card/30">
      <div className="mx-auto max-w-3xl px-6 grid grid-cols-1 md:grid-cols-2 gap-y-10">
        <Stat n={3} suffix="×" l="School Leadership Roles" delay={0} />
        <Stat n={10} suffix="+" l="Conferences & Events" delay={80} />
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Deputy Head Boy",
    "RYK MUN 2025 — Event Coordinator",
    "Aitchison ACSEC — Runner-up",
    "Aitchison ACSEC — Distinction",
    "C3 Roundtable — Chair",
    "Beaconhouse MUN II — Delegate",
    "AMUN — Delegate",
    "School Prefect",
  ];
  const row = [...items, ...items];
  return (
    <section aria-hidden className="py-6 border-b border-border/60 overflow-hidden bg-background">
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_38s_linear_infinite] will-change-transform">
        {row.map((t, i) => (
          <span key={i} className="text-display text-xl md:text-2xl text-foreground/70">
            {t} <span className="text-gold mx-6">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section id="welcome" className="py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-primary/70 mb-5">Welcome</p>
            <h2 className="text-display text-4xl md:text-5xl leading-tight">
              A journey shaped by <span className="italic text-primary">learning</span>, leadership, and the pursuit of meaningful contribution.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 space-y-6 text-[17px] leading-relaxed text-foreground/85">
          <Reveal delay={120}>
            <p>
              I am Muhammad Fasih Ur Rehman, a student at H.H. Sheikh Khalifa Public School currently preparing for the next chapter of my studies. My journey has been shaped by a commitment to learning, a willingness to embrace responsibility, and an appreciation for opportunities that encourage growth and meaningful contribution.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              Over the years, I have been fortunate to serve in student leadership, participate in academic and co-curricular conferences, organise school events, and contribute to creative projects. These experiences have strengthened my understanding of teamwork, organisation, and service, encouraging me to approach new challenges with confidence and curiosity.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p>
              Alongside my academics, I enjoy organising events, contributing to school initiatives, and turning ideas into experiences that bring people together. I believe that growth is a continuous process and that every experience offers an opportunity to learn something new.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-primary hover:gap-3 transition-all"
              >
                Read the full story <span>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Featured"
          title="Moments that shaped the journey"
          lead="A glimpse into leadership, conferences, and the experiences that continue to inspire growth."
        />

        <div className="grid grid-cols-12 gap-5 md:gap-6">
          <Reveal className="col-span-12 md:col-span-8 group" delay={0}>
            <Link
              to="/experience"
              className="block relative aspect-[16/10] overflow-hidden rounded-xl border border-border hover-lift"
            >
              <img src="/IMG_20251003_154145.jpg.jpeg" alt="Model UN delegates" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-cream">
                <p className="text-xs uppercase tracking-[0.35em] text-gold-soft mb-2">Conferences</p>
                <h3 className="text-display text-3xl md:text-4xl">Aitchison ACSEC, Beaconhouse MUN, AMUN</h3>
                <p className="mt-3 max-w-xl text-cream/80">Delegate, chair, and event coordinator across some of the country's leading academic conferences.</p>
              </div>
            </Link>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-4 group" delay={120}>
            <Link
              to="/experience"
              className="block relative aspect-[4/5] md:aspect-auto md:h-full overflow-hidden rounded-xl border border-border hover-lift"
            >
              <img src="/FB_IMG_1781345849302.jpg.jpeg" alt="MUN trophies awarded as Event Coordinator" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-1">Recognition</p>
                <h3 className="text-display text-2xl">Honoured across conferences</h3>
              </div>
            </Link>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-4 group" delay={180}>
            <Link
              to="/projects"
              className="block relative aspect-square overflow-hidden rounded-xl border border-border hover-lift"
            >
              <img src="/57375.jpeg" alt="Mentoring a younger student" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-soft mb-1">Service</p>
                <h3 className="text-display text-2xl">Mentoring & community</h3>
              </div>
            </Link>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-8 group" delay={240}>
            <Link
              to="/experience"
              className="block relative aspect-[16/9] overflow-hidden rounded-xl border border-border hover-lift"
            >
              <img src="/IMG-20251023-WA0088.jpg.jpeg" alt="Aitchison College campus during ACSEC" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-cream">
                <p className="text-xs uppercase tracking-[0.35em] text-gold-soft mb-2">Beyond the classroom</p>
                <h3 className="text-display text-3xl md:text-4xl">Representing the school nationally</h3>
                <p className="mt-3 max-w-xl text-cream/80">From Aitchison College to Beaconhouse, carrying the school's voice into respected national forums.</p>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.5em] text-primary/70 mb-6 ornament">Looking forward</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            Embracing every new chapter with <span className="italic text-primary">curiosity</span> and <span className="italic text-primary">purpose</span>.
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            I look forward to building on the experiences that have shaped my journey, contributing to the communities around me, and embracing new challenges that encourage growth.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/projects" className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:shadow-[var(--shadow-gold)] transition">
              See projects
            </Link>
            <Link to="/contact" className="rounded-full border border-border px-7 py-3.5 text-sm font-medium hover:border-gold hover:text-primary transition">
              Reach out
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
      <div className="h-full bg-gradient-to-r from-gold via-primary to-gold" style={{ width: `${p}%` }} />
    </div>
  );
}

function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <Stats />
      <Marquee />
      <Welcome />
      <FeatureGrid />
      <CTA />
    </>
  );
}
