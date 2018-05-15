import React from 'react';
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'
import PersonService from './services/persons'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      newSearch: ''

    }
  }

  componentDidMount(){
    PersonService
      .getAll()
      .then(persons => {
        this.setState({
          persons: persons
        })
      })
      .catch(error => console.log('fail'))
  }

  addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    const isPersonOnList = this.state.persons.find(person =>
      person.name.toUpperCase() === personObject.name.toUpperCase())

    isPersonOnList ?
      (
        alert('Henkilö on jo luettelossa')
      ) : (
        PersonService
          .create(personObject)
          .then(persons => {
            this.setState((prevState) => {
              return { persons: prevState.persons.concat(personObject) }
            })
          })
          .catch(error => console.log('person not created'))
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
