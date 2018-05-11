import React from 'react'
import Person from './Person'

const Persons = ({persons}) => {

  return(
    <table>
      <tbody>
        {persons.map(person => <Person key={person.name} person={person}/>)}
      </tbody>
    </table>
  )
}

export default Persons
