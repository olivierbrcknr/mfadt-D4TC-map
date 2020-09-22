import React from 'react'
import Link from 'next/link'

import MapCountry from '../MapCountry'

import './Map.css';

import counties from './latLong.js'


const europLngMin = -12;
const europLngMax = 38;
const europLatMin = 36;
const europLatMax = 65;

const DataVizMap = (props) => {

  let classes = ['DataVizMap'];

  let dataPoints = counties.map( (country,index)=>{

    if( europLatMin < country["Latitude (average)"] && country["Latitude (average)"] < europLatMax ){
      if( europLngMin < country["Longitude (average)"] && country["Longitude (average)"] < europLngMax ){
        console.log( country["Country"] )
        return <MapCountry
          key={country["Alpha-3 code"]}
          countryInfo={country}
          latLongVals={[europLngMin,europLngMax,europLatMin,europLatMax]} />;
      }
    }
  });

  return (
    <div className={classes.join(' ')}>

      <div className="DataVizMap-Map">

        <img className="DataVizMap-BG" src="/mapOfEurope.svg" />

        {dataPoints}

       </div>

    </div>
  )
}

export default DataVizMap
