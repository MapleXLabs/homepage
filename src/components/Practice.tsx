import SectionHeader from './SectionHeader';

const items = [
  {
    n: '01',
    title: 'AI-native product engineering',
    body: 'Full-stack web and mobile applications with modern AI woven through the stack — not bolted on at the end. From prototype to production.',
    keywords: ['LLMs', 'evals', 'RAG', 'agents', 'embeddings', 'full-stack'],
  },
  {
    n: '02',
    title: 'Engineering leadership',
    body: 'Embedded fractional CTO and tech-lead engagements: architecture, hiring, sprint cadence, and the unglamorous work of getting a team to ship reliably.',
    keywords: ['fractional CTO', 'tech lead', 'architecture', 'hiring'],
  },
  {
    n: '03',
    title: 'Research-grade engineering',
    body: 'Bridging research and product. We have done it in medical engineering and biotech, where mistakes are expensive and standards are high.',
    keywords: ['medical eng.', 'biotech', 'regulated', 'scientific computing'],
  },
  {
    n: '04',
    title: 'Blockchain & Web3 engineering',
    body: 'Production work in the ICP / DFINITY ecosystem: token systems, canister architecture, authentication and provenance — built for security and longevity.',
    keywords: ['ICP', 'DFINITY', 'Gold DAO', 'ORIGYN', 'tokens', 'canisters'],
  },
  {
    n: '05',
    title: 'Strategic AI integration',
    body: 'Honest assessments of where AI helps, where it does not, and the evaluation loops you need so you can trust what ships.',
    keywords: ['scoping', 'evals', 'ROI', 'risk', 'vendor selection'],
  },
];

export default function Practice() {
  return (
    <section id="practice" className="py-24 border-b border-neutral-300">
      <div className="container-x">
        <SectionHeader
          number="01"
          label="Practice"
          title="Small, senior teams. AI-native build practice. Engineering rigor that lasts."
          description="MapleX takes on a handful of engagements at a time. Five things we do, in plain language."
        />

        <div>
          {items.map((it) => (
            <article
              key={it.n}
              className="group relative -mt-px border-y border-neutral-300 hover:border-ink hover:z-10 transition-colors duration-300 ease-out grid grid-cols-1 lg:grid-cols-[60px_1fr_280px] gap-6 py-8 reveal"
            >
              <div className="font-mono text-[14px] text-neutral-500 group-hover:text-ink transition-colors duration-300 ease-out">{it.n}</div>
              <div>
                <h3 className="font-display text-[24px] text-ink mb-2 group-hover:text-accent transition-colors duration-300 ease-out">{it.title}</h3>
                <p className="text-[16px] text-neutral-700 max-w-[60ch]">{it.body}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 content-start">
                {it.keywords.map((k) => (
                  <span
                    key={k}
                    className="font-mono text-[11px] uppercase tracking-[0.06em] text-neutral-700 border border-neutral-300 px-2 py-1 rounded-sm"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
