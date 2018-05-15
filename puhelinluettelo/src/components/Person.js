import React from 'react'

const Person = ({person, handleClick}) =>
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
      <td><button onClick={handleClick}>poista</button></td>
    </tr>

export default Person
