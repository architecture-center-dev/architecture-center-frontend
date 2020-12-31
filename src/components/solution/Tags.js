import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Chip, Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  chip: {
    margin: 3
  }
});

export default function Tags() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
            Tags
        </Typography>
        <Divider />
        <br/>
        <Chip className={classes.chip} size="small" label="Kubernetes" />
        <Chip className={classes.chip} size="small" label="Azure" />
        <Chip className={classes.chip} size="small" label="Microservices" />
        <Chip className={classes.chip} size="small" label="nodejs" />
        <Chip className={classes.chip} size="small" label="checkout" />
        <Chip className={classes.chip} size="small" label="3ds" />
        <Chip className={classes.chip} size="small" label="rest" />
        <Chip className={classes.chip} size="small" label="api" />
        <Chip className={classes.chip} size="small" label="Event driven architecture" />
      </CardContent>
    </Card>
  );
}
