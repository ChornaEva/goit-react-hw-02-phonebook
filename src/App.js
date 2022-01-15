import "./App.css";
import React, { Component } from "react";
import shortid from "shortid";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  // запись в контакты новый контакт
  addContact = ({ name, number }) => {
    const userContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, userContact],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevstate) => ({
      contacts: prevstate.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  // сохраняем в стейт данные фильтра
  changeInputFilter = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();

    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <ContactForm
          onSubmit={this.addContact}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeInputFilter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
