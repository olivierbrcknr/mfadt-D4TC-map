import React from 'react'
import Link from 'next/link'

import './MapCountry.css';

const MapCountry = (props) => {

  let classes = ['MapCountry'];

  const europLngMin = props.latLongVals[0];
  const europLngMax = props.latLongVals[1];
  const europLatMin = props.latLongVals[2];
  const europLatMax = props.latLongVals[3];

  const countryInfo = props.countryInfo;

  const fromTop = mapRange( countryInfo["Latitude (average)"], europLatMin, europLatMax, 95, 5 );
  const fromLeft = mapRange( countryInfo["Longitude (average)"], europLngMin, europLngMax, 5, 95 );

  console.log(countryInfo['Country'],fromLeft)

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


function mapRange (value, a, b, c, d) {
  value = (value - a) / (b - a);
  return c + value * (d - c);
}
