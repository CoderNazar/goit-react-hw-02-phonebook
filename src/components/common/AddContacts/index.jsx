import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, InputName, InputNumber } from 'components/ui';
import { Section } from 'components/hoc';

class AddContacts extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  render() {
    const { onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <Section title={'Name'}>
          <InputName />
        </Section>
        <Section title={'Number'}>
          <InputNumber />
        </Section>
        <Button type={'submit'} text={'Add contact'} />
      </form>
    );
  }
}

export { AddContacts };
