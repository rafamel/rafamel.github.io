// Shims/Polyfills
import 'babel-polyfill';
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
import serviceWorker from 'sw';

// Contexts
import { Provider } from 'cxt';
import contexts from './contexts';

// Config & HMR
import config from '~/config';
import hmr from 'hmr';

// Run all
googleFonts.add({
  Karla: ['400', '700'],
  Quicksand: ['300', '400', '500', '700']
});
serviceWorker();
const render = (Component) => {
  ReactDOM.render(
    <Provider value={contexts.root}>
      <Component />
    </Provider>,
    document.getElementById('root')
  );
};
render(App);

if (config.env.development) hmr(render, module.hot && module.hot.accept);
