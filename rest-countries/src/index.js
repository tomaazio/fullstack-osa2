import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import axios from 'axios'
import Country from './components/Country'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      countries: [],
      search: '',
      clickedCountry: ''
    }
  }

  componentDidMount(){
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        this.setState({
          countries: res.data
        })
      }
    )
  }

  handleChange = (event) =>
      this.setState({
        search: event.target.value,
        clickedCountry: ''
      })

  showCountries = () => {
    const countries = this.filterCountries()

    return (
      //tarkista onko hakukenttä tyhjä. Jos on, palauta tyhjä lista.
      this.state.search === '' ?
      ( [] )
      : (
      //Jos hakukenttä ei ole tyhjä ja haun tuloksena on yli kymmenen maata, palauta hakuohje
        countries.length > 10 ?
        (
          <div> too many matches, specify another filter </div>
        ) : (
        //Jos hakukenttä ei ole tyhjä ja haun tuloksena on vain yksi maa, palauta tarkat tiedot
          (countries.length === 1) ?
            countries.map(country => <Country key={country.name} country={country}/>)
           :
            //Muutoin palauta hakua vastaavien maiden nimet
            countries.map(country =>
              <div onClick={() => this.setState({clickedCountry: country.name})}
                    key={country.name}>{country.name}
              </div>
            )
        )
      )
    )
  }

  showClickedCountry = () => {
    const country = this.state.countries.filter(country =>
      country.name === this.state.clickedCountry)
    return(
      this.state.clickedCountry === '' ?
      [] : country.map(country =>
        <Country key={country.name} country={country}/>)
    )
  }

  filterCountries = () =>
    this.state.countries
      .filter(country =>
        country.name.toUpperCase().includes(
          this.state.search.toUpperCase()
        )
      )

  render(){
    return(
      <div>
        <div>
          find countries: <input value={this.state.search} onChange={this.handleChange}/>
        </div>
        <br/>
        <div>
          {this.showCountries()}
          {this.showClickedCountry()}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />,
   document.getElementById('root'))
