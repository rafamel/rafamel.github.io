import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'emotion';
import iconList from './icon-list';

const iconSize = 34;
const styles = {
  root: {
    default: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      transition: 'all linear 250ms'
    },
    inactive: {
      opacity: 0.75,
      filter: 'saturate(0)'
    },
    active: {
      filter: 'saturate(0.7)',
      opacity: 1
    }
  },
  wrap: {
    padding: '0 3px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& > *': {
      fontSize: iconSize,
      width: iconSize,
      height: iconSize,
      display: 'block'
    }
  },
  name: {
    default: {
      position: 'absolute',
      left: '-50%',
      right: '-50%',
      top: 'calc(100% + 5px)',
      fontFamily: 'Quicksand',
      fontSize: '0.725em',
      fontWeight: 400,
      textAlign: 'center',
      transition: 'opacity linear 250ms'
    },
    inactive: {
      display: 'none',
      opacity: 0
    },
    active: {
      display: 'block',
      opacity: 1
    }
  }
};
class IconGroup extends React.Component {
  static propTypes = {
    icons: PropTypes.arrayOf(PropTypes.string).isRequired,
    isActive: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.string
  };
  state = {
    active: null
  };
  handleHover = (name) => () => {
    this.setState({ active: name });
  };
  render() {
    const { icons, isActive, className, style } = this.props;
    return (
      <div
        className={cx(className, {
          [css(styles.root.default)]: true,
          [css(styles.root.inactive)]: !isActive,
          [css(styles.root.active)]: isActive
        })}
        style={style}
      >
        {icons.map((name) => iconList[name]).map((icon) => (
          <React.Fragment key={icon.name}>
            <div
              css={styles.wrap}
              onMouseEnter={this.handleHover(icon.name)}
              onMouseLeave={() => this.setState({ active: null })}
            >
              <span className={cx(icon.className, css(icon.styles || {}))} />
            </div>
            <span
              className={cx({
                [css(styles.name.default)]: true,
                [css(styles.name.active)]: this.state.active === icon.name,
                [css(styles.name.inactive)]: this.state.active !== icon.name
              })}
            >
              {icon.name}
            </span>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default IconGroup;
