import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/ui';
import { Section } from 'components/hoc';

class AddContacts extends Component {
  static defaultProps = {};
  static propTypes = {};
  render() {
    const { onSubmit } = this.props;
    return (
      <Section title={'Phonebook'}>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Button type={'submit'} text={'Add contact'} />
        </form>
      </Section>
    );
  }
}

export { AddContacts };
