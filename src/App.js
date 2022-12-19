import Header from './components/Header';
import About from './components/About';

function App() {
  let resizeTimer;
  window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('resize-animation-stopper');
    }, 400);
  });

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
