import { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HealthPassTimeline from "../../components/healthpasstimeline/HealthPassTimeline";
import HealthPassTimelineFilters from "../../components/healthpasstimeline/HealthPassTimelineFilters";
import HealthPassBadgeContainer from "../../components/healthpasstimeline/HealthPassBadgeContainer";
import HealthPassResyncButton from "../../components/healthpasstimeline/HealthPassResyncButton";
import healthPassObjects from '../../lib/timelineObjects';

export default function Health() {
  const classes = useStyles();
  const [filterState, setFilterState] = useState("none");
  const [healthPassTimelineObjects, setHealthPassTimelineObjects] = useState(healthPassObjects);
  const [resync, setResync] = useState(false);

  const mockResync = () => {
    setResync(true);
    setTimeout(() => {
      if(!resync) {
      healthPassTimelineObjects.push({
        title: "Second Covid Vaccine",
        description: "Pfizer CVX 209 Dose #2",
        date: "4/6/2021",
        icon: "vaccine",
        type: "medical",
      })
      setFilterState('resync');
      setResync(false);
    }
    }, 3000)
  }

  const setPageFilterState = (filter) => {
    setFilterState(filter);
  };

  return (
    <Container maxWidth="xl">
      <Grid container style={{ height: "94vh", justifyContent:'center' }}>
        <Grid item xs={8}>
          <Box my={4}>
            <Grid container className={classes.titleContainer}>
              <Grid
                item
                style={{ flex: 1, flexGrow: 1, display: "flex" }}
              ></Grid>
              <Grid
                item
                style={{
                  flex: 1,
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h4">A CLEAR Path Back</Typography>
              </Grid>
              <Grid
                item
                style={{
                  flex: 1,
                  display: "flex",
                  marginLeft: "auto",
                  justifyContent: "flex-end",
                }}
              >
                <HealthPassResyncButton resync={resync} setResync={mockResync}/>
              </Grid>
            </Grid>
          </Box>
          <Box my={4}></Box>
          <Box my={4}>
            <HealthPassBadgeContainer resync={healthPassTimelineObjects.length > 7}/>
          </Box>
          <Box my={4}>
            <HealthPassTimeline
              size={'md'}
              filterState={filterState}
              healthPassTimelineObjects={healthPassTimelineObjects}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  titleContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));
