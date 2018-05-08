import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) =>
  <div>
    <h1>{props.nimi}</h1>
  </div>

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

const Opetusohjelma = ({kurssit}) => {
  const rivit = kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi}/>)
  return (
    <div>
      <Otsikko nimi="Opetusohjelma"/>
      {rivit}
    </div>
  )
}


const App = () => {
  const kurssit = [
      {
        nimi: 'Half Stack -sovelluskehitys',
        id: 1,
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10,
            id: 1
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7,
            id: 2
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14,
            id: 3
          }
        ]
      },
      {
        nimi: 'Node.js',
        id: 2,
        osat: [
          {
            nimi: 'Routing',
            tehtavia: 3,
            id: 1
          },
          {
            nimi: 'Middlewaret',
            tehtavia: 7,
            id: 2
          }
        ]
      }
    ]

  return (
    <div>
      <Opetusohjelma kurssit={kurssit}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
