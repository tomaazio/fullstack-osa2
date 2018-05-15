import React from 'react';
import Filter from './components/Filter'
import Form from './components/Form'
import PersonService from './services/persons'
import Person from './components/Person'


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
      number: this.state.newNumber,
      id: Number((Math.random()*9999999999).toFixed(0))
    }
    const isPersonOnList = this.state.persons.find(person =>
      person.name.toUpperCase() === personObject.name.toUpperCase().trim())

    return (
      isPersonOnList ?
        (
          alert('Henkilö on jo luettelossa'),
           this.setState({newName: '', newNumber: ''})
        ) : (
          PersonService
            .create(personObject)
            .then(persons => {
              this.setState((prevState) => {
                return {
                  persons: prevState.persons.concat(personObject),
                  newName: '',
                  newNumber: ''
                 }
              })
            })
            .catch(error => console.log('person not created'))
        )
    )
  }

  handleInputChange = (event) =>
    this.setState({
      ['new'+ event.target.name]: event.target.value
    })

  handleClick = (id, name) => () => {
    if (window.confirm(`poistetaanko ${name}`)) {
      PersonService
        .destroy(id)
        .then(persons => {
          this.setState((prevState) => {
            return {persons: prevState.persons.filter(person => person.id !== id)}
          })
        })
        .catch(error => console.log(error))
    }
  }

  namesToShow = () => {
    const search = this.state.newSearch.toUpperCase()
    return(
      this.state.persons.filter(person =>
        person.name.toUpperCase().includes(search))
    )
  }

  showPersons = () =>
      <table>
        <tbody>
          {this.namesToShow().map(person =>
             <Person
                key={person.name}
                handleClick={this.handleClick(person.id, person.name)}
                person={person}/>
              )}
        </tbody>
      </table>



  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Filter value={this.state.newSearch} handleChange={this.handleInputChange}/>
        <Form onSubmit={this.addPerson} newName={this.state.newName} newNumber={this.state.newNumber} handleChange={this.handleInputChange} />
        <h3>Numerot</h3>
        {this.showPersons()}
      </div>
    )
  }
}

export default App
