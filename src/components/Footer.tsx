export default function Footer() {
  return (
    <footer className='bg-ink text-paper py-16'>
      <div className='container-x'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-baseline gap-3 mb-3'>
              <img src='/maplex-mark.svg' alt='' className='h-[30px] w-[30px] invert' />
              <span className='font-display text-[22px] tracking-[0.18em]'>MAPLEX</span>
            </div>
            <p className='text-white/60 text-[14px] max-w-[280px] leading-[1.5]'>
              Engineering &amp; AI consultancy. AI-native software, full-stack engineering,
              technical leadership. Zürich.
            </p>
          </div>
          <FooterCol title='Practice'>
            <a href='#practice'>AI-native engineering</a>
            <a href='#practice'>Engineering leadership</a>
            <a href='#practice'>Research-grade engineering</a>
            <a href='#practice'>Blockchain &amp; Web3</a>
            <a href='#practice'>Strategic AI integration</a>
          </FooterCol>
          <FooterCol title='Selected work'>
            <a href='https://gldt.org' target='_blank' rel='noopener noreferrer'>
              Gold DAO ↗
            </a>
            <a href='https://origyn.com' target='_blank' rel='noopener noreferrer'>
              ORIGYN ↗
            </a>
            <a href='https://spectralwaves.com' target='_blank' rel='noopener noreferrer'>
              Spectralwaves ↗
            </a>
            <a href='https://www.perfusionx.ch' target='_blank' rel='noopener noreferrer'>
              PerfusionX (ETH) ↗
            </a>
          </FooterCol>
          <FooterCol title='Contact'>
            <a href='mailto:contact@maplex.ch'>contact@maplex.ch</a>
            <a href='#contact'>Start a project</a>
            <a href='/llms.txt' target='_blank' rel='noopener noreferrer'>
              llms.txt
            </a>
          </FooterCol>
        </div>
        <div className='mt-12 pt-6 flex flex-col md:flex-row justify-between gap-2 font-mono text-[11px] tracking-[0.08em] uppercase text-white/40'>
          <span>© {new Date().getFullYear()} MapleX · Zürich, Switzerland</span>
          <span>AI-native software · Engineering leadership</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({title, children}: {title: string; children: React.ReactNode}) {
  return (
    <div>
      <h4 className='font-mono text-[11px] tracking-[0.12em] uppercase text-white/60 mb-3 font-medium'>
        {title}
      </h4>
      <div className='flex flex-col gap-2 text-[14px] [&_a]:text-paper [&_a]:no-underline [&_a:hover]:text-accent [&_a]:transition-colors'>
        {children}
      </div>
    </div>
  );
}
