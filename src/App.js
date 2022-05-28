import { useEffect, useState } from 'react';
import About from './pages/About';
import Introduce from './pages/Introduce';
import Menu from './pages/Menu';
import Skill from './pages/Skill';

function App() {
  useEffect(() => {
    const tmvSections = document.querySelectorAll('.tmv');

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        target.classList.toggle('active', entry.isIntersecting);
      });
    }, {});

    tmvSections.forEach((tmvElm) => {
      intersectionObserver.observe(tmvElm);
    });
  }, []);
  return (
    <div className="App">
      {/* <Menu /> */}
      <Introduce />
      <About />
      <Skill />
    </div>
  );
}

export default App;
