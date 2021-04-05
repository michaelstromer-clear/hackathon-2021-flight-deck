import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Fab } from '@material-ui/core';
import HealthPass from '../../assets/icons/HealthPass';

export default function HealthPassBadgeContainer({  }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
        <Grid item>
            <Grid container>
                <Fab style={{backgroundColor:'white'}}>
                    <HealthPass/>
                </Fab>
                <Fab style={{backgroundColor:'white'}}>
                    <HealthPass/>
                </Fab>
                <Fab style={{backgroundColor:'white'}}>
                    <HealthPass/>
                </Fab>
            </Grid>
        </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
    root:{
        width:'100%',
        justifyContent:'center'
    }
}));
