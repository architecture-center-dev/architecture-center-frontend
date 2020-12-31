import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Solution from './Solution';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ListSolutions({solutions}) {
  const classes = useStyles();
  console.log(solutions);
  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        {
          solutions.map(
            ({solution_id,name,description,year_month}) => 
            (<Grid key={solution_id} item ><Solution solution_id={solution_id} name={name} description={description} date={year_month} image="/checkout.jpg" /></Grid>)
          )
        }        
      </Grid>
    </div>
  );
}