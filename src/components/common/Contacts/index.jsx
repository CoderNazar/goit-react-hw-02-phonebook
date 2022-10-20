import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputName } from 'components/ui';
import { Section } from 'components/hoc';
import { ContactList } from '../ContactList';

class Contacts extends Component {
  static defaultProps = {
    contacts: [],
    filterContacts: () => {},
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
    filterContacts: PropTypes.func,
    deleteContact: PropTypes.func,
  };
  render() {
    const { contacts, filterContacts, deleteContact } = this.props;
    return (
      <Section title={'Contacts'}>
        <InputName onChange={filterContacts} label={'Find contacts by name'} />
        <ContactList contacts={contacts} deleteContact={deleteContact} />
      </Section>
    );
  }
}

export { Contacts };
