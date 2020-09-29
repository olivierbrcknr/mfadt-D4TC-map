// This function is based on the code from Michel Feldheim
// https://stackoverflow.com/questions/14329691/convert-latitude-longitude-point-to-a-pixels-x-y-on-mercator-projection
let latLongToPixelMercartor = ( latLongVals, lat, lng ) => {

  const europLngMin = latLongVals[0];
  const europLngMax = latLongVals[1];
  const europLatMin = latLongVals[2];
  const europLatMax = latLongVals[3];

  let mapWidth = mapValues( 360, 0, europLngMax-europLngMin, 0, 100 );
  let mapHeight = mapValues( 360, 0, europLatMax-europLatMin, 0, 100 );

  let leftAdjust = ((180 + europLngMin) / 360);
  let topAdjust = (mapHeight/2)-(mapWidth*Math.log(Math.tan((Math.PI/4)+(europLatMax*Math.PI/180/2)))/(2*Math.PI))

  let fromLeft = (lng+180)*(mapWidth/360) - leftAdjust*mapWidth;
  let latRad = lat*Math.PI/180;

  let mercN = Math.log(Math.tan((Math.PI/4)+(latRad/2)));
  let fromTop = (mapHeight/2)-(mapWidth*mercN/(2*Math.PI)) - topAdjust;

  return({
    left: fromLeft,
    top: fromTop
  })

}



let mapValues = (value, a, b, c, d) => {
  value = (value - a) / (b - a);
  return c + value * (d - c);
}


// This function is based on the code from Tim Down
// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
let hexToRgb = (hex) => {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  // return result ? {
  //   r: parseInt(result[1], 16),
  //   g: parseInt(result[2], 16),
  //   b: parseInt(result[3], 16)
  // } : null;

  // turn into array
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
}


// This function is based on the code from Aaron Harris
// https://stackoverflow.com/questions/14819058/mixing-two-colors-naturally-in-javascript
let colorChannelMixer = (colorChannelA, colorChannelB, amountToMix) => {
  var channelA = colorChannelA*amountToMix;
  var channelB = colorChannelB*(1-amountToMix);
  return parseInt(channelA+channelB);
}

let colorMixer = (rgbA, rgbB, amountToMix) => {

  if( typeof rgbA === 'string' ){
    rgbA = hexToRgb(rgbA);
  }
  if( typeof rgbB === 'string' ){
    rgbB = hexToRgb(rgbB);
  }

  var r = colorChannelMixer(rgbA[0],rgbB[0],amountToMix);
  var g = colorChannelMixer(rgbA[1],rgbB[1],amountToMix);
  var b = colorChannelMixer(rgbA[2],rgbB[2],amountToMix);
  return "rgb("+r+","+g+","+b+")";
}



// This function is based on the code from Elias Zamaria
// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
let numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



export {latLongToPixelMercartor,mapValues,colorMixer,numberWithCommas}

