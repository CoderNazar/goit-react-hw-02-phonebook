import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Text extends Component {
  static defaultProps = {
    className: '',
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  render() {
    const { children, className } = this.props;
    return <p className={className}>{children}</p>;
  }
}

export { Text };
