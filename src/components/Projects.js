import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Projects.scss';

const icons = {
  javascript: {
    name: 'Javascript',
    className: 'devicon-javascript-plain colored'
  },
  node: {
    name: 'Node.js',
    className: 'devicon-nodejs-plain colored'
  },
  express: {
    name: 'Express',
    className: 'devicon-express-original colored'
  },
  graphql: {
    name: 'GraphQL',
    className: 'tag-icon tag-graphql'
  },
  sequelize: {
    name: 'Sequelize ORM',
    className: 'devicon-sequelize-plain'
  },
  objection: {
    name: 'Knex + Objection ORM',
    className: 'tag-icon tag-knex'
  },
  babel: {
    name: 'Babel',
    className: 'devicon-babel-plain'
  },
  jest: {
    name: 'Jest',
    className: 'tag-icon tag-jest'
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
    className: 'tag-icon tag-redux'
  },
  materialui: {
    name: 'Material UI',
    className: 'tag-icon tag-materialui'
  },
  travis: {
    name: 'TravisCI',
    className: 'devicon-travis-plain colored'
  },
  postgresql: {
    name: 'PostgreSQL',
    className: 'devicons devicons-postgresql'
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
    className: 'devicon-visualstudio-plain'
  },
  atom: {
    name: 'Atom',
    className: 'devicon-atom-original colored'
  },
  electron: {
    name: 'Electron',
    className: 'tag-icon tag-electron'
  }
};

const projects = [
  {
    name: 'graphql-patio (ongoing)',
    description: `A deep dive into GraphQL on the server by implementing a roughly similar API with different patterns and stacks.`,
    icons: [
      icons.node,
      icons.express,
      icons.graphql,
      icons.sequelize,
      icons.objection,
      icons.babel
    ]
  },
  {
    name: 'rest-api-boilerplate (unreleased)',
    github: 'rafamel/rest-api-boilerplate',
    description:
      'ES2017, Express, Postgress, Objection.js, tokens, and Docker, ready for the win.',
    icons: [
      icons.node,
      icons.express,
      icons.postgresql,
      icons.objection,
      icons.docker,
      icons.babel
    ]
  },
  {
    name: 'Textantly',
    github: 'rafamel/textantly',
    description: `A Progressive Web Application made with React. Image edition and captions, powered by your browser.`,
    icons: [
      icons.javascript,
      icons.webpack,
      icons.react,
      icons.redux,
      icons.materialui,
      icons.babel
    ]
  },
  {
    name: 'request-validation',
    github: 'rafamel/request-validation',
    description: `Express.js middleware for modular Joi request validations.`,
    icons: [icons.node, icons.express, icons.jest, icons.travis]
  },
  {
    name: 'yaml-import',
    github: 'rafamel/yaml-import',
    description: `Import files and directories in YAML for a modular design.`,
    icons: [icons.node, icons.jest, icons.travis]
  },
  {
    name: 'joi-add',
    github: 'rafamel/joi-add',
    description: `Add and expand on previously defined Joi schemas. Define check-specific error messages. Add custom function validations.`,
    icons: [icons.node, icons.jest, icons.travis]
  },
  {
    name: 'objection-before-and-unique',
    github: 'rafamel/objection-before-and-unique',
    description: `Advanced unique validation + Simpler before checks + Final schema validation for Objection.js`,
    icons: [icons.node, icons.objection, icons.jest, icons.travis]
  },
  {
    name: 'Subtle Brackets',
    github: 'rafamel/subtle-brackets',
    description: `Underlined matching brackets and more for Visual Studio Code.`,
    icons: [icons.typescript, icons.vscode]
  },
  {
    name: 'Print Ahoy',
    github: 'rafamel/print-ahoy',
    description: `Just an Electron app that prints all PDF files coming into a directory. Built to print on the host machine from a virtualized
    system when sending files to a shared folder.`,
    icons: [icons.javascript, icons.electron]
  },
  {
    name: 'Themelier (unreleased)',
    github: 'rafamel/themelier',
    description: `Easy to personalize syntax and UI meta theme / theme editor / maker for VSCode, with some out-of-the-box presets.`,
    icons: [icons.typescript, icons.vscode]
  },
  {
    name: 'Layout Control',
    github: 'rafamel/atom-layout-control',
    description: `Atom layout manager with Sublime Text-like shortcuts and commands featuring columns, rows, and grid.`,
    icons: [icons.javascript, icons.atom]
  }
];

class Project extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    github: PropTypes.string,
    description: PropTypes.string,
    icons: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired
      })
    )
  };
  state = {
    active: null
  };
  handleHover = (name) => () => {
    this.setState({ active: name });
  };
  render() {
    const { name, github, description, icons } = this.props;
    const hProps = github
      ? {
          onClick: () => window.open(`https://github.com/${github}`, '_blank'),
          style: { cursor: 'pointer' }
        }
      : {};
    return (
      <div className="project-container">
        <header>
          <h2 {...hProps}>{name}</h2>
          <div className="icon-group">
            {icons.map((icon) => (
              <React.Fragment key={icon.name}>
                <div
                  className="icon-wrap"
                  onMouseEnter={this.handleHover(icon.name)}
                  onMouseLeave={() => this.setState({ active: null })}
                >
                  <span className={icon.className} />
                </div>
                <span
                  className={classnames({
                    'icon-name': true,
                    active: this.state.active === icon.name
                  })}
                >
                  {icon.name}
                </span>
              </React.Fragment>
            ))}
          </div>
        </header>
        {description && <p className="project-description">{description}</p>}
      </div>
    );
  }
}

const Projects = () => (
  <main>
    {projects.map((project) => <Project key={project.name} {...project} />)}
  </main>
);

export default Projects;
