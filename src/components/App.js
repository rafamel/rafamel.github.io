import React from 'react';
import Projects from './Projects';
import './App.scss';

const App = () => (
  <React.Fragment>
    <header>
      <h1 className="name">
        <span>Rafa</span>
        <span>Melendez</span>
      </h1>
      <p>
        Building stuff somewhere around
        <span className="ec ec-earth-americas" />
      </p>
    </header>
    <Projects />
    <a
      className="github-btn"
      href="https://github.com/rafamel"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="devicon-github-plain" />
    </a>
  </React.Fragment>
);

export default App;
