import { useEffect, useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Preloader from './components/Preloader';
import Projects from './components/Projects';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.addEventListener(
      'load',
      () => {
        setLoading(false);
      },
      { capture: 'false' }
    );

    return () => {
      window.removeEventListener(
        'load',
        () => {
          setLoading(false);
        },
        { capture: 'false' }
      );
    };
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
            {/* <Skills /> */}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
