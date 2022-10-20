import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item } from 'components/ui';
import { Section } from 'components/hoc';

class Contacts extends Component {
  static defaultProps = {};
  static propTypes = {};
  render() {
    const { contacts } = this.props;
    return (
      <Section title={'Contacts'}>
        <ul>
          {contacts.map(({ name, number, id }) => {
            return <Item key={id}>{name}:{number}</Item>;
          })}
        </ul>
      </Section>
    );
  }
}

export { Contacts };
