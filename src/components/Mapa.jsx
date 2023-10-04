import React from 'react';
//import bogota from '../assets/bogota.svg';
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl =
"https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"


const Mapa = () => {
  return (
    <div>
  <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
    </div>
  )
}

export default Mapa