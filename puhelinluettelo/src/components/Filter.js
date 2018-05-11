import React from 'react'
import Input from './Input'

const Filter = (props) =>
   <Input text="rajaa näytettäviä"
          value={props.value}
          name="Search"
          onChange={props.handleChange} />

export default Filter
