import React, { useEffect, useState} from 'react'

import './MapTimeSelector.css';

const MapTimeSelector = (props) => {

  let classes = ['MapTimeSelector'];

  let selectionPoint = props.possibleTimes.map( (year, index) =>{

    let yearClasses = ['MapTimeSelector-year'];

    if( year === props.selection ){
      yearClasses.push('--isSelected');
    }

    return(<div
      className={yearClasses.join(' ')}
      key={'year-'+year}
      onClick={ () => props.callback(year) }>
        {year}
    </div>)

  });

  return (
    <div className={classes.join(' ')}>

      {selectionPoint}

    </div>
  )
}

export default MapTimeSelector
