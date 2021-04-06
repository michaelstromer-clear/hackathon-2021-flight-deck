import React, { useState, useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Timeline } from "@material-ui/lab";
import HealthPassTimelineItem from "./HealthPassTimelineItem";

export default function HealthPassTimeline({ filterState, healthPassTimelineObjects }) {
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
      } else {
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
    <div className={classes.root}>
      <Timeline align="alternate">{mapHealthPassTimelineItems()}</Timeline>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
