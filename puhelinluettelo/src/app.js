import React from 'react';
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      newSearch: ''

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

  handleInputChange = (event) =>
    this.setState({
      ['new'+ event.target.name]: event.target.value
    })

  namesToShow = () => {
    const search = this.state.newSearch.toUpperCase()
    return(
      this.state.persons.filter(person =>
        person.name.toUpperCase().includes(search))
    )
  }


  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Filter value={this.state.newSearch} handleChange={this.handleInputChange}/>
        <Form onSubmit={this.addPerson} newName={this.state.newName} newNumber={this.state.newNumber} handleChange={this.handleInputChange} />
        <h3>Numerot</h3>
        <Persons persons={this.namesToShow()} />
      </div>
    )
  }
}

export default App
