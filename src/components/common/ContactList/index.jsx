import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item } from 'components/ui';
import styles from './index.module.css';

class ContactList extends Component {
  static defaultProps = {
    contacts: [],
    deleteContact: () => {},
  };
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.string,
        id: PropTypes.string,
      })
    ),
    deleteContact: PropTypes.func,
  };
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <ul>
        {contacts.map(({ name, number, id }) => {
          return (
            <div key={id} className={styles.wrapperItem}>
              <Item>
                {name}: {number}
              </Item>
              <button onClick={() => deleteContact(id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    );
  }
}

export { ContactList };
