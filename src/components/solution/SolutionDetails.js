import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SolutionDetails({solution}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
            Solution details
        </Typography>
        <Divider />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Name
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {solution.name}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Customer
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {solution.customer}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Project
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {solution.project}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Market
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {solution.market}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Year / Month
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {solution.year_month}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Created by
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          --
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Description
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {solution.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

SolutionDetails.propTypes = {
  solution: PropTypes.object.isRequired
}