import SectionHeader from './SectionHeader';

const partners = [
  {name: 'ETH Zürich', tag: 'Research institution', logo: '/logos/eth.png', url: 'https://ethz.ch'},
  {name: 'ORIGYN', tag: 'Tokenization', logo: '/logos/origyn.png', url: 'https://origyn.com'},
  {
    name: 'Gold DAO',
    tag: 'Web3 · Tokenized Gold',
    logo: '/logos/golddao.svg',
    url: 'https://gold-dao.org',
  },
  {
    name: 'DFINITY',
    tag: 'Blockchain · ICP ecosystem',
    logo: '/logos/dfinity.png',
    url: 'https://dfinity.org',
  },
  {
    name: 'PerfusionX',
    tag: 'Medical engineering',
    logo: '/logos/perfusionx.png',
    url: 'https://www.perfusionx.ch',
  },
  {
    name: 'Spectral Waves',
    tag: 'AI · signal analysis',
    logo: '/logos/spectral.png',
    url: 'https://spectralwaves.com',
  },
];

export default function Partners() {
  return (
    <section id='partners' className='py-24 bg-neutral-100 border-b border-neutral-300'>
      <div className='container-x'>
        <SectionHeader
          number='02'
          label='Partners'
          title='Trusted by research institutions, foundations, and product teams.'
          description='Selected partners across deep tech, medical engineering, and the ICP / DFINITY ecosystem.'
        />

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-ink bg-paper'>
          {partners.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target='_blank'
              rel='noopener noreferrer'
              style={{['--reveal-delay' as string]: `${i * 60}ms`}}
              className='reveal group relative h-[130px] flex flex-col items-center justify-center gap-1.5 px-4 pt-7 pb-3.5 border-r border-b border-ink no-underline text-inherit hover:bg-neutral-100 transition-colors'
            >
              <span className='absolute top-2.5 left-3 font-mono text-[10px] tracking-[0.1em] uppercase text-neutral-500'>
                {p.tag}
              </span>
              <img
                src={p.logo}
                alt={p.name}
                className='max-h-[42px] max-w-[80%] object-contain grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300 ease-out'
              />
              {/* <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-neutral-500">{p.name}</span> */}
            </a>
          ))}
        </div>

        <div className='reveal mt-12 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12'>
          <div className='font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500'>
            Featured collaboration
          </div>
          <div>
            <blockquote className='font-display text-[26px] leading-[1.3] text-ink m-0 max-w-[55ch]'>
              ETH Zürich — engineering consulting on PerfusionX, an ETH-affiliated initiative
              advancing ex-vivo organ perfusion. Grounded in research roots from{' '}
              <strong>Liver4Life</strong>, where the team kept human livers alive outside the body
              for a week.
            </blockquote>
            <cite className='block mt-4 not-italic font-mono text-[12px] tracking-[0.08em] uppercase text-neutral-500'>
              ETH Zürich · PerfusionX · Medical engineering
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
