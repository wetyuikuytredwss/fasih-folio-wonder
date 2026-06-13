import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal, SectionHeading } from "@/components/site/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Fasih Ur Rehman, Student. Leader. Builder." },
      { name: "description", content: "Portfolio of Muhammad Fasih Ur Rehman: leadership, conferences, and creative projects." },
      { property: "og:title", content: "Muhammad Fasih Ur Rehman, Portfolio" },
      { property: "og:image", content: "/FB_IMG_1781346114823.jpg.jpeg" },
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
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center w-full py-20">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.5em] text-primary/70 mb-6">Portfolio · {new Date().getFullYear()}</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-foreground">
              Muhammad <span className="italic shimmer-text">Fasih</span> <br /> Ur Rehman
            </h1>
          </Reveal>
          {/* ... Hero text content continues ... */}
        </div>

        <div className="lg:col-span-5 relative" onMouseMove={onMove} onMouseLeave={onLeave} style={{ perspective: "1200px" }}>
          <Reveal delay={300}>
            <div
              className="relative aspect-[4/5] w-full max-w-md mx-auto transition-transform duration-300 ease-out"
              style={{ transform: `rotateY(${tilt.x * 6}deg) rotateX(${-tilt.y * 6}deg)` }}
            >
              <img
                src="/FB_IMG_1781346114823.jpg.jpeg" 
                alt="Muhammad Fasih Ur Rehman"
                className="relative h-full w-full object-cover rounded-2xl shadow-[var(--shadow-elegant)]"
              />
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
        <SectionHeading eyebrow="Featured" title="Moments that shaped the journey" lead="A glimpse into leadership, conferences, and the experiences." />

        <div className="grid grid-cols-12 gap-5 md:gap-6">
          {/* Feature 1 */}
          <Reveal className="col-span-12 md:col-span-8 group" delay={0}>
            <Link to="/experience" className="block relative aspect-[16/10] overflow-hidden rounded-xl border border-border hover-lift">
              <img 
                src="/IMG_20251003_154145.jpg.jpg" 
                alt="Model UN delegates" 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/30 to-transparent" />
            </Link>
          </Reveal>

          {/* Feature 2 */}
          <Reveal className="col-span-12 md:col-span-4 group" delay={120}>
            <Link to="/experience" className="block relative aspect-[4/5] md:aspect-auto md:h-full overflow-hidden rounded-xl border border-border hover-lift">
              <img 
                src="/FB_IMG_1781345849302.jpg.jpeg" 
                alt="MUN trophies" 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" 
              />
            </Link>
          </Reveal>

          {/* Feature 3 */}
          <Reveal className="col-span-12 md:col-span-4 group" delay={180}>
            <Link to="/projects" className="block relative aspect-square overflow-hidden rounded-xl border border-border hover-lift">
              <img 
                src="/57375.jpg" 
                alt="Mentoring" 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" 
              />
            </Link>
          </Reveal>

          {/* Feature 4 */}
          <Reveal className="col-span-12 md:col-span-8 group" delay={240}>
            <Link to="/experience" className="block relative aspect-[16/9] overflow-hidden rounded-xl border border-border hover-lift">
              <img 
                src="/FB_IMG_1781346170365.jpg.jpeg" 
                alt="Aitchison College campus" 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" 
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Rest of your components remain the same
export default function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      {/* ... other sections ... */}
    </>
  );
}
