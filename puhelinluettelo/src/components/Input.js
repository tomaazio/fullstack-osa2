import React from 'react'

const Input = (props) =>
    <div>
      {props.text}: <input value={props.value} name={props.name} onChange={props.onChange}/>
    </div>


export default Input
