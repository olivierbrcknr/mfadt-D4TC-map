import React from 'react'

import './MapCountry.css';

import {latLongToPixelMercartor,mapValues,colorMixer,numberWithCommas} from '../utils'


const MapCountry = (props) => {

  let classes = ['MapCountry'];

  const countryInfo = props.countryInfo;
  const position = latLongToPixelMercartor( props.latLongVals, countryInfo["Latitude (average)"], countryInfo["Longitude (average)"] )


  let ppp = props.gdp / props.totalPopulation;

  //let size = mapValues( ppp, 0, 1000000, 10, 100,);
  let size = mapValues( props.totalPopulation, 0, 1000000000, 10, 100,);

  if( size > 50 ){
    size = 100;
  }

  let refugeesInCountry = props.refugees

  if( props.isEqualized ){

    // just by population
    // refugeesInCountry = props.EUtotalRefugee * (props.totalPopulation / props.EUtotalPop);

    refugeesInCountry = props.EUtotalRefugee * (props.gdp / props.EUtotalGDP);

  }
  // console.log(refugeesInCountry)


  let percent = refugeesInCountry / (props.totalPopulation/100);

  // let color = colorMixer('#0085FF','#D88A28', (percent/2) );

  // let comparingValue = (refugeesInCountry * ppp);

  let comparingValue = (refugeesInCountry * ppp * 1000) / props.EUtotalGDP;

  if( props.countryInfo && props.countryInfo["Alpha-3 code"] === 'DEU' ){
    console.log(props.countryInfo["Alpha-3 code"],comparingValue)
  }

  let color = colorMixer('#0085FF','#CCCCCC', comparingValue*2 );
  if( comparingValue > 0.5 ){
    color = colorMixer('#FF0000','#0085FF', comparingValue*2-1 );
  }
  // let color = colorMixer('#0085FF','#CCCCCC', comparingValue*4 );
  // if( comparingValue > 0.25 ){
  //   color = colorMixer('#FF0000','#0085FF', comparingValue*4-0.25);
  // }


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

  return (
    <div className={classes.join(' ')} style={styleAdjustments}>

      <div className="MapCountry-CursorMinSelection"></div>

      <div className="MapCountry-HoverInfo">
        <div>{countryInfo.Country} <span>{props.year}</span></div><br/>
        PPP: {displayPPP} US$ <br/>
        Population: {displayPopulation} mio <br/>
        Refugees: {displayRefugess} <br/>
        Percent of Population: {displayPercent}%
      </div>
    </div>
  )
}

export default MapCountry
