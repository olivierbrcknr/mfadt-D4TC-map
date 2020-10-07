import React from 'react'

import './MapCountry.css';

import {latLongToPixelMercartor,mapValues,colorMixer,numberWithCommas} from '../utils'
import {legendValues,legendColors} from '../data/legendVars.js'


const MapCountry = (props) => {

  let classes = ['MapCountry'];

  const countryInfo = props.countryInfo;
  const position = latLongToPixelMercartor( props.latLongVals, countryInfo["Latitude (average)"], countryInfo["Longitude (average)"] )

  let ppp = props.gdp / props.totalPopulation;
  let euPpp = props.EUtotalGDP / props.EUtotalPop;

  let size = mapValues( props.totalPopulation, 0, 100000000, 5, 40);

  if( size > 50 ){
    size = 100;
  }

  let refugeesInCountry = props.refugees

  if( props.isEqualized ){
    refugeesInCountry = props.EUtotalRefugee * (props.gdp / props.EUtotalGDP);
  }

  let percent = refugeesInCountry / (props.totalPopulation/100);
  let color = null;

  for( let i = 0; i < legendValues.length; i++ ){

    let nextVal = legendValues[i+1];
    let prevVal = legendValues[i-1];

    if( prevVal === undefined ){
      prevVal = 0;
    }
    if( nextVal === undefined ){
      nextVal = 100;
    }

    if( legendValues[i] <= percent && percent < nextVal){
      let comparingValue = mapValues( percent, prevVal, nextVal, 0, 1);
      color = colorMixer(legendColors[i+1],legendColors[i], comparingValue );
    }
  }

  let styleAdjustments = {
    left: position.left + '%',
    top: position.top + '%',
    width: size + 'px',
    height: size + 'px',
    background: color
  };

  if( position.top > 80 ){
    classes.push('--isVeryLow');
  }
  if( position.left > 80 ){
    classes.push('--isFarRight');
  }

  let displayPopulation = Math.round(props.totalPopulation / 10000 ) / 100 ;
  let displayPercent = Math.round(percent * 100) / 100;
  let displayPPP = numberWithCommas(Math.round(ppp));
  let displayRefugess = numberWithCommas(Math.round(refugeesInCountry));

  let displayGDP = numberWithCommas(Math.round(props.gdp / 1000000000));

  return (
    <div className={classes.join(' ')} style={styleAdjustments}>

      <div className="MapCountry-CursorMinSelection"></div>

      <div className="MapCountry-HoverInfo">
        <div className="MapCountry-HoverInfo-Name">
          {countryInfo.Country} <span className="MapCountry-HoverInfo-Year">({props.year})</span> {(props.year===2025 ? (<span className="MapCountry-HoverInfo-Disclaimer">ass</span>) : null)}
        </div>

        <table className="MapCountry-HoverInfo-Table">
          <tbody>
            <tr>
              <td>
                GDP
              </td>
              <td>
                {displayGDP} bil. US$
              </td>
            </tr>
            <tr>
              <td>
                PPP
              </td>
              <td>
                {displayPPP} US$
              </td>
            </tr>
            <tr>
              <td>
                Population
              </td>
              <td>
                {displayPopulation} mio
              </td>
            </tr>
            <tr>
              <td>
                Refugees
              </td>
              <td>
                {displayRefugess} → {displayPercent}%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MapCountry
