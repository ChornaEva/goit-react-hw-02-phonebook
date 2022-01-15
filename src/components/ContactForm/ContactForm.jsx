import React, { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import shortid from "shortid";
import PropTypes from "prop-types";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  // при отправке формы получаем введенные значения и очищаем её
  handleSubmit = (event) => {
    event.preventDefault();

    if (
      this.props.contacts.find((contact) => contact.name === this.state.name)
    ) {
      alert(`${this.state.name} is already in contacts`);
    } else {
      this.props.onSubmit(this.state);
      this.reset();
    }
  };

  // после отправки данных очищаем форму
  reset = () => {
    this.setState({ name: "", number: "" });
  };

  // создаем айди для будущих обьектов
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <div>
          <h1>Phonebook</h1>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              name="name"
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              placeholder=""
              onChange={this.handleInputChange}
              id={this.nameInputId}
            />
          </label>
          <label htmlFor={this.numberInputId}>
            Number
            <input
              name="number"
              type="text"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              placeholder=""
              onChange={this.handleInputChange}
              id={this.numberInputId}
            />
          </label>
          <button type="submit">Add contact</button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
