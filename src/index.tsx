// Shims/Polyfills
import '@babel/polyfill';
// import 'whatwg-fetch';

// Fonts & Styles
import 'normalize.css';
import 'emoji.css/dist/emoji.min.css';
import 'devicons/css/devicons.min.css';
import 'devicon/devicon.min.css';
import googleFonts from 'google-fonts';

// React and SW
import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/containers/App';
import sw from '~/utils/sw';

// Config & HMR
import config from '~/config';
import logger from '~/utils/logger';

// Render
googleFonts.add({
  Karla: ['400', '700'],
  Quicksand: ['300', '400', '500', '700']
});
config.get('serviceWorker') ? sw.register() : sw.unregister();
ReactDOM.render(<App />, document.getElementById('root'));

logger.info(`Running on ${config.get('env')}`);
