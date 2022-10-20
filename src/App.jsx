import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { AddContacts, Contacts } from 'components/common';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  onSubmit(event) {
    event.preventDefault();
    const id = nanoid();
    const { name, number } = [...event.target.elements]
      .filter(item => item.name)
      .reduce(
        (item, element) => ((item[element.name] = element.value), item),
        {}
      );
    const newState = { ...this.state };
    const { contacts } = newState;
    contacts.push({ name, number, id });
    this.setState({
      ...newState,
      contacts,
    });
    event.currentTarget.reset();
  }

  render() {
    const { contacts } = this.state;
    return (
      <>
        <AddContacts onSubmit={this.onSubmit.bind(this)} />
        <Contacts contacts={contacts} />
      </>
    );
  }
}

export { App };
