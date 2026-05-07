import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Practice from './components/Practice';
import Partners from './components/Partners';
import Work from './components/Work';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Practice />
        <Partners />
        <Work />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
