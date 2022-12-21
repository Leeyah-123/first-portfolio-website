import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Preloader from './components/Preloader';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [loading, setLoading] = useState(true);

  const handler = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handler);

      return () => {
        window.removeEventListener('load', handler);
      };
    }
  }, []);

  let resizeTimer;
  window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('resize-animation-stopper');
    }, 6000);
  });

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <header>
            <Header />
          </header>
          <main>
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
