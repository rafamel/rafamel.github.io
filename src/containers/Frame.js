import React from 'react';
import PropTypes from 'prop-types';
import { withContext } from '~/utils/cxt';
import media from '~/utils/media';

const styles = ({ theme }) => ({
  header: {
    margin: '0 0 3.25em',
    [media('tablet', theme)]: {
      display: 'inline-block'
    }
  },
  name: {
    margin: '0 auto 0 0',
    fontSize: '3em',
    letterSpacing: '-3px',
    display: 'flex',
    flexDirection: 'column',
    '& > span': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: '0 0.5em 0 35px',
      paddingRight: '1.25em',
      margin: '2px auto 2px -35px',
      '&:last-child': {
        paddingRight: '1.75em'
      }
    },
    [media('tablet', theme)]: {
      fontSize: '5em',
      paddingRight: '1.75em',
      letterSpacing: 0,
      '& > span': {
        paddingRight: '0.75em',
        marginLeft: 0
      }
    }
  },
  subtitle: {
    margin: '1.25em 0 0 0',
    textAlign: 'right',
    fontFamily: 'Quicksand',
    span: {
      fontSize: '2.1em',
      margin: '0 0 0 0.4em',
      '@media only screen and (max-width: 355px)': {
        display: 'none'
      }
    }
  },
  github: {
    fontSize: 45,
    height: 45,
    position: 'fixed',
    bottom: 18,
    right: 18,
    color: 'rgba(36, 42, 47, 0.775)',
    overflow: 'hidden',
    transition: 'color linear 250ms',
    '&:hover': {
      color: 'rgba(36, 42, 47, 0.9)'
    },
    '&:after': {
      content: '""',
      borderRadius: '50%',
      background: '#fff',
      position: 'absolute',
      left: 2,
      right: 2,
      bottom: 2,
      top: 2,
      zIndex: 1
    },
    '& > i': {
      position: 'relative',
      zIndex: 2
    }
  }
});
const Frame = ({ children, styles }) => (
  <React.Fragment>
    <header css={styles.header}>
      <h1 css={styles.name}>
        <span>Rafa</span>
        <span>Melendez</span>
      </h1>
      <p css={styles.subtitle}>
        Building stuff somewhere around
        <span className="ec ec-earth-americas" />
      </p>
    </header>
    {children}
    <a
      css={styles.github}
      href="https://github.com/rafamel"
      // https://sourcerer.io/rafamel
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="devicon-github-plain" />
    </a>
  </React.Fragment>
);
Frame.propTypes = {
  children: PropTypes.element.isRequired
};

export default withContext({ styles })(Frame);
