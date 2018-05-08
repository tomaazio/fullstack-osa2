import React from 'react'
import Otsikko from './Otsikko'

const Osa = (props) =>
  <p>
    {props.osa} {props.tehtavia}
  </p>

const Sisalto = ({osat}) => {
  const rivit = osat.map(osa => <Osa key={osa.id} osa={osa.nimi} tehtavia={osa.tehtavia} />)
  return (
    <div>
      {rivit}
    </div>
  )
}

const Yhteensa = ({osat}) => {
  const tehtavat = osat.reduce((summa, osa) => {
    return summa + osa.tehtavia
  }, 0)
  return(
    <div>
      Yhteensä {tehtavat} tehtävää
    </div>
  )
}

const Kurssi = ({kurssi}) =>
  <div>
    <Otsikko nimi={kurssi.nimi}/>
    <Sisalto osat={kurssi.osat}/>
    <Yhteensa osat={kurssi.osat}/>
  </div>


export default Kurssi
