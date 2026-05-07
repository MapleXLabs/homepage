import SectionHeader from './SectionHeader';

export default function Founder() {
  return (
    <section id='founder' className='py-24 bg-neutral-100 border-b border-neutral-300'>
      <div className='container-x'>
        <SectionHeader
          number='04'
          label='Founder'
          title='A PhD engineer and technical leader, building software the way research teams build instruments.'
        />

        <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-10 items-start'>
          <div className='aspect-[4/5] border border-ink overflow-hidden'>
            <img
              src='/dustin-becker.jpg'
              alt='Dustin Becker, founder of MapleX'
              className='w-full h-full object-cover grayscale contrast-[1.05] hover:grayscale-0 hover:contrast-100 transition-[filter] duration-500'
            />
          </div>

          <div className='text-[17px] text-neutral-700 leading-[1.7] max-w-[60ch] space-y-4'>
            <h3 className='font-display text-[28px] text-ink m-0'>Dustin Becker, PhD</h3>
            <p className='font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 m-0'>
              Founder · Technical leader · Engineer
            </p>
            <p>
              <strong className='text-ink font-medium'>Dustin Becker</strong> is the founder of
              MapleX — a PhD engineer and technical leader whose career spans medical engineering
              research and modern product software.
            </p>
            <p>
              His research roots include{' '}
              <strong className='text-ink font-medium'>Liver4Life</strong>, the ETH-affiliated team
              that achieved week-long ex-vivo human liver perfusion — work that shaped a practice
              grounded in scientific rigor. He later consulted on{' '}
              <strong className='text-ink font-medium'>PerfusionX</strong>, an ETH initiative
              advancing ex-vivo organ perfusion engineering.
            </p>
            <p>
              Today he leads MapleX engagements as a hands-on builder: full-stack software,
              AI-augmented workflows, and the ICP / DFINITY blockchain ecosystem. Past work includes{' '}
              <strong className='text-ink font-medium'>Gold DAO</strong>,{' '}
              <strong className='text-ink font-medium'>ORIGYN</strong>, and{' '}
              <strong className='text-ink font-medium'>Spectralwaves</strong>.
            </p>
            <p>He runs teams, ships product, and writes code — from research lab to production.</p>
          </div>

          <aside className='border border-ink p-6 bg-paper' aria-label='Credentials'>
            <div className='font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-4'>
              Credentials
            </div>
            <ul className='list-none p-0 m-0 divide-y divide-neutral-300 text-[14px]'>
              {[
                ['PhD', 'engineering'],
                ['Medical engineering', 'Liver4Life roots'],
                ['Technical leader', 'running teams, shipping product'],
                ['Full-stack engineer', 'AI-native workflow'],
                ['Web3', 'ICP / DFINITY ecosystem'],
                ['Based', 'Switzerland'],
                ['Languages', 'EN · DE'],
              ].map(([k, v]) => (
                <li key={k} className='py-2.5 text-neutral-700'>
                  <b className='text-ink font-medium'>{k}</b> — {v}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
