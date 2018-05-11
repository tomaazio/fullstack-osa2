import React from 'react';
import Person from './components/Person'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: this.state.newName
    }
    const persons = this.state.persons.concat(personObject)
    this.setState({
      persons: persons,
      newName: ''
    })

  }

  handleInputChange = (event) => {
    this.setState({
      newName: event.target.value
    })
  }

  showPersons = () =>
    this.state.persons.map(person => <Person key={person.name} person={person}/>)

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleInputChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {this.showPersons()}
      </div>
    )
  }
}

export default App
