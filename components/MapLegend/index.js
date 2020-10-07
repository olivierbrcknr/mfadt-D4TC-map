import React from 'react'

import './MapLegend.css'

import {legendValues,legendColors} from '../data/legendVars.js'

const MapLegend = (props) => {

  let classes = ['MapLegend'];

  let maxVal = legendValues[legendValues.length-1];

  let gradient = 'linear-gradient( 180deg';

  let displayValues = legendValues.map( (val,i) => {

    let fromTop = (val/maxVal)*100 + '%';
    gradient += ', ' + legendColors[i] + ' ' + fromTop;

    return (
      <div key={'legend-label_'+val} className="MapLegend-Label" style={{top: fromTop}}>
        {(val===maxVal ? '>' : null)}{val}%
      </div>
    )
  });

  gradient += ')';

  return (
    <div className={classes.join(' ')} style={{background: gradient}}>
      {displayValues}
    </div>
  )
}

export default MapLegend
