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
import HealthPass from '../../assets/icons/HealthPass';
import IdCard from '../../assets/icons/IdCard';

export default function HealthPassTimelineItem({ healthPassTimelineObject }) {
  const classes = useStyles();

  const getItemIcon = (icon) => {
      switch(icon) {
          case 'lablink':
            return <LabLink/>;
          case 'vaccine':
            return <Vaccination/>;
          case 'labresult':
            return <IdCard/>
          case 'healthpass':
            return <HealthPass/>;
          default:
            return <HealthPass/>;
      }
  }

  return (
    <TimelineItem>
        {healthPassTimelineObject.leftSide === true ? (
            <React.Fragment>
                <TimelineSeparator>
                    <TimelineDot>
                        {getItemIcon(healthPassTimelineObject.icon)}
                    </TimelineDot>
                    {healthPassTimelineObject.isLast === false ? <TimelineConnector /> : ''}
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            {healthPassTimelineObject.title}
                        </Typography>
                        <Typography>{healthPassTimelineObject.description}</Typography>
                    </Paper>
                </TimelineContent>
            </React.Fragment>
        ) :
        (
            <React.Fragment>
                <TimelineSeparator>
                    <TimelineDot>
                        {getItemIcon(healthPassTimelineObject.icon)}
                    </TimelineDot>
                    {healthPassTimelineObject.isLast === false ? <TimelineConnector /> : ''}
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            {healthPassTimelineObject.title}
                        </Typography>
                        <Typography>{healthPassTimelineObject.description}</Typography>
                    </Paper>
                </TimelineContent>
            </React.Fragment>
        )}
      </TimelineItem>
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
