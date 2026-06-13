import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Muhammad Fasih Ur Rehman" },
      { name: "description", content: "Get in touch with Muhammad Fasih Ur Rehman by email at fasihinq@gmail.com." },
      { property: "og:title", content: "Contact — Muhammad Fasih Ur Rehman" },
      { property: "og:description", content: "Send a note. I'd be glad to hear from you." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "fasihinq@gmail.com";

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--gold)_15%,transparent),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.5em] text-primary/70 mb-6 ornament">Contact</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-display text-5xl md:text-7xl leading-[1.05]">
            Let's <span className="italic text-primary">connect</span>.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Whether it's a question, collaboration, or just a hello — I'd be glad to hear from you.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-14 mx-auto max-w-2xl rounded-2xl border border-gold/40 bg-card p-8 md:p-12 shadow-[var(--shadow-elegant)]">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Email</p>
            <a
              href={`mailto:${email}`}
              className="mt-3 block text-display text-3xl md:text-5xl text-primary hover:text-gold transition break-all"
            >
              {email}
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-[var(--shadow-gold)] transition"
              >
                Send an email →
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(email);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-gold hover:text-primary transition"
              >
                {copied ? "Copied ✓" : "Copy address"}
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-12 text-sm text-muted-foreground italic">
            H.H. Sheikh Khalifa Public School, Rahim Yar Khan
          </p>
        </Reveal>
      </div>
    </section>
  );
}
