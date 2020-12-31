import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Chip, Divider } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  chip: {
    margin: 3
  }
});

export default function Tags({tags}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
            Tags
        </Typography>
        <Divider />
        <br/>
        {tags.map(tag => <Chip className={classes.chip} size="small" label={tag} />)}
      </CardContent>
    </Card>
  );
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired
}