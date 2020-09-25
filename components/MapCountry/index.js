import React from 'react'
import Link from 'next/link'

import './MapCountry.css';

import {latLongToPixelMercartor,mapValues} from '../utils'

const MapCountry = (props) => {

  let classes = ['MapCountry'];

  const europLngMin = props.latLongVals[0];
  const europLngMax = props.latLongVals[1];
  const europLatMin = props.latLongVals[2];
  const europLatMax = props.latLongVals[3];

  const countryInfo = props.countryInfo;


  let latitude    = countryInfo["Latitude (average)"]; // (φ)
  let longitude   = countryInfo["Longitude (average)"];   // (λ)

  let mapWidth = mapValues( 360, 0, europLngMax-europLngMin, 0, 100 );
  let mapHeight = mapValues( 360, 0, europLatMax-europLatMin, 0, 100 );

  console.log(mapHeight,europLatMax-europLatMin)

  let leftAdjust = ((180 + europLngMin) / 360);
  let topAdjust = (mapHeight/2)-(mapWidth*Math.log(Math.tan((Math.PI/4)+(europLatMax*Math.PI/180/2)))/(2*Math.PI))

  let fromLeft = (longitude+180)*(mapWidth/360) - leftAdjust*mapWidth;
  let latRad = latitude*Math.PI/180;

  let mercN = Math.log(Math.tan((Math.PI/4)+(latRad/2)));
  let fromTop = (mapHeight/2)-(mapWidth*mercN/(2*Math.PI)) - topAdjust;

  let styleAdjustments = {
    left: fromLeft + '%',
    top: fromTop + '%'
  };

  return (
    <div className={classes.join(' ')} style={styleAdjustments}>


      <div className="MapCountry-HoverInfo">
        {countryInfo.Country}
      </div>
    </div>
  )
}

export default MapCountry
