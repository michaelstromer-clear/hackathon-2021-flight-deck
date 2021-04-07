import React, {useState} from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import styled from "styled-components";
import Map from "../components/Map";
import Card from "../components/DashCard"
import Link from 'next/link';


const initialMap = {
  width: 500,
  height: 400,
  zoom: 8,
  center: [-74.00, 40.71]
}


export default function Index() {
  
  const [mapProps, setMapProps] = useState(initialMap)
  
  function changeMap() {
    setMapProps({
      width: 500, 
      height: 400, 
      center: [-122.33, 47.53], 
      zoom: 9.5})
    }
    
    const cardProps = {
      image: "https://www.travelmag.com/wp-content/uploads/2017/10/22680345663_87edff3bb7_o.jpg",
      name: "Prepare for your trip to Seattle",
      services: ["Your flight departs at 9:45am", "Leave house at 8:17am to arrive 35 minutes early"],
      changeMap
    }


  return (
      <Container>
        <Column>
          <Card  {...cardProps} />
          <h1> My CLEAR Journey</h1>
          <Map {...mapProps} />
        </Column> 
        <Column>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Link href="/travel">
            <Button variant="contained" color="primary">
              Go to the venues page
            </Button>
          </Link>
        </Column>
        <Column>
           Hey im the healthcare timeline
        </Column>
      </Container>
  );
}


const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  border-top: 2px dashed white;
`

const Column = styled.div`
display: flex;
flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  align-content: center;

`