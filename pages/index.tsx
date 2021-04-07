import React, { useState } from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import styled from 'styled-components';
import Map from '../components/Map';
import Card from '../components/DashCard';
import HealthPassTimeline from '../components/healthpasstimeline/HealthPassTimeline';
import HealthPassBadgeContainer from '../components/healthpasstimeline/HealthPassBadgeContainer';
import healthPassObjects from '../lib/timelineObjects';
import VenueCard from 'components/VenueCard';

const initialMap = {
  width: 500,
  height: 400,
  zoom: 8,
  center: [-74.0, 40.71],
};

export default function Index() {
  const [mapProps, setMapProps] = useState(initialMap);

  function changeMap() {
    setMapProps({
      width: 500,
      height: 400,
      center: [-122.33, 47.53],
      zoom: 9.5,
    });
  }

  const cardProps = {
    image:
      'https://www.travelmag.com/wp-content/uploads/2017/10/22680345663_87edff3bb7_o.jpg',
    name: 'Prepare for your trip to Seattle',
    services: [
      'Your flight departs at 9:45am',
      'Leave house at 8:17am to arrive 35 minutes early',
    ],
    changeMap,
  };

  return (
    <Container>
      <Column>
        <Card {...cardProps} />
        <h1> My CLEAR Journey</h1>
        <Map {...mapProps} />
      </Column>
      <Column>
        <h1> Where We're Going</h1>
        <VenueCard
          name="Sports"
          image="https://images.unsplash.com/photo-1479546085767-8903baea90c6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
          description="Get back to the stadium and cheer on your favorite team!"
        />
        <VenueCard
          name="Travel"
          image="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          description="Go forth and conquer with confidence."
        />
        <VenueCard
          name="Entertainment"
          image="https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw1NTc1MjA2OHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          description="Whether it's a concert, comedy show or theater performance, we've got you covered."
        />
      </Column>
      <Column
        style={{
          overflowY: 'auto',
          justifyContent: 'flex-start',
          paddingTop: '32px',
        }}
      >
        <Typography variant="h4" style={{ marginBottom: '36px' }}>
          A CLEAR Path Back
        </Typography>
        <HealthPassBadgeContainer
          resync={healthPassObjects.length > 7 ? true : false}
        />
        <HealthPassTimeline
          filterState={'none'}
          size={'sm'}
          healthPassTimelineObjects={healthPassObjects}
        />
      </Column>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  border-top: 2px dashed white;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
