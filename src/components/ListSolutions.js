import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Solution from './Solution';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ListSolutions() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item >

            <Solution />

        </Grid>
        <Grid item >

            <Solution />

        </Grid>
        <Grid item >

            <Solution />

        </Grid>
        <Grid item >

            <Solution />

        </Grid>
      </Grid>
    </div>
  );
}