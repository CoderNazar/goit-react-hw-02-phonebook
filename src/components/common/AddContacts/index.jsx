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
      <form onSubmit={onSubmit}>
        <Section title={'Name'}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Section>
        <Section title={'Number'}>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Section>
        <Button type={'submit'} text={'Add contact'} />
      </form>
    );
  }
}

export { AddContacts };
