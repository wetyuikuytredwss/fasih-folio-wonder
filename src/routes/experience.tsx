import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/reveal";
import certPrincipal from "@/assets/certificate-principal.asset.json";
import certMerit from "@/assets/certificate-merit.asset.json";
import podium from "@/assets/podium-speech.asset.json";
import mun from "@/assets/mun-delegates.asset.json";
import team from "@/assets/event-team.asset.json";
import team2 from "@/assets/event-team-2.asset.json";
import trophies from "@/assets/trophies-mun.asset.json";
import acsecHall from "@/assets/acsec-hall.asset.json";
import campus from "@/assets/aitchison-campus.asset.json";
import youngDelegate from "@/assets/young-delegate.asset.json";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience, Muhammad Fasih Ur Rehman" },
      { name: "description", content: "Student leadership roles, conference recognition, and community contributions of Muhammad Fasih Ur Rehman." },
      { property: "og:title", content: "Experience, Muhammad Fasih Ur Rehman" },
      { property: "og:description", content: "Leadership, conferences, and recognition across school and beyond." },
      { property: "og:image", content: mun.url },
    ],
  }),
  component: Experience,
});

type Tab = "leadership" | "conferences" | "community";

const leadership = [
  { role: "Deputy Head Boy", year: "2024 / 2025", note: "Senior student leadership role overseeing prefect duties and student initiatives." },
  { role: "School Prefect", year: "2025 / 2026", note: "Continuing to serve in a leadership capacity in the senior school." },
  { role: "School Prefect", year: "2022 / 2023", note: "Early experience in student leadership and responsibility." },
];

const conferences = [
  { title: "Rahim Yar Khan Model United Nations 2025", subtitle: "Event Coordinator", tag: "Organising" },
  { title: "Beaconhouse Rahim Yar Khan Model UN II", subtitle: "Delegate", tag: "Delegate" },
  { title: "Aitchison College ACSEC, 10th Edition", subtitle: "Runner-up, Langlands Research Prize Committee", tag: "Honour" },
  { title: "Aitchison College ACSEC, 10th Edition", subtitle: "Distinction, Adler's Abyss Committee", tag: "Honour" },
  { title: "First C3 English Roundtable Conference", subtitle: "Chair", tag: "Leadership" },
  { title: "C3 English Roundtable Conference", subtitle: "Special Mention", tag: "Honour" },
  { title: "AMUN First Edition", subtitle: "Delegate", tag: "Delegate" },
];

const community = [
  { t: "Children's Day Celebrations", d: "Helped organise the school's Children's Day events." },
  { t: "School Bonfires & Activities", d: "Contributed to student-led gatherings and traditions." },
  { t: "Community Initiatives", d: "Supported various school and community-driven projects." },
];

function Experience() {
  const [tab, setTab] = useState<Tab>("leadership");

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-primary/70 mb-5">Experience</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-display text-5xl md:text-7xl leading-[1.05] max-w-4xl">
              Leadership, conferences, and <span className="italic text-primary">contribution</span>.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12 inline-flex p-1 rounded-full border border-border bg-card">
              {([
                ["leadership", "Student Leadership"],
                ["conferences", "Conferences & Recognition"],
                ["community", "School Community"],
              ] as const).map(([k, l]) => (
                <button
                  key={k}
                  onClick={() => setTab(k)}
                  className={`relative px-5 py-2.5 text-sm rounded-full transition ${
                    tab === k ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {tab === k && (
                    <span className="absolute inset-0 rounded-full bg-primary -z-10" />
                  )}
                  {l}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {tab === "leadership" && (
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <ol className="relative border-l border-gold/40 pl-8 space-y-10">
                  {leadership.map((it, i) => (
                    <Reveal key={it.role + it.year} delay={i * 100}>
                      <li className="relative">
                        <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-gold ring-4 ring-background" />
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{it.year}</p>
                        <h3 className="text-display text-3xl text-primary mt-1">{it.role}</h3>
                        <p className="mt-2 text-foreground/80">{it.note}</p>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>
              <Reveal className="lg:col-span-5" delay={150}>
                <img src={podium.url} alt="Speaking from the podium" className="rounded-xl border border-border shadow-[var(--shadow-elegant)]" />
              </Reveal>
            </div>
          )}

          {tab === "conferences" && (
            <div className="grid md:grid-cols-2 gap-5">
              {conferences.map((c, i) => (
                <Reveal key={c.title + c.subtitle} delay={i * 70}>
                  <article className="group h-full p-7 rounded-xl border border-border bg-card hover-lift">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-gold">{c.tag}</span>
                      <span className="h-px flex-1 ml-4 bg-gradient-to-r from-gold/40 to-transparent" />
                    </div>
                    <h3 className="text-display text-2xl text-foreground mt-3">{c.title}</h3>
                    <p className="mt-2 text-muted-foreground">{c.subtitle}</p>
                  </article>
                </Reveal>
              ))}
              <Reveal className="md:col-span-2" delay={200}>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <img src={trophies.url} alt="MUN trophies as Event Coordinator" className="rounded-lg border border-gold/40 w-full h-72 object-cover" />
                  <img src={campus.url} alt="Aitchison College campus during ACSEC" className="rounded-lg border border-border w-full h-72 object-cover" />
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <img src={mun.url} alt="MUN delegates" className="rounded-lg border border-border w-full h-56 object-cover" />
                  <img src={acsecHall.url} alt="ACSEC conference hall" className="rounded-lg border border-border w-full h-56 object-cover" />
                  <img src={team.url} alt="Event team" className="rounded-lg border border-border w-full h-56 object-cover" />
                </div>
              </Reveal>
            </div>
          )}

          {tab === "community" && (
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <Reveal className="lg:col-span-5">
                <img src={certPrincipal.url} alt="Receiving a certificate" className="rounded-xl border border-border shadow-[var(--shadow-elegant)]" />
              </Reveal>
              <div className="lg:col-span-7 space-y-5">
                {community.map((c, i) => (
                  <Reveal key={c.t} delay={i * 100}>
                    <article className="p-6 rounded-xl border border-border bg-card hover-lift">
                      <h3 className="text-display text-2xl text-primary">{c.t}</h3>
                      <p className="mt-2 text-foreground/80">{c.d}</p>
                    </article>
                  </Reveal>
                ))}
                <Reveal delay={400}>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <img src={certMerit.url} alt="Certificate of merit" className="rounded-xl border border-border w-full" />
                    <img src={youngDelegate.url} alt="Younger delegate speaking at a conference" className="rounded-xl border border-border w-full object-cover h-full" />
                  </div>
                  <img src={team2.url} alt="Event team behind the scenes" className="mt-4 rounded-xl border border-border w-full object-cover max-h-80" />
                </Reveal>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
