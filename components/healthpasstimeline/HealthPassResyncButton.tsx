import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import colors from '../../assets/styles/colors';
import Resync from '../../assets/icons/Resync';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function HealthPassTimelineResyncButton({
  resync,
  setResync
}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Button
        onClick={() => setResync(true)}
        className={classes.buttonFocus}
      >
                Resync Lab Results
            <Grid item style={{ marginLeft: "15px", marginTop: "8px" }}>
              {resync === true ? <CircularProgress style={{ height:'18px', width: '18px', color: 'white'}}/> : <Resync /> }
            </Grid>
      </Button>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  buttonFocus: {
    paddingLeft: '15px',
    paddingRight: '15px',
    backgroundColor: `${colors.darkBlue}`,
    color: "white",
    "&:hover": {
      backgroundColor: `${colors.darkBlue}`,
      color: "white",
    },
  },
  buttonNotFocused: {},
}));
