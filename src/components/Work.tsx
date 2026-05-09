import SectionHeader from './SectionHeader';

const items = [
  {
    name: 'GLDT / Gold DAO',
    tag: 'Product · Web3 · ICP',
    blurb:
      'Gold-backed digital tokens. End-to-end product engineering, from contract design to the user-facing application.',
    role: 'Product · engineering lead',
    url: 'https://gldt.org',
  },
  {
    name: 'ORIGYN',
    tag: 'Product · authentication & provenance',
    blurb:
      'Digital authentication for high-value physical objects. Platform engineering and product delivery on the ICP / DFINITY stack.',
    role: 'Platform · engineering lead',
    url: 'https://origyn.com',
  },
  {
    name: 'Spectralwaves',
    tag: 'Product · AI financial analysis',
    blurb:
      'A modern platform for working with spectral data. Full-stack build with AI-augmented analysis at its core.',
    role: 'Full-stack · AI',
    url: 'https://spectralwaves.com',
  },
  {
    name: 'PerfusionX (ETH Zürich)',
    tag: 'Consulting · medical engineering',
    blurb:
      'Engineering consulting on PerfusionX, an ETH-affiliated initiative advancing ex-vivo organ perfusion.',
    role: 'Engineering consulting',
    url: 'https://www.perfusionx.ch',
  },
];

export default function Work() {
  return (
    <section id='work' className='py-24 border-b border-neutral-300'>
      <div className='container-x'>
        <SectionHeader
          number='03'
          label='Selected work'
          title='A few of the products MapleX has helped design, build, or lead.'
          description='Across Web3, AI, and medical engineering. Click through for details.'
        />

        <div className='divide-y divide-neutral-300 border-t border-neutral-300'>
          {items.map((it, i) => {
            const className =
              'reveal grid grid-cols-1 lg:grid-cols-[1.2fr_2fr_1fr_30px] gap-6 py-8 no-underline text-inherit group';
            const style = {['--reveal-delay' as string]: `${i * 80}ms`} as React.CSSProperties;
            const inner = (
              <>
                <div>
                  <div className='font-display text-[22px] text-ink'>{it.name}</div>
                  <span className='font-mono text-[11px] tracking-[0.08em] uppercase text-neutral-500'>
                    {it.tag}
                  </span>
                </div>
                <p className='text-[16px] text-neutral-700 m-0 max-w-[55ch]'>{it.blurb}</p>
                <div className='font-mono text-[12px] tracking-[0.08em] uppercase text-neutral-500'>
                  {it.role}
                </div>
                <div className='text-ink text-right text-[20px]'>{it.url ? '↗' : '·'}</div>
              </>
            );
            return it.url ? (
              <a
                key={it.name}
                style={style}
                className={className + ' hover:bg-neutral-100 transition-colors'}
                href={it.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {inner}
              </a>
            ) : (
              <div key={it.name} style={style} className={className}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
