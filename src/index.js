import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import googleFonts from 'google-fonts';

// Fonts & Styles
import 'emoji.css/dist/emoji.min.css';
import 'devicons/css/devicons.min.css';
import 'devicon/devicon.min.css';
import './index.scss';

googleFonts.add({
  Karla: ['400', '700'],
  Quicksand: ['300', '400', '500', '700']
});

ReactDOM.render(<App />, document.getElementById('root'));
