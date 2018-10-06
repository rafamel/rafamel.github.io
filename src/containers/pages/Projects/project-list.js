export default [
  {
    name: 'Sloth Pilot',
    url: 'https://slothpilot.surge.sh/',
    description: `A basic routines app showcasing RxDB + rxdb-utils, kompi, and couchdb-proxy working together for an offline-first, fully reactive and synced PWA.`,
    icons: [
      'javascript',
      'parcel',
      'react',
      'auth0',
      'rxdb',
      'rxjs',
      'mobx',
      'emotion',
      'materialui',
      'node',
      'express',
      'couchdb',
      'docker',
      'babel'
    ]
  },
  {
    name: 'rxdb-utils',
    github: 'rafamel/rxdb-utils',
    description: `RxDB's missing pieces. Includes plugins and utilities for RxDB allowing, amongst other things, for single remote couchdb databases to be used for all collections, subscribable getter definitions for models with query ensurances, better observable returning function definitions, and conflict resolution.`,
    icons: ['javascript', 'rxdb', 'rxjs', 'jest', 'travis', 'babel']
  },
  {
    name: 'kompi (unreleased, ongoing)',
    github: 'rafamel/kompi',
    description: `Framework agnostic reactive component props composition. Currently only a React adapter is available. Builds on the precedent of recompose and proppy to create the swiss army knife of component props & component composition, with RxJS at its root.`,
    icons: ['javascript', 'rxjs', 'react', 'lerna', 'jest', 'travis', 'babel']
  },
  {
    name: 'couchdb-proxy (unreleased, ongoing)',
    // github: 'rafamel/couchdb-proxy',
    description: `A monorepo including a express-pluggable couchdb reverse proxy app, and a fully configured express application, for one-stop couchdb setup. Allows for custom authentication strategies and database action discrimination. Built to complement rxdb & rxdb-utils for a straightforwards infrastructure setup with CouchDB.`,
    icons: ['node', 'express', 'couchdb', 'lerna', 'jest', 'travis', 'babel']
  },
  {
    name: 'rxjs-utils (unreleased, ongoing)',
    github: 'rafamel/rxjs-utils',
    description: `RxJS 6 observable creation utils and operators.`,
    icons: ['javascript', 'rxjs', 'jest', 'travis', 'babel']
  },
  {
    name: 'electron-jamman',
    github: 'rafamel/electron-jamman',
    description: `An electron app to help out with JamMan Solo XT.`,
    icons: ['javascript', 'sqlite', 'electron', 'babel']
  },
  {
    name: 'aslug',
    github: 'rafamel/aslug',
    description:
      "Slug a string while preserving its uniqueness. By default, it substitutes each forbidden character for its code, surrounded by a separator. The clearest use case is for ids that must be made safe, while assuring they won't conflict with other valid ids.",
    icons: ['javascript', 'jest', 'travis', 'babel']
  },
  {
    name: 'react-boilerplate',
    github: 'rafamel/react-boilerplate',
    description:
      'Parcel w/ HMR, Babel, MobX & MST, Emotion, Material UI, Jest & Enzime. Packs default support for PWA, HMR, and contextual theming and store.',
    icons: [
      'javascript',
      'parcel',
      'react',
      'mobx',
      'emotion',
      'materialui',
      'jest',
      'babel'
    ]
  },
  {
    name: 'rest-api-boilerplate',
    github: 'rafamel/rest-api-boilerplate',
    description:
      'ES2017, Express, Postgress, Objection.js, tokens, and Docker, ready for the win.',
    icons: ['node', 'express', 'postgresql', 'objection', 'docker', 'babel']
  },
  {
    name: 'Textantly',
    github: 'rafamel/textantly',
    description: `A Progressive Web Application made with React. Image edition and captions, powered by your browser.`,
    icons: ['javascript', 'webpack', 'react', 'redux', 'materialui', 'babel']
  },
  {
    name: 'request-validation',
    github: 'rafamel/request-validation',
    description: `Express.js middleware for modular Joi request validations.`,
    icons: ['node', 'express', 'jest', 'travis']
  },
  {
    name: 'yaml-import',
    github: 'rafamel/yaml-import',
    description: `Import files and directories in YAML for a modular design.`,
    icons: ['node', 'jest', 'travis']
  },
  {
    name: 'joi-add',
    github: 'rafamel/joi-add',
    description: `Add and expand on previously defined Joi schemas. Define check-specific error messages. Add custom function validations.`,
    icons: ['javascript', 'babel', 'jest', 'travis']
  },
  {
    name: 'objection-before-and-unique',
    github: 'rafamel/objection-before-and-unique',
    description: `Advanced unique validation + Simpler before checks + Final schema validation for Objection.js`,
    icons: ['node', 'objection', 'jest', 'travis']
  },
  {
    name: 'Subtle Brackets',
    github: 'rafamel/subtle-brackets',
    description: `Underlined matching brackets and more for Visual Studio Code.`,
    icons: ['typescript', 'vscode']
  },
  {
    name: 'Print Ahoy',
    github: 'rafamel/print-ahoy',
    description: `Just an Electron app that prints all PDF files coming into a directory. Built to print on the host machine from a virtualized
    system when sending files to a shared folder.`,
    icons: ['javascript', 'electron']
  },
  {
    name: 'Themelier (unreleased)',
    github: 'rafamel/themelier',
    description: `Easy to personalize syntax and UI meta theme / theme editor / maker for VSCode, with some out-of-the-box presets.`,
    icons: ['typescript', 'vscode']
  },
  {
    name: 'Layout Control',
    github: 'rafamel/atom-layout-control',
    description: `Atom layout manager with Sublime Text-like shortcuts and commands featuring columns, rows, and grid.`,
    icons: ['javascript', 'atom']
  }
];
