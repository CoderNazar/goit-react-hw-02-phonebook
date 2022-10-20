import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { AddContacts, Contacts } from 'components/common';

class App extends Component {
  state = {
    contacts: [],
    current: [],
  };

  filterContacts({ target }) {
    const value = target.value;
    const newState = { ...this.state };
    const { current } = newState;
    const filteredContact = current.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      ...newState,
      contacts: filteredContact,
    });
  }

  deleteContact(idContact) {
    const newState = { ...this.state };
    const { current } = newState;
    const newContacts = current.filter(({ id }) => id !== idContact);
    this.setState({
      ...newState,
      contacts: newContacts,
      current: newContacts,
    });
  }

  getIsSameName(nameNewContact) {
    const { current } = { ...this.state };
    return current.some(({ name }) => name === nameNewContact);
  }

  onSubmit(event) {
    event.preventDefault();
    const { name, number } = [...event.target.elements]
      .filter(item => item.name)
      .reduce(
        (item, element) => ((item[element.name] = element.value), item),
        {}
      );
    const isSame = this.getIsSameName(name);
    if (!isSame) {
      const id = nanoid();
      const newState = { ...this.state };
      const { contacts } = newState;
      contacts.push({ name, number, id });
      this.setState({
        ...newState,
        contacts,
        current: contacts,
      });
      event.currentTarget.reset();
    } else {
      alert(`${name} is already in contacts.`);
    }
  }

  render() {
    const { contacts } = this.state;
    return (
      <>
        <AddContacts onSubmit={this.onSubmit.bind(this)} />
        <Contacts
          contacts={contacts}
          filterContacts={this.filterContacts.bind(this)}
          deleteContact={this.deleteContact.bind(this)}
        />
      </>
    );
  }
}

export { App };
