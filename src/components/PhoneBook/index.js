import {Component} from 'react'
import {v4} from 'uuid'

import ContactListSection from '../ContactListSection'
import './index.css'

class PhoneBook extends Component {
  state = {
    contactsList: [],
    userFirstname: '',
    userLastname: '',
    number: '',
  }

  onChangeFirstname = event => {
    this.setState({userFirstname: event.target.value})
  }

  onChangeLastname = event => {
    this.setState({userLastname: event.target.value})
  }

  onChangeNumber = event => {
    this.setState({number: event.target.value})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {userFirstname, userLastname, number} = this.state

    const nameValidation = function onlyAlphabets(word) {
      return /^[A-Za-z]*$/.test(word)
    }

    const isValidFirstname = nameValidation(userFirstname)
    const isValidLastname = nameValidation(userLastname)

    if (isValidFirstname && isValidLastname && number.length === 10) {
      const contact = {
        id: v4(),
        firstname: userFirstname,
        lastname: userLastname,
        number: parseInt(number),
      }

      this.setState(prevState => ({
        contactsList: [...prevState.contactsList, contact],
        userFirstname: '',
        userLastname: '',
        number: '',
      }))
    }
  }

  clickingDeleteButton = id => {
    const {contactsList} = this.state
    const newList = contactsList.filter(contact => contact.id !== id)

    this.setState({contactsList: newList})
  }

  render() {
    const {userFirstname, userLastname, number, contactsList} = this.state
    console.log(contactsList)
    return (
      <div className="phone-book">
        <h1 className="heading">Phone Book</h1>
        <hr />
        <div className="heading-section">
          <h1 className="headings">First Name</h1>
          <h1 className="headings">Last Name</h1>
          <h1 className="headings">Phone Number</h1>
          <h1 className="headings">Button</h1>
        </div>
        <hr />
        <ul className="contact-list-section">
          {contactsList.map(eachContact => (
            <ContactListSection
              contactDetails={eachContact}
              key={eachContact.id}
              clickingDeleteButton={this.clickingDeleteButton}
            />
          ))}
        </ul>
        <hr />
        <form onSubmit={this.onClickAddButton} className="form-element">
          <label htmlFor="firstname" className="label-element">
            Enter Firstname
          </label>
          <input
            id="firstname"
            type="text"
            className="input-element"
            value={userFirstname}
            onChange={this.onChangeFirstname}
            placeholder="Enter firstname"
          />
          <label htmlFor="lastname" className="label-element">
            Enter Lastname
          </label>
          <input
            type="text"
            id="lastname"
            className="input-element"
            value={userLastname}
            onChange={this.onChangeLastname}
            placeholder="Enter lastname"
          />
          <label htmlFor="number" className="label-element">
            Enter number
          </label>
          <input
            type="number"
            id="number"
            value={number}
            onChange={this.onChangeNumber}
            className="input-element"
            placeholder="Enter number"
          />
          <button type="submit" className="add-button">
            Add Number
          </button>
        </form>
      </div>
    )
  }
}

export default PhoneBook
