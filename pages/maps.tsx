import React, {useEffect, useRef} from 'react';
import { Container, Typography, Box, Button } from '@material-ui/core';
import mapboxgl from "mapbox-gl"
import allLocations from "../lib/geojson/venues.json"

import Map from "../components/Map"


const fullMapProps = {
  center: [-99, 38.7],
  zoom: 4,
  height: 800,
  width: 1300,
  geojson: allLocations
}

mapboxgl.accessToken =
  "pk.eyJ1IjoibWF0aGV3bGVsYW5kIiwiYSI6ImNrMzdudmk2dzAwcmEzaHBuYXB5cW1mcXkifQ.C33jSB1YL4IjehYORyJXUA";

export default function Maps() {
    return (
      <Container>
        <Map {...fullMapProps} />
      </Container>
    )
}



