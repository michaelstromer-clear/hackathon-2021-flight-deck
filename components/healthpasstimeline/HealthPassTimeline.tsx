import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Timeline
} from '@material-ui/lab';
import HealthPassTimelineItem from './HealthPassTimelineItem';
import LabLink from '../../assets/icons/LabLink';

const healthPassTimelineObjects = [
  {
    title : "Link a Lab",
    description: "Get your exam results and vaccine records",
    date: "4/1/2021",
    icon: 'lablink',
    leftSide: false,
    isLast: false
  },
  {
    title : "Negative PCR Exam",
    description: "",
    date: "4/1/2021",
    icon: 'labresult',
    leftSide: true,
    isLast: false
  },
  {
    title : "First Covid Vaccine",
    description: "Pfizer CVX 209 Dose #1",
    date: "4/1/2021",
    icon: 'vaccine',
    leftSide: false,
    isLast: false
  },
  {
    title : "New York Knicks Green Healthpass",
    description: "Checked in at Madison Square Garden with a Green HealthPass",
    date: "4/1/2021",
    icon: 'healthpass',
    leftSide: true,
    isLast: true
  }
]

export default function HealthPassTimeline() {
  const classes = useStyles();

  const mapHealthPassTimelineItems = () => {
    return healthPassTimelineObjects.map((timelineObject) => {
      return <HealthPassTimelineItem healthPassTimelineObject={timelineObject}/>
    })
  }

  return (
    <div className={classes.root}>
      <Timeline align="alternate">
        {mapHealthPassTimelineItems()}
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
