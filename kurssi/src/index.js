import React from 'react'
import ReactDOM from 'react-dom'

const luoId = () => Math.floor(Math.random() * 999999)

const Otsikko = (props) =>
  <div>
    <h1>{props.nimi}</h1>
  </div>

const Osa = (props) =>
  <p>
    {props.osa} {props.tehtavia}
  </p>

const Sisalto = ({osat}) => {
  const rivit = osat.map(osa => <Osa key={luoId()} osa={osa.nimi} tehtavia={osa.tehtavia} />)
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

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      },
      {
        nimi: 'Redux',
        tehtavia: 7
      }
    ]
  }

  return (
    <div>
      <Kurssi kurssi={kurssi}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
