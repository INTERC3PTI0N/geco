import Reveal from "@/components/Reveal";

export default function PageHeader({ eyebrow, title, accent, body, children }) {
  return (
    <header className="section-pad relative overflow-hidden pt-36 pb-14 lg:pt-44 lg:pb-20">
      <div className="dotgrid pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(60% 70% at 80% 0%, rgba(27,95,217,0.10), transparent 60%)" }} />
      <div className="maxw relative">
        {eyebrow && (
          <Reveal as="span" className="eyebrow inline-flex items-center gap-3">
            <span className="h-px w-8 bg-blue" /> {eyebrow}
          </Reveal>
        )}
        <Reveal as="h1" delay={0.05} className="font-display mt-5 max-w-4xl text-4xl font-bold leading-[1.04] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {title} {accent && <span className="text-gradient-blue">{accent}</span>}
        </Reveal>
        {body && (
          <Reveal as="p" delay={0.1} className="mt-6 max-w-2xl text-lg text-ink-2">
            {body}
          </Reveal>
        )}
        {children}
      </div>
    </header>
  );
}
