import { createFileRoute, Link } from "@tanstack/react-router";

import heroPortfolio from "../assets/hero-portfolio.jpg";
import workAlder from "../assets/work-alder.jpg";
import workMeridian from "../assets/work-meridian.jpg";
import workCardinal from "../assets/work-cardinal.jpg";
import workVessel from "../assets/work-vessel.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Margaux Ellery — Editorial & Identity Systems" },
      { name: "description", content: "A portfolio of identity systems, editorial programmes, and typographic foundations for cultural and academic clients." },
      { property: "og:title", content: "Margaux Ellery — Editorial & Identity Systems" },
      { property: "og:description", content: "A portfolio of identity systems, editorial programmes, and typographic foundations for cultural and academic clients." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink selection:bg-oxblood selection:text-paper">
      {/* Top masthead */}
      <header className="border-b border-rule">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10 lg:px-8">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-2xl tracking-tight">Margaux&nbsp;Ellery</span>
            <span className="hidden text-[10px] uppercase tracking-[0.35em] text-stone-mute sm:inline">
              Portfolio
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.25em] text-ink/80 md:flex">
            <a href="#work" className="transition-colors hover:text-oxblood">
              Work
            </a>
            <a href="#practice" className="transition-colors hover:text-oxblood">
              Practice
            </a>
            <a href="#contact" className="transition-colors hover:text-oxblood">
              Contact
            </a>
            <a
              href="#contact"
              className="border border-ink/30 px-4 py-2 transition-colors hover:bg-ink hover:text-paper"
            >
              Enquire
            </a>
          </nav>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-5 md:px-10 lg:px-8">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-stone-mute">
            <span>Vol. 04 — 2025</span>
            <span className="hidden sm:inline">Editorial &amp; Identity Systems</span>
            <span>London · Amsterdam</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-12 items-end gap-8 px-6 pb-14 pt-16 md:px-10 lg:px-8">
        <div className="col-span-12 lg:col-span-7">
          <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-oxblood">
            Selected Bodies of Work
          </p>
          <h1 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
            Quiet, considered design for institutions that intend to{" "}
            <em className="italic text-oxblood">last</em>.
          </h1>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-stone-mute">
            I build identity systems, editorial programmes, and typographic foundations for
            cultural and academic clients — work measured in decades, not launches.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <a
              href="#work"
              className="border-b border-ink/40 pb-1 font-serif text-lg italic transition-colors hover:border-oxblood hover:text-oxblood"
            >
              View the archive
            </a>
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-mute">
              Est. 2014
            </span>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <div className="overflow-hidden bg-parchment outline outline-1 -outline-offset-1 outline-ink/5">
            <img
              src={heroPortfolio}
              alt="Bound editorial portfolio on a slate desk with brass paperweights"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Practice index */}
      <section id="practice" className="border-y border-rule">
        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-8 px-6 py-14 md:px-10 lg:px-8">
          <div className="col-span-12 lg:col-span-4">
            <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-oxblood">
              The Practice
            </p>
            <h2 className="font-serif text-3xl leading-tight md:text-4xl">
              Disciplines of the studio
            </h2>
          </div>
          <div className="col-span-12 divide-y divide-rule lg:col-span-8">
            <div className="grid grid-cols-12 items-baseline gap-4 py-6">
              <span className="col-span-2 font-serif text-2xl text-oxblood">01</span>
              <div className="col-span-10">
                <h3 className="font-serif text-2xl">Identity Systems</h3>
                <p className="mt-1 max-w-md text-[14px] text-stone-mute">
                  Mark, wordmark, and the grammars that let a mark govern a body of work.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 items-baseline gap-4 py-6">
              <span className="col-span-2 font-serif text-2xl text-oxblood">02</span>
              <div className="col-span-10">
                <h3 className="font-serif text-2xl">Editorial &amp; Print</h3>
                <p className="mt-1 max-w-md text-[14px] text-stone-mute">
                  Catalogues, journals, and monographs built on disciplined typographic grids.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 items-baseline gap-4 py-6">
              <span className="col-span-2 font-serif text-2xl text-oxblood">03</span>
              <div className="col-span-10">
                <h3 className="font-serif text-2xl">Type &amp; Lettering</h3>
                <p className="mt-1 max-w-md text-[14px] text-stone-mute">
                  Commissioned faces and display lettering drawn for a single, exact purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-serif text-3xl md:text-4xl">Selected Work</h2>
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-mute">
            2019 — 2025
          </span>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <article className="col-span-12 md:col-span-6">
            <div className="overflow-hidden bg-parchment outline outline-1 -outline-offset-1 outline-ink/5">
              <img
                src={workAlder}
                alt="Open museum catalogue with refined serif type on ivory paper"
                width={1080}
                height={1080}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <h3 className="font-serif text-2xl">The Alder Institute</h3>
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-mute">
                Identity · 2024
              </span>
            </div>
            <p className="mt-1 text-[14px] text-stone-mute">
              A full visual system for a two-century-old research institute.
            </p>
          </article>

          <article className="col-span-12 md:col-span-6">
            <div className="overflow-hidden bg-parchment outline outline-1 -outline-offset-1 outline-ink/5">
              <img
                src={workMeridian}
                alt="Stacked art monographs with gilt-edged pages on slate cloth"
                width={1080}
                height={1080}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <h3 className="font-serif text-2xl">Meridian Journal</h3>
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-mute">
                Editorial · 2023
              </span>
            </div>
            <p className="mt-1 text-[14px] text-stone-mute">
              A biannual publication in a custom serif drawn for longform reading.
            </p>
          </article>

          <article className="col-span-12 md:col-span-6">
            <div className="overflow-hidden bg-parchment outline outline-1 -outline-offset-1 outline-ink/5">
              <img
                src={workCardinal}
                alt="Elegant letterform specimen sheet in oxblood ink"
                width={1080}
                height={1080}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <h3 className="font-serif text-2xl">Cardinal Type</h3>
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-mute">
                Lettering · 2022
              </span>
            </div>
            <p className="mt-1 text-[14px] text-stone-mute">
              A display face commissioned for a private library&apos;s signage.
            </p>
          </article>

          <article className="col-span-12 md:col-span-6">
            <div className="overflow-hidden bg-parchment outline outline-1 -outline-offset-1 outline-ink/5">
              <img
                src={workVessel}
                alt="Architectural exhibition wayfinding posters in a muted palette"
                width={1080}
                height={1080}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <h3 className="font-serif text-2xl">Vessel Foundation</h3>
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-mute">
                Editorial · 2021
              </span>
            </div>
            <p className="mt-1 text-[14px] text-stone-mute">
              Exhibition graphics and catalogue for a contemporary art foundation.
            </p>
          </article>
        </div>
      </section>

      {/* Footnote */}
      <footer id="contact" className="bg-slate-deep text-parchment">
        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-8 px-6 py-12 md:px-10 lg:px-8">
          <div className="col-span-12 md:col-span-6">
            <p className="font-serif text-3xl leading-tight">Correspondence</p>
            <p className="mt-3 text-[14px] text-parchment/70">
              studio@ellery.example — for commissions and enquiries.
            </p>
          </div>
          <div className="col-span-12 flex flex-col gap-2 text-[11px] uppercase tracking-[0.25em] text-parchment/60 md:col-span-3 md:col-start-9 md:text-right">
            <a href="#" className="transition-colors hover:text-gold">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-gold">
              Are.na
            </a>
            <a href="#" className="transition-colors hover:text-gold">
              Read.cv
            </a>
          </div>
        </div>
        <div className="border-t border-parchment/10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-[10px] uppercase tracking-[0.3em] text-parchment/40 md:px-10 lg:px-8">
            <span>© MMXXV Margaux Ellery</span>
            <span className="hidden sm:inline">Set in Cormorant Garamond &amp; Inter</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
