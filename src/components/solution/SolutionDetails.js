import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SolutionDetails() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

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
          E-commerce checkout
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Customer
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Santander Merchan PlatForm Solutions - SMPS
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Project
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          E-commerce - Digital payments
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Market
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Financial
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Year / Month
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          2020/12
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Created by
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Robisson Oliveira
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Description
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Solution used to embeddding via javascript on Ecommerce
        </Typography>
      </CardContent>
    </Card>
  );
}
