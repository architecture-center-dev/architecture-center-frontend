import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Chip, Divider, List, ListItem, ListItemText } from '@material-ui/core';

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

export default function Diagrams() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Diagrams
        </Typography>
        <Divider />
        <br/>
        <List dense={true}>
          <ListItem>
            <ListItemText primary="Sequence diagram"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Payments states"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Events diagram"/>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
