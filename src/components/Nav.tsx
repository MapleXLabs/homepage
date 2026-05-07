import {useEffect, useState} from 'react';

const items = [
  {id: 'practice', label: 'Practice'},
  {id: 'partners', label: 'Partners'},
  {id: 'work', label: 'Work'},
  {id: 'founder', label: 'Founder'},
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, {passive: true});
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 h-[72px] flex items-center justify-between px-8 backdrop-blur-md backdrop-saturate-150 bg-paper/90 transition-colors ${
        scrolled ? 'border-b border-neutral-300' : 'border-b border-transparent'
      }`}
    >
      <a href='#top' className='flex items-baseline gap-3 no-underline'>
        <img src='/maplex-mark.svg' alt='' className='h-[30px] w-[30px]' />
        <span className='font-display text-[22px] leading-none tracking-[0.18em] text-ink font-normal'>
          MAPLEX
        </span>
      </a>
      <div className='hidden md:flex gap-9 items-center'>
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className='text-[14px] text-ink no-underline border-b border-transparent py-1.5 hover:text-accent hover:border-accent transition-colors'
          >
            {it.label}
          </a>
        ))}
      </div>
      <a
        href='#contact'
        className='inline-flex items-center gap-2 h-10 px-[18px] bg-ink text-paper text-[13px] font-medium rounded no-underline whitespace-nowrap hover:bg-accent hover:text-paper transition-colors'
      >
        Start a project <span aria-hidden='true'>→</span>
      </a>
    </nav>
  );
}
