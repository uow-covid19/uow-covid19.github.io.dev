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
    <p>
      Source: <a href="https://coronavirus.data.gov.uk/cases">coronavirus.data.gov.uk/cases</a> – MSOA data <br />
      (Scroll to "Cases by local area in England" - <a href="https://www.arcgis.com/apps/webappviewer/index.html?id=47574f7a6e454dc6a42c5f6912ed7076">direct link</a>)
    </p>
    <ul>
      <li>NHS COVID-19 App: <a href="https://apps.apple.com/gb/app/nhs-covid-19/id1520427663">iOS</a> <a href="https://play.google.com/store/apps/details?id=uk.nhs.covid19.production">Android</a></li>
      <li><a href="https://testandtrace.warwick.ac.uk/intro/">Warwick Test and Trace</a></li>
      <li>Warwick 24-Hour Helpline: +44 24 7652 3111</li>
      <li><a href="https://www.gov.uk/foreign-travel-advice">Foreign Travel Advice</a></li>
      <li><a href="https://github.com/uow-covid19/uow-covid19.github.io.dev">Contribute to this site's development</a></li>
    </ul>
    </div>
  )
}

export function AddToHomeScreenPrompt(props) {
  return (
    <div className="AddToHomeScreenPrompt">
      <h3>Add this website to your phone's home screen for quick access:</h3>
      <p>
        On iOS: Tap the share button at the bottom of the screen<br />
        On Android (Chrome): Tap the three dots in the top right of the screen
      </p>
    </div>
  )
}