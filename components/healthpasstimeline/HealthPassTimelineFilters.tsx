import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export default function HealthPassTimelineFilters({
  filterState,
  setFilterState,
}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Button
        onClick={() => setFilterState("event")}
        className={
          filterState === "event"
            ? classes.buttonFocus
            : classes.buttonNotFocused
        }
      >
        Events
      </Button>
      <Button
        onClick={() => setFilterState("medical")}
        className={
          filterState === "medical"
            ? classes.buttonFocus
            : classes.buttonNotFocused
        }
      >
        Lab Records
      </Button>
      <Button
        onClick={() => setFilterState("none")}
        className={
          filterState === "none"
            ? classes.buttonFocus
            : classes.buttonNotFocused
        }
      >
        All
      </Button>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  buttonFocus: {
    backgroundColor: "#19338C",
    color: "white",
    "&:hover": {
      backgroundColor: "#19338C",
      color: "white",
    },
  },
  buttonNotFocused: {},
}));
