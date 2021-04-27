import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InteractiveList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <div className={classes.demo}>
            <List>
              
                <ListItem>
                  <ListItemText
                    primary="Sequence diagram"
                    secondary={'https://architecture-center.s3.amazonaws.com/checkout.jpg'}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Payment states"
                    secondary={'https://architecture-center.s3.amazonaws.com/checkout.jpg'}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Big picture"
                    secondary={'https://architecture-center.s3.amazonaws.com/checkout.jpg'}
                  />
                </ListItem>
              
            </List>
          </div>
        </Grid>
        
      </Grid>
      
    </div>
  );
}
