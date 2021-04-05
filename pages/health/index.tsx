import { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HealthPassTimeline from '../../components/healthpasstimeline/HealthPassTimeline';
import { Button } from '@material-ui/core';
import HealthPassBadgeContainer from '../../components/healthpasstimeline/HealthPassBadgeContainer';

export default function Health() {

  const classes = useStyles();
  const [pageState, setPageState] = useState('view');

  const setPageFilterState = (filter) => {
    setPageState(filter);
  }

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4">A Clear Path Back</Typography>
      </Box>
      <Box my={4}>
        <Button onClick={() => setPageFilterState('event')} className={pageState === 'event' ? classes.buttonFocus : classes.buttonNotFocused}>Events</Button>
        <Button onClick={() => setPageFilterState('medical')} className={pageState === 'medical' ? classes.buttonFocus : classes.buttonNotFocused}>Lab Records</Button>
        <Button onClick={() => setPageFilterState('view')} className={pageState === 'view' ? classes.buttonFocus : classes.buttonNotFocused}>All</Button>
      </Box>
      <Box my={4}>
        <HealthPassBadgeContainer/>
      </Box>
      <Box my={4}>
          <HealthPassTimeline pageState={pageState}/>
      </Box>
    </Container>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  buttonFocus:{
    backgroundColor:'#19338C',
    color:'white',
    '&:hover':{
      backgroundColor:'#19338C',
      color:'white',
    }
  },
  buttonNotFocused: {
  }
}));