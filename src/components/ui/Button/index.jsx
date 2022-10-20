import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static defaultProps = {
    text: '',
    className: '',
    handleClick: () => {},
  };

  static propTypes = {
    text: PropTypes.string,
    handleClick: PropTypes.func,
    className: PropTypes.string,
  };

  render() {
    const { text, handleClick, className, ...props } = this.props;
    return (
      <button className={className} onClick={handleClick} {...props}>
        {text}
      </button>
    );
  }
}

export { Button };
