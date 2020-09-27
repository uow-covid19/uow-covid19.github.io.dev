import React from 'react';
import './App.css';
import { LocalAreaDataContainer, SourcesAndLinks } from './Components.js'
import { makeRequest }  from './networking.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { areas: [] } 
  }

  componentDidMount() {
    makeRequest('GET', 'https://c19downloads.azureedge.net/downloads/msoa_data/MSOAs_latest.json', (err, data) => {
      let json = JSON.parse(data)
      let dataForAreaWithCode = (code) => json.data.find(element => element.msoa11_cd === code) 

      this.setState(state => ({ 
        areas: [
          dataForAreaWithCode('E02001999'), // Campus
          dataForAreaWithCode('E02006523'), // Cubbington, Stoneleigh & Radford Semele
          dataForAreaWithCode('E02001993'), // Canley and Westwood Heath
          dataForAreaWithCode('E02001986'), // Tile Hill
          dataForAreaWithCode('E02006525'), // Leamington Central & North
          dataForAreaWithCode('E02006528'), // Leamington East
          dataForAreaWithCode('E02006531'), // Leamington Brunswick
          dataForAreaWithCode('E02006527'), // Leamington West
          dataForAreaWithCode('E02006521'), // Kenilworth South
          dataForAreaWithCode('E02001991')  // Earlsdon & Canley Gardens
        ].sort((e1, e2) => e1.latest_7_days < e2.latest_7_days)
      }))
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Unofficial Uni of Warwick COVID-19 case tracker</h1>
        <h2>Positive cases in the last 7 days (UK Government figures)</h2>
        {this.state.areas.map(area => (
          <LocalAreaDataContainer data={area} />
        ))}
        <br />
        <SourcesAndLinks />
      </div>
    )
  }
}

export default App;
