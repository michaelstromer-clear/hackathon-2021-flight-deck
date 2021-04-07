import React, { useState, useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Timeline } from "@material-ui/lab";
import HealthPassTimelineItem from "./HealthPassTimelineItem";
import { Grid } from '@material-ui/core';


export default function HealthPassTimeline({ filterState, size, healthPassTimelineObjects }) {
  const classes = useStyles();

  const [
    filteredHealthpassTimelineObjects,
    setFilteredHealthPassTimelineObjects,
  ] = useState([]);

  useEffect(() => {
    const filterByCategory = (category) => {
      let filteredResults;
      if (category === "none") {
        filteredResults = healthPassTimelineObjects;
      } else if(category === "resync") {
        filteredResults = healthPassTimelineObjects;
      }else {
        filteredResults = healthPassTimelineObjects.filter(
          (timelineObject) => timelineObject.type === category
        );
      }
      setFilteredHealthPassTimelineObjects(filteredResults);
    };
    filterByCategory(filterState);
  }, [filterState]);

  const mapHealthPassTimelineItems = () => {
    return filteredHealthpassTimelineObjects.map((timelineObject, index) => {
      return (
        <HealthPassTimelineItem
          healthPassTimelineObject={timelineObject}
          isLast={index === filteredHealthpassTimelineObjects.length - 1}
        />
      );
    });
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={size === 'sm' ? 12 : 10}>
        <Timeline align="alternate">{mapHealthPassTimelineItems()}</Timeline>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    justifyContent: 'center'
  },
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
