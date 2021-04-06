import React, {useEffect, useRef} from 'react';
import ReactDOM from "react-dom";
import { Container } from '@material-ui/core';
import mapboxgl from "mapbox-gl";

import MapPopup from "../components/MapPopup";
import Airportsgeojson from "../lib/geojson/airports.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWF0aGV3bGVsYW5kIiwiYSI6ImNrMzdudmk2dzAwcmEzaHBuYXB5cW1mcXkifQ.C33jSB1YL4IjehYORyJXUA";


Map.defaultProps = {
  center: [-74, 40.70],
  zoom: 10,
  height: 800,
  width: 800,
  geojson: Airportsgeojson
}


export default function Map({height, width, center, zoom, geojson}) {
    const mapContainer = useRef();

    useEffect(() => {

        const map = new mapboxgl.Map({ 
            container: mapContainer.current, 
            style: "mapbox://styles/mapbox/dark-v10", 
        center, 
        zoom
      });


        function populateMap() {
            map.addLayer({
                id: "airports",
                source: {
                    type: "geojson",
                    data: geojson
                },
                type: "circle",
                paint: {
                    "circle-color": "#2D9CDB",
                    "circle-radius": 30,
                    "circle-blur": 0.9
                }
            
            })

            // click markers to open popup
            map.on('click', 'airports', function (e) {
              
              const coordinates = e.features[0].geometry.coordinates.slice();
              const {name, image} = e.features[0].properties;

              const services = JSON.parse(e.features[0].properties.services)

              while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                 
                function addPopup(el, lat, lng) {
                  const placeholder = document.createElement('div');
                  ReactDOM.render(el, placeholder);
              
                  const marker = new mapboxgl.Popup({closeButton: false})
                                      .setDOMContent(placeholder)
                                      .setLngLat({lng: lng, lat: lat})
                                      .addTo(map);
              }

              addPopup(<MapPopup name={name} image={image} services={services} />, coordinates[1], coordinates[0])



              });

              // change cursor on mouse enter and mouse leave
              map.on("mouseenter", "airports", d => {
                  map.getCanvas().style.cursor = "pointer"
              })
              map.on("mouseleave", "airports", d => {
                map.getCanvas().style.cursor = "move"
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

    // return (<div>Mappy</div>)

  return (
        <div ref={mapContainer} style={{height, width}}/>
     );
}



