import React from 'react'
import ReactDOM from 'react-dom'
import Kurssi from './components/Kurssi'
import Otsikko from './components/Otsikko'

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

  const rivit = kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi}/>)

  return (
    <div>
      <Otsikko nimi="Opetusohjelma" />
      {rivit}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
