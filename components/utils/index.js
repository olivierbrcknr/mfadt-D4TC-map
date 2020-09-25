// https://stackoverflow.com/questions/14329691/convert-latitude-longitude-point-to-a-pixels-x-y-on-mercator-projection

let latLongToPixelMercartor = () => {



}



let mapValues = (value, a, b, c, d) => {
  value = (value - a) / (b - a);
  return c + value * (d - c);
}


export {latLongToPixelMercartor,mapValues}

