import React from 'react'

import './MapLegend.css';

const MapLegend = (props) => {

  let classes = ['MapLegend'];

  return (
    <div className={classes.join(' ')}>

      <div className="MapLegend-Label" style={{top: 0}}>
        0%
      </div>

      <div className="MapLegend-Label" style={{top: (2/6)*100 + '%'}}>
        2%
      </div>

      <div className="MapLegend-Label" style={{top: 100+'%'}}>
        >6%
      </div>

    </div>
  )
}

export default MapLegend
