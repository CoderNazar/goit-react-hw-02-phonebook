import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

class InputName extends Component {
  static defaultProps = {
    label: [],
    onChange: () => {},
  };
  static propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
  };
  render() {
    const { onChange, label } = this.props;
    return (
      <div className={styles.wrapperInput}>
        {label && <label>{label}</label>}
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
        />
      </div>
    );
  }
}

export { InputName };
