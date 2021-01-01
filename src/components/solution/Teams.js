import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, Chip, Divider } from '@material-ui/core';
import PropTypes from "prop-types"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  chip: {
    margin: 3
  }
});

export default function Teams({members}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Team
        </Typography>
        <Divider />
        <br/>
        {members.map(member => <Chip key={member} className={classes.chip} color="primary"  label={member} />)}
      </CardContent>
    </Card>
  );
}

Teams.propTypes = {
  members: PropTypes.array.isRequired
}