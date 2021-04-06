import React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import styled from "styled-components";
import Map from "../components/Map";
import Card from "../components/MapPopup"
import Link from 'next/link';


const myMapProps = {
  width: 500,
  height: 400,
  zoom: 8
}

const cardProps = {
  image: "https://www.travelmag.com/wp-content/uploads/2017/10/22680345663_87edff3bb7_o.jpg",
  name: "Prepare for your trip to Seattle",
  services: ["Your flight departs at 9:45am", "Leave house at 8:17am to arrive 35 minutes early"]
}

export default function Index() {
  return (
      <Container>
        <Column>
          <Card  {...cardProps} />
          <h1> My CLEAR Journey</h1>
          <Map {...myMapProps} />
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
  border: 2px solid red;
`

const Column = styled.div`
display: flex;
flex-direction: column;
  flex: 1;
  border: 5px solid blue;
  align-items: center;
  justify-content: center;
  align-content: center;
  /* text-align: center; */

`