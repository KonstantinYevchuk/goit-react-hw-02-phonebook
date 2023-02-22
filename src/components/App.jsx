import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';

// import { Section } from './Section/Section';


export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }
  
  handleSubmitForm = ({name, number}) => {
          const newContact = {
          id: nanoid(),
          name,
          number,
        }; 
     
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
        
    }
    filterInput = e => {
      const { value } = e.currentTarget;
      this.setState({
        filter: value})
    }
  render() { 
    
    return (
      
      <div>
        <h1>Phonebook</h1>
        <Form submit={this.handleSubmitForm}/>
        <h2>Contacts</h2>
        <label>Find Contacts By Name
        <input type="text" value={this.state.filter} onChange={this.filterInput}/>
        </label>
          {this.state.contacts.length > 0 ? 
          (<ContactsList contacts={this.state.contacts} />) : 
          console.log('sorry')}   
      </div>
    );
  }
};
