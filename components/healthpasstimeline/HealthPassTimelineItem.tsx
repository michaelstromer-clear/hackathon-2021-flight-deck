import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@material-ui/lab";
import LabLink from "../../assets/icons/LabLink";
import Vaccination from "../../assets/icons/Vaccination";
import HealthPass from "../../assets/icons/HealthPass";
import IdCard from "../../assets/icons/IdCard";
import QRCode from "../../assets/icons/QRCode";
import colors from "../../assets/styles/colors";

export default function HealthPassTimelineItem({
  healthPassTimelineObject,
  isLast,
}) {
  const classes = useStyles();

  const getItemIcon = (icon) => {
    switch (icon) {
      case "lablink":
        return <LabLink />;
      case "vaccine":
        return <Vaccination />;
      case "labresult":
        return <IdCard />;
      case "healthpass":
        return <QRCode />;
      default:
        return <HealthPass color={colors.darkBerry}/>;
    }
  };

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2" color="textSecondary">
          {healthPassTimelineObject.date}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator className={classes.secondaryTail}>
        <TimelineDot
          className={
            healthPassTimelineObject.icon === "healthpass"
              ? classes.greenDot
              : classes.dot
          }
        >
          {getItemIcon(healthPassTimelineObject.icon)}
        </TimelineDot>
        {isLast === true ? "" : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Paper
          elevation={3}
          className={
            healthPassTimelineObject.icon === "healthpass"
              ? classes.greenPaper
              : classes.paper
          }
        >
          <Typography variant="h6" component="h1">
            {healthPassTimelineObject.title}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {healthPassTimelineObject.description}
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  dot: {
    backgroundColor: `${colors.lightBlue}`,
    padding: "12px",
  },
  greenDot: {
    border: `2px solid ${colors.darkTeal}`,
    backgroundColor: `${colors.white}`,
    padding: "12px",
  },
  paper: {
    padding: "6px 16px",
    marginBottom: "15px",
  },
  greenPaper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    color: "#19338C",
  },
}));
