import React from 'react';
import './App.css';
import { LocalAreaDataContainer, SourcesAndLinks, AddToHomeScreenPrompt } from './Components.js'
import { makeRequest }  from './networking.js'
import { Helmet } from 'react-helmet'
import { SHORT_NAME, LONG_NAME, REGION_CODES, OFFICIAL_TRACKER_URL } from './settings.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { areas: [] } 
  }

  componentDidMount() {
    makeRequest(
      'GET', 
      'https://coronavirus.data.gov.uk/downloads/msoa_data/MSOAs_latest.json', 
      (err, data) => {
        const json = JSON.parse(data)
        const areas = json.data
          .filter(element => REGION_CODES.includes(element.msoa11_cd))
          .sort((e1, e2) => e1.latest_7_days < e2.latest_7_days)

        this.setState(state => ({ areas: areas }))
      }
    )
  }

  render() {
    const trackerLink = OFFICIAL_TRACKER_URL 
    ? <h2><a href={OFFICIAL_TRACKER_URL}>Official {LONG_NAME} Case numbers</a></h2>
    : null

    return (
      <div className="App">
        <Helmet>
          <title>{SHORT_NAME} COVID Tracker</title>
        </Helmet>
        <h1>Unofficial {LONG_NAME} COVID-19 case tracker</h1>
        {trackerLink}
        <AddToHomeScreenPrompt />
        <h2>Positive cases for the last 7 days "where near-complete data is available"<br />
        (UK Government figures)</h2>
        <br />
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
