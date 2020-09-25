import React from 'react'
import Link from 'next/link'

import MapCountry from '../MapCountry'

import './Map.css';

import counties from './latLong.js'


const europLngMin = -28;
const europLngMax = 46;
const europLatMin = 30;
const europLatMax = 72.1;

const DataVizMap = (props) => {

  let classes = ['DataVizMap'];

  let dataPoints = counties.map( (country,index)=>{

    if( europLatMin < country["Latitude (average)"] && country["Latitude (average)"] < europLatMax ){
      if( europLngMin < country["Longitude (average)"] && country["Longitude (average)"] < europLngMax ){
        // console.log( country["Country"] )
        return <MapCountry
          key={country["Alpha-3 code"]}
          countryInfo={country}
          latLongVals={[europLngMin,europLngMax,europLatMin,europLatMax]} />;
      }
    }
  });

  let latLines = [];

  for( let i = 0; i < europLatMax - europLatMin; i++ ){
    let percent = i / (europLatMax - europLatMin) * 100 + '%';
    latLines.push( <div className="latLine" style={{top: percent}}>{europLatMin+i}</div> )
  }

  let lngLines = [];

  for( let i = 0; i < europLngMax - europLngMin; i++ ){
    let percent = i / (europLngMax - europLngMin) * 100 + '%';
    latLines.push( <div className="lngLine" style={{left: percent}}>{europLngMin+i}</div> )
  }


  return (
    <div className={classes.join(' ')}>

      <div className="DataVizMap-Map">

        <img className="DataVizMap-BG" src="/mapOfEurope-Mercator.svg" />

        {dataPoints}

       </div>

    </div>
  )
}

export default DataVizMap
