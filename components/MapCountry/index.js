import React from 'react'

import './MapCountry.css';

import {latLongToPixelMercartor,mapValues,colorMixer,numberWithCommas} from '../utils'


const MapCountry = (props) => {

  let classes = ['MapCountry'];

  const countryInfo = props.countryInfo;
  const position = latLongToPixelMercartor( props.latLongVals, countryInfo["Latitude (average)"], countryInfo["Longitude (average)"] )


  let ppp = props.gdp / props.totalPopulation;
  let euPpp = props.EUtotalGDP / props.EUtotalPop;

  //let size = mapValues( ppp, 0, 1000000, 10, 100,);
  let size = mapValues( props.totalPopulation, 0, 100000000, 5, 40,);

  if( size > 50 ){
    size = 100;
  }

  let refugeesInCountry = props.refugees

  if( props.isEqualized ){

    // just by population
    // refugeesInCountry = props.EUtotalRefugee * (props.totalPopulation / props.EUtotalPop);

    refugeesInCountry = props.EUtotalRefugee * (props.gdp / props.EUtotalGDP);

    // Test with ppp
    // refugeesInCountry = props.EUtotalRefugee * (ppp/euPpp);


    //console.log(props.countryInfo["Alpha-3 code"],refugeesInCountryP,refugeesInCountry)
  }
  // console.log(refugeesInCountry)


  let percent = refugeesInCountry / (props.totalPopulation/100);

  // let color = colorMixer('#0085FF','#D88A28', (percent/2) );

  // let comparingValue = (refugeesInCountry * ppp);

  // let comparingValue = (refugeesInCountry * ppp * 1000) / props.EUtotalGDP;

  let comparingValue = percent / 7;

  if( props.countryInfo && props.countryInfo["Alpha-3 code"] === 'DEU' ){
    console.log(props.countryInfo["Alpha-3 code"],comparingValue)
  }

  let color = colorMixer('#0085FF','#CCCCCC', comparingValue*4 );
  if( comparingValue > 0.25 ){

    comparingValue = (comparingValue-0.25) / 0.75;

    color = colorMixer('#FF0000','#0085FF', comparingValue );
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
        <div className="MapCountry-HoverInfo-Name">
          {countryInfo.Country} <span className="MapCountry-HoverInfo-Year">({props.year})</span>
        </div>

        <table className="MapCountry-HoverInfo-Table">
          <tbody>
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
