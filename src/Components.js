import React from 'react'
import { EXTRA_LINKS } from './settings.js'
import * as DayJS from 'dayjs'
import * as IsoWeek from 'dayjs/plugin/isoWeek'

DayJS.extend(IsoWeek)

const format = (number) => number === -99 ? "0-2" : number

export function LocalAreaDataContainer(props) {
  const caseNumbers = props.data?.latest_7_days
  
  const latestTwoWeeks = props.data?.msoa_data
    .sort((x, y) => (x.week < y.week))
    .slice(0, 2)
    .map(weekObj => {
      const startOfWeek = DayJS().isoWeek(weekObj.week).day(1)
      const endOfWeek = startOfWeek.day(7)
      
      console.log(weekObj)
      
      return {
        range: `${startOfWeek.format('DD')} – ${endOfWeek.format('DD MMM')}`,
        count: weekObj.value
      }
    })
  
  return (
    <div className='LocalAreaDataContainer'>
      <h3>{ props.data?.msoa11_hclnm ?? "" }</h3>
      
      <h1>{ format(caseNumbers) }</h1>
      <PreviousWeeksView previousWeeks={latestTwoWeeks} />
    </div>
  )
}

function PreviousWeeksView(props) {
  return (
    <div className="PreviousWeeks">
      <table>
      { props.previousWeeks.map((week, index) => {
        let previousWeekCount = props.previousWeeks[index+1]?.count
        let weekCount = week.count
        let approximate = false 
        
        if (weekCount === -99) {
          weekCount = 0
          approximate = true
        }
        
        if (previousWeekCount === -99) {
          previousWeekCount = 0
          approximate = true
        }
        
        const change = (previousWeekCount != null) ? weekCount - previousWeekCount : null
        const sign = (change != null) && (change > 0 ? '+' : (change < 0 ? '' : '±'))
        
        return <tr>
          <td>{week.range}:</td> 
          <td><b>{ format(week.count) }</b></td>
          { (change != null) && <td>({sign}{change}{approximate && ' [approx.]'})</td> }
        </tr>
      })}
      </table>
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
      <li><a href="https://www.gov.uk/foreign-travel-advice">Foreign Travel Advice</a></li>
      { EXTRA_LINKS.map(link => link) }
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