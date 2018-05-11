import React from 'react';
import Persons from './components/Persons'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123123'}
      ],
      newName: '',
      newNumber: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    const persons = this.state.persons.concat(personObject)
    this.isPersonOnTheList(personObject, persons)
  }

  isPersonOnTheList = (newPerson, persons) => {
    this.state.persons.find(person =>
      person.name.toUpperCase() === newPerson.name.toUpperCase()) ?
      (
        alert('Person already on list')
      ) : (
        this.setState({
          persons: persons,
          newName: '',
          newNumber: ''
        })
      )
  }

  handleInputChange = (event) => {
    this.setState({
      ['new'+ event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input value={this.state.newName} name="Name" onChange={this.handleInputChange} />
          <div>
          </div>
            puhelinnumero <input value={this.state.newNumber} name="Number" onChange={this.handleInputChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <Persons persons={this.state.persons} />
      </div>
    )
  }
}

export default App
