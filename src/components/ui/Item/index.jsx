import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.module.css';

class Item extends Component {
  static defaultProps = {
    children: null,
    className: '',
  };
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };
  render() {
    const { children, className } = this.props;
    return (
      <li className={className}>{children}</li>
    );
  }
}

export { Item };
