import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  static defaultProps = {
    children: null,
    title: '',
    className: '',
  };
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    className: PropTypes.string,
  };

  render() {
    const { title, className, children } = this.props;
    return (
      <section>
        <h2 className={className}>{title}</h2>
        {children}
      </section>
    );
  }
}

export { Section };
