import React from 'react'

export function LocalAreaDataContainer(props) {
  let caseNumbers = props.data?.latest_7_days
  return (
    <div className='LocalAreaDataContainer'>
      <h3>{ props.data?.msoa11_hclnm ?? "" }</h3>
       <h1>{ caseNumbers === -99 ? "0-2" : caseNumbers }</h1>
     </div>
  )
}

export function SourcesAndLinks(props) {
  return (
    <div className="SourcesAndLinks">
    <p>Source: <a href="https://coronavirus.data.gov.uk/cases">coronavirus.data.gov.uk/cases</a></p>
    <ul>
      <li>NHS COVID-19 App: <a href="https://apps.apple.com/gb/app/nhs-covid-19/id1520427663">iOS</a> <a href="https://play.google.com/store/apps/details?id=uk.nhs.covid19.production">Android</a></li>
      <li><a href="https://testandtrace.warwick.ac.uk/intro/">Warwick Test and Trace</a></li>
      <li>Warwick 24-Hour Helpline: +44 24 7652 3111</li>
      <li><a href="https://www.gov.uk/foreign-travel-advice">Foreign Travel Advice</a></li>
    </ul>
    </div>
  )
}