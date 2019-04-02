import React from 'react';
import PropTypes from 'prop-types';
import IconGroup from '~/components/IconGroup';
import { cx, css } from 'emotion';
import { withContext } from '~/utils/cxt';
import media from '~/utils/media';

const h2Size = 22;
const styles = ({ theme }) => ({
  root: {
    margin: '0 0 1.75em',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    [media('tablet', theme)]: {
      textAlign: 'left'
    }
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    [media('tablet', theme)]: {
      flexDirection: 'row',
      marginRight: 'auto'
    }
  },
  title: {
    default: {
      fontSize: h2Size,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      margin: '0 -35px 1em',
      padding: '4px 35px',
      [media('tablet', theme)]: {
        margin: '0 1em 0 0',
        padding: '4px 1.1em 4px 6px'
      }
    },
    link: {
      cursor: 'pointer'
    }
  },
  description: {
    // fontFamily: 'Space Mono', fontWeight: 300, fontSize: 14,
    // fontFamily: 'Cousine', fontSize: 14,
    // fontFamily: 'Carme', fontSize: 13,
    fontFamily: 'Quicksand',
    fontSize: '0.9em',
    margin: '1.75em 0 0',
    lineHeight: 1.25
  }
});
class Project extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icons: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    url: PropTypes.string
  };
  static getDerivedStateFromProps({ github, url }, state) {
    if (!github && !url) return state;
    return {
      ...state,
      link: () => {
        // eslint-disable-next-line no-restricted-globals
        return window.open(
          github ? `https://github.com/${github}` : url,
          '_blank'
        );
      }
    };
  }
  state = {
    isActive: false,
    link: null
  };
  render() {
    const { name, description, icons, styles } = this.props;
    const { isActive, link } = this.state;
    return (
      <div
        css={styles.root}
        onMouseEnter={() => this.setState({ isActive: true })}
        onMouseLeave={() => this.setState({ isActive: false })}
      >
        <header css={styles.header}>
          {/* eslint-disable-next-line */}
          <h2
            onClick={link || (() => {})}
            className={cx({
              [css(styles.title.default)]: true,
              [css(styles.title.link)]: link
            })}
          >
            {name}
          </h2>
          <IconGroup icons={icons} isActive={isActive} />
        </header>
        {description && <p css={styles.description}>{description}</p>}
      </div>
    );
  }
}

export default withContext({ styles })(Project);
