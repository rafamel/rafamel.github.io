import { injectGlobal } from 'emotion';
import prefetch from '@commons/lib/prefetch';
import electron from '@static/icons/electron.png';
import jest from '@static/icons/jest.png';
import knex from '@static/icons/knex.png';
import redux from '@static/icons/redux.png';
import materialui from '@static/icons/materialui.png';
import graphql from '@static/icons/graphql.svg';

// Prefetch images
prefetch.batchAdd([electron, jest, knex, redux, materialui, graphql]);

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
  objection: {
    name: 'Knex + Objection ORM',
    className: iconClass,
    styles: { backgroundImage: `url("${knex}")` }
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
