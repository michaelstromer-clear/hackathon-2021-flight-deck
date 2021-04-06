import React, {useEffect, useRef} from 'react';
import { Container, Typography, Box, Button } from '@material-ui/core';
import mapboxgl from "mapbox-gl";
import geojson from "../lib/geojson/airports.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWF0aGV3bGVsYW5kIiwiYSI6ImNrMzdudmk2dzAwcmEzaHBuYXB5cW1mcXkifQ.C33jSB1YL4IjehYORyJXUA";


export default function Maps({height, width}) {
    const mapContainer = useRef();

    useEffect(() => {

        const map = new mapboxgl.Map({ 
            container: mapContainer.current, 
            style: "mapbox://styles/mapbox/streets-v10", 
        center: [-74.00, 40.70], 
        zoom: 10});


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
                    "circle-radius": 10
                }
            
            })

            map.on('click', function (e) {
              var features = map.queryRenderedFeatures(e.point, {
              layers: ['airports'] 
              });
               
              if (!features.length) {
              return;
              }
               
              var feature = features[0];
              const html = '<div>Hello</div>'

              console.log('html', html);
               
              var popup = new mapboxgl.Popup({ offset: [0, -15] })
              .setLngLat(feature.geometry.coordinates)
              .setHTML(
              {html}
              )
              .setLngLat(feature.geometry.coordinates)
              .addTo(map);
              });
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

function CustomPop({text}) {
  return (
    <div style={{width: 500, height: 200, background: "red"}}>
      {text}
    </div>
  )
}