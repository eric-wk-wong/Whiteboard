import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousels from './moment';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
         <Carousels/>
        </Grid>
        <Grid item xs={6}>
        <Carousels/>
        </Grid>
        <Grid item xs={6}className="layoutbg">
          <Paper className={classes.paper}><Carousels/></Paper>
        </Grid>
        <Grid item xs={6}className="layoutbg">
          <Paper className={classes.paper}><Carousels/></Paper>
        </Grid>

      </Grid>
    </div>
  );
}