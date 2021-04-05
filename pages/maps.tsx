import React, {useEffect, useRef} from 'react';
import { Container, Typography, Box, Button } from '@material-ui/core';
import mapboxgl from "mapbox-gl";
import geojson from "../lib/geojson/airports.json";
// import styles from "../lib/maps.module.css"

mapboxgl.accessToken =
  "pk.eyJ1IjoibWF0aGV3bGVsYW5kIiwiYSI6ImNrMzdudmk2dzAwcmEzaHBuYXB5cW1mcXkifQ.C33jSB1YL4IjehYORyJXUA";


export default function Maps({height, width}) {
    const mapContainer = useRef();

    useEffect(() => {
        console.log("🚧", geojson);

        const map = new mapboxgl.Map({ 
            container: mapContainer.current, 
            style: "mapbox://styles/mapbox/streets-v10", 
        center: [-74.00, 40.70], 
        zoom: 11});


        function populateMap() {
            map.addLayer({
                id: "airports",
                source: {
                    type: "geojson",
                    data: geojson
                },
                type: "circle",
                paint: {
                    "circle-color": "#0000ff",
                    "circle-radius": 20
                }
            
            })
        }

        map.on("style.load", () => {
            const waitForStyleToLoad = () => {
              if (map.isStyleLoaded()) {
                populateMap();
              } else {
                setTimeout(waitForStyleToLoad, 10);
              }
            };
            waitForStyleToLoad();
          });


        return () => map.remove();
    }, [])

  return (
      <Container> 
        <div ref={mapContainer} style={{height: 800, width: 800, border: "3px solid red"}}/>
      </Container>
     );
}
