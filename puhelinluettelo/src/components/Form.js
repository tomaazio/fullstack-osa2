import React from 'react'
import Input from './Input'


const Form = (props) =>
  <div>
    <h3>Lisää uusi</h3>
    <form onSubmit={props.onSubmit}>
      <Input text="nimi" value={props.newName} name="Name" onChange={props.handleChange}/>
      <Input text="numero" value={props.newNumber} name="Number" onChange={props.handleChange}/>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  </div>

export default Form
