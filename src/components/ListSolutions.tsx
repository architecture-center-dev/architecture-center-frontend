import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Solution from './Solution';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export type Solution = {
  solution_id: string,
  name: string,
  description: string,
  year_month: string,
  big_picture: string
}

export type ListSolutionsProps = {
  solutions: Array<Solution>
}

export default function ListSolutions({ solutions }: ListSolutionsProps) {
  const classes = useStyles();

  return (
    <div className={classes.root} data-testid="list-solutions">
      <Grid container spacing={3} justify="center">
        {
          solutions.map(
            ({ solution_id, name, description, year_month, big_picture }: Solution) =>
              (<Grid key={solution_id} item ><Solution solution_id={solution_id} name={name} description={description} date={year_month} image={big_picture} /></Grid>)
          )
        }
      </Grid>
    </div>
  );
}