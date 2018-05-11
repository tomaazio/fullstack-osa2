import React from 'react'

const Country = ({country}) =>
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital} </p>
      <p>Population: {country.population} </p>
      <img src={country.flag} alt="flag"/>
    </div>

export default Country
