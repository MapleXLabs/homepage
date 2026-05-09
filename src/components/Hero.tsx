import {useEffect, useState} from 'react';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, {passive: true});
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      id='top'
      className='relative border-b border-neutral-300 pt-16 pb-10 min-h-[calc(100svh-72px)] flex'
    >
      <div className='container-x w-full flex flex-col justify-center'>
        <p className='reveal in eyebrow'>MapleX — Engineering &amp; AI consultancy · Zürich</p>
        <div className='grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-end'>
          <div className='reveal in'>
            <h1 className='display-h1 max-w-[14ch]'>
              AI-native software,
              <br />
              shipped by senior
              <br />
              engineers who <em className='italic font-display text-accent'>build.</em>
            </h1>
            <p className='mt-8 max-w-[58ch] text-[19px] leading-[1.6] text-neutral-700'>
              MapleX is a boutique technical consultancy. We help founders, research teams, and
              product organizations turn ambitious ideas into production software — full-stack,
              AI-augmented, with engineering rigor borrowed from research and regulated industries.
            </p>
            <div className='mt-8 flex flex-wrap gap-3'>
              <a className='btn btn-primary' href='#contact'>
                Start a project <span aria-hidden='true'>→</span>
              </a>
              <a className='btn btn-ghost' href='#work'>
                Read selected work
              </a>
            </div>
          </div>
          <aside
            className='reveal in justify-self-end w-full max-w-sm border-t border-neutral-300 pt-4'
            aria-label='At a glance'
          >
            <div className='font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-4'>
              At a glance
            </div>
            <ul className='list-none p-0 m-0 divide-y divide-dashed divide-neutral-300'>
              {[
                ['Founder', 'Dustin Becker, PhD'],
                ['Practice', 'AI · full-stack'],
                ['Domain', 'Web · Web3 · medical'],
                ['Based', 'Zürich, CH'],
                ['Languages', 'EN · DE'],
              ].map(([k, v]) => (
                <li key={k} className='flex justify-between py-3 text-[14px]'>
                  <b className='text-ink font-medium'>{k}</b>
                  <span className='text-neutral-700'>{v}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <a
          href='#practice'
          aria-label='Scroll to next section'
          className={`absolute left-1/2 -translate-x-1/2 bottom-5 flex flex-col items-center gap-1.5 text-neutral-500 hover:text-ink no-underline transition-opacity duration-500 ${
            scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <span className='scroll-hint font-mono text-[10px] tracking-[0.18em] uppercase'>
            Scroll
          </span>
          <svg
            className='scroll-hint h-3 w-3'
            viewBox='0 0 12 12'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
            aria-hidden='true'
          >
            <path d='M3 5l3 3 3-3' />
          </svg>
        </a>

        <div className='reveal in mt-24 grid grid-cols-2 lg:grid-cols-4 gap-x-0'>
          {[
            ['Practice', 'AI-native build'],
            ['Domain', 'Web · Web3 · medical'],
            ['Engagements', 'Project · fractional'],
            ['Reply within', '2 business days'],
          ].map(([k, v]) => (
            <div key={k} className='border-t border-ink pt-5'>
              <div className='font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500 mb-1'>
                {k}
              </div>
              <div className='font-display text-[20px] text-ink'>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
