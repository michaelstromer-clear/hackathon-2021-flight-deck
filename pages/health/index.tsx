import { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HealthPassTimeline from "../../components/healthpasstimeline/HealthPassTimeline";
import HealthPassTimelineFilters from "../../components/healthpasstimeline/HealthPassTimelineFilters";
import HealthPassBadgeContainer from "../../components/healthpasstimeline/HealthPassBadgeContainer";

const healthPassTimelineObjects = [
  {
    title: "Created a Lab Link",
    description: "Link created with BioReference Laboratories",
    date: "4/1/2021",
    icon: "lablink",
    type: "medical",
  },
  {
    title: "Synced Lab Records",
    description: "Synced from BioReference Laboratories",
    date: "4/1/2021",
    icon: "lablink",
    type: "medical",
  },
  {
    title: "Lab Result Received",
    description: "Negative Covid PCR Exam",
    date: "4/1/2021",
    icon: "labresult",
    type: "medical",
  },
  {
    title: "Gershwin Theatre",
    description: "Checked in at Gershwin Theatre",
    date: "4/2/2021",
    icon: "healthpass",
    type: "event",
  },
  {
    title: "First Covid Vaccine",
    description: "Pfizer CVX 209 Dose #1",
    date: "4/3/2021",
    icon: "vaccine",
    type: "medical",
  },
  {
    title: "Lab Result Received",
    description: "Negative Covid PCR Exam",
    date: "4/3/2021",
    icon: "labresult",
    type: "medical",
  },
  {
    title: "New York Knicks Green Healthpass",
    description: "Checked in at Madison Square Garden with a Green HealthPass",
    date: "4/5/2021",
    icon: "healthpass",
    type: "event",
    isLast: true,
  },
];

export default function Health() {
  const classes = useStyles();
  const [filterState, setFilterState] = useState("none");

  const setPageFilterState = (filter) => {
    setFilterState(filter);
  };

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Grid container className={classes.titleContainer}>
          <Grid item style={{ flex: 1, flexGrow: 1, display: "flex" }}></Grid>
          <Grid
            item
            style={{
              flex: 1,
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4">A Clear Path Back</Typography>
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
            <HealthPassTimelineFilters
              filterState={filterState}
              setFilterState={setFilterState}
            />
          </Grid>
        </Grid>
      </Box>
      <Box my={4}></Box>
      <Box my={4}>
        <HealthPassBadgeContainer />
      </Box>
      <Box my={4}>
        <HealthPassTimeline
          filterState={filterState}
          healthPassTimelineObjects={healthPassTimelineObjects}
        />
      </Box>
    </Container>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  titleContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));
