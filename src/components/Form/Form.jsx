import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Form extends Component {
    state = {
        name: '',
        number: ''
    }
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
          [name]: value,
        })
      }
      handleSubmit = e => {
        e.preventDefault();
        this.props.submit(this.state)
        e.currentTarget.reset()
        }
      reset = () => {
        this.setState({ name: '', number: ''})
      }
    render() {
        return (
      
            <div>
              <form onSubmit={this.handleSubmit}>
              <label htmlFor=""> Name
              <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              />
              </label>
              <label htmlFor="">Number
              <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              />
              </label>
              <button type="submit">Add contact</button>
              </form>
            </div>
          );
    }
}
Form.propTypes = {
    submit: PropTypes.func.isRequired
}