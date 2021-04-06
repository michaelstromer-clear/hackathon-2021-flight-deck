import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Fab, Typography } from "@material-ui/core";
import HealthPass from "../../assets/icons/HealthPass";
import Check from "../../assets/icons/Check";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import colors from "../../assets/styles/colors";

export default function HealthPassBadgeContainer({}) {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root} spacing={6}>
      <Grid item className={classes.badgeContainerItem}>
        <Grid container direction="column" alignItems="center">
          <Fab className={classes.badge}>
            <HealthPass color={`${colors.darkBerry}`}/>
          </Fab>
          <Grid item>
            <Typography variant="h6">Dose #1</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.badgeContainerItem}>
        <Grid container direction="column" alignItems="center">
          <Fab className={classes.badge}>
            <HealthPass color={`${colors.borderGray}`}/>
          </Fab>
          <Typography variant="h6">Dose #2</Typography>
        </Grid>
      </Grid>
      <Grid item className={classes.badgeContainerItem}>
        <Grid container direction="column" alignItems="center">
          <Fab className={classes.badge}>
            <DoneOutlineIcon
              style={{ color: `${colors.borderGray}`, width: "33", height: "33" }}
            />
          </Fab>
          <Grid item>
            <Typography variant="h6">Immunized</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  badge: {
    backgroundColor: "white",
    borderRadius: "15px",
  },
  badgeContainerItem: {
    width: "150px",
  },
}));
