import { injectGlobal } from 'emotion';
import prefetch from '@commons/lib/prefetch';
import electron from '@static/icons/electron.png';
import jest from '@static/icons/jest.png';
import knex from '@static/icons/knex.png';
import objection from '@static/icons/objection.png';
import redux from '@static/icons/redux.png';
import materialui from '@static/icons/materialui.png';
import graphql from '@static/icons/graphql.svg';
import mobx from '@static/icons/mobx.png';
import mst from '@static/icons/mst.svg';
import emotion from '@static/icons/emotion.png';
import sqlite from '@static/icons/sqlite.png';
import rxjs from '@static/icons/rxjs.png';
import couchdb from '@static/icons/couchdb.png';
import lerna from '@static/icons/lerna.png';
import parcel from '@static/icons/parcel.png';
import rxdb from '@static/icons/rxdb.png';
import auth0 from '@static/icons/auth0.png';
import router from '@static/icons/router.png';

// Prefetch images
prefetch.batchAdd([
  electron,
  jest,
  knex,
  objection,
  redux,
  materialui,
  graphql,
  mobx,
  mst,
  emotion,
  sqlite,
  rxjs,
  couchdb,
  lerna,
  parcel,
  rxdb,
  auth0,
  router
]);

const iconClass = `tag-icon-${Math.round(Math.random() * 10000)}`;
injectGlobal({
  [`.${iconClass}`]: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '90%'
  }
});

export default {
  javascript: {
    name: 'Javascript',
    className: 'devicon-javascript-plain colored',
    styles: {
      position: 'relative',
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 2,
        right: 2,
        bottom: 2,
        left: 2,
        background: '#3a3a3a',
        zIndex: -1
      }
    }
  },
  node: {
    name: 'Node.js',
    className: 'devicon-nodejs-plain colored',
    styles: { color: '#78bc8a' }
  },
  express: {
    name: 'Express',
    className: 'devicon-express-original colored'
  },
  mobx: {
    name: 'MobX',
    className: iconClass,
    styles: { backgroundImage: `url("${mobx}")` }
  },
  mst: {
    name: 'MobX State Tree',
    className: iconClass,
    styles: { backgroundImage: `url("${mst}")` }
  },
  parcel: {
    name: 'Parcel Bundler',
    className: iconClass,
    styles: { backgroundImage: `url("${parcel}")` }
  },
  emotion: {
    name: 'Emotion',
    className: iconClass,
    styles: { backgroundImage: `url("${emotion}")` }
  },
  sqlite: {
    name: 'SQLite',
    className: iconClass,
    styles: { backgroundImage: `url("${sqlite}")` }
  },
  rxjs: {
    name: 'RxJS',
    className: iconClass,
    styles: { backgroundImage: `url("${rxjs}")` }
  },
  rxdb: {
    name: 'RxDB',
    className: iconClass,
    styles: { backgroundImage: `url("${rxdb}")` }
  },
  couchdb: {
    name: 'CouchDB',
    className: iconClass,
    styles: { backgroundImage: `url("${couchdb}")` }
  },
  auth0: {
    name: 'Auth0',
    className: iconClass,
    styles: { backgroundImage: `url("${auth0}")` }
  },
  lerna: {
    name: 'Lerna',
    className: iconClass,
    styles: { backgroundImage: `url("${lerna}")` }
  },
  graphql: {
    name: 'GraphQL',
    className: iconClass,
    styles: { backgroundImage: `url("${graphql}")` }
  },
  sequelize: {
    name: 'Sequelize ORM',
    className: 'devicon-sequelize-plain',
    styles: { color: '#3d77b8' }
  },
  knex: {
    name: 'Knex',
    className: iconClass,
    styles: { backgroundImage: `url("${knex}")` }
  },
  objection: {
    name: 'Objection.js',
    className: iconClass,
    styles: { backgroundImage: `url("${objection}")` }
  },
  babel: {
    name: 'Babel',
    className: 'devicon-babel-plain',
    styles: { color: '#444444' }
  },
  jest: {
    name: 'Jest',
    className: iconClass,
    styles: {
      backgroundImage: `url("${jest}")`,
      backgroundSize: '70% !important'
    }
  },
  webpack: {
    name: 'Webpack',
    className: 'devicon-webpack-plain colored'
  },
  react: {
    name: 'React',
    className: 'devicon-react-original colored'
  },
  router: {
    name: 'React Router',
    className: iconClass,
    styles: { backgroundImage: `url("${router}")` }
  },
  redux: {
    name: 'Redux',
    className: iconClass,
    styles: { backgroundImage: `url("${redux}")` }
  },
  materialui: {
    name: 'Material UI',
    className: iconClass,
    styles: {
      backgroundImage: `url("${materialui}")`,
      backgroundSize: '82.5% !important'
    }
  },
  travis: {
    name: 'TravisCI',
    className: 'devicon-travis-plain colored'
  },
  postgresql: {
    name: 'PostgreSQL',
    className: 'devicons devicons-postgresql',
    styles: { color: '#40658d' }
  },
  docker: {
    name: 'Docker',
    className: 'devicon-docker-plain colored'
  },
  typescript: {
    name: 'Typescript',
    className: 'devicon-typescript-plain colored'
  },
  vscode: {
    name: 'Visual Studio Code',
    className: 'devicon-visualstudio-plain',
    styles: { color: '#3976bf' }
  },
  atom: {
    name: 'Atom',
    className: 'devicon-atom-original colored'
  },
  electron: {
    name: 'Electron',
    className: iconClass,
    styles: { backgroundImage: `url("${electron}")` }
  }
};
