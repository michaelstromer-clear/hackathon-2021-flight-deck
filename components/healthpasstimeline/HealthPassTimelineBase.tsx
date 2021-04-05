import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
} from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@material-ui/lab';
import LabLink from '../../assets/icons/LabLink';
import Vaccination from '../../assets/icons/Vaccination';
import IdCard from '../../assets/icons/IdCard';
import HealthPass from '../../assets/icons/HealthPass';

export default function HealthPassTimeline() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            4/1/2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LabLink />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Link a Lab
            </Typography>
            <Typography>Get your exam results and vaccine records</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            4/3/2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <IdCard />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Negative PCR Exam
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <Vaccination />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              First Covid Vaccine
            </Typography>
            <Typography>Pfizer CVX 209</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <HealthPass />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              New York Knicks Green Healthpass
            </Typography>
            <Typography>Checked in at Madison Square Garden with a Green HealthPass</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
    root:{

    },
    paper: {
        padding: '6px 16px',
      },
      secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
      },
}));
