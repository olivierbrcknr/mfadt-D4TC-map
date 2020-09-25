import React from 'react'

import './MapCountry.css';

import {latLongToPixelMercartor,mapValues,colorMixer} from '../utils'


const MapCountry = (props) => {

  let classes = ['MapCountry'];

  const countryInfo = props.countryInfo;
  const position = latLongToPixelMercartor( props.latLongVals, countryInfo["Latitude (average)"], countryInfo["Longitude (average)"] )


  let ppp = props.gdp / props.totalPopulation;

  let size = mapValues( ppp, 0, 1000000, 10, 100,);

  if( size > 50 ){
    size = 50;
  }

  let percent = props.refugees / (props.totalPopulation/100);

  let color = colorMixer('#0085FF','#D88A28', percent);

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

  return (
    <div className={classes.join(' ')} style={styleAdjustments}>

      <div className="MapCountry-CursorMinSelection"></div>

      <div className="MapCountry-HoverInfo">
        <div>{countryInfo.Country} <span>{props.year}</span></div><br/>
        GDP: {props.gdp} US$ <br/>
        Population: {props.totalPopulation} <br/>
        Refugees: {props.refugees} <br/>
        Percent of Population: {percent}
      </div>
    </div>
  )
}

export default MapCountry
