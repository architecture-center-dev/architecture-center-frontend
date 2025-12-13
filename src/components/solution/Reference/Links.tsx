import React from 'react';
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

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
                    primary="Payments Systems Overview"
                    secondary={'https://architecture-center.s3.amazonaws.com'}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Request/reply"
                    secondary={'https://architecture-center.s3.amazonaws.com'}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Microservices in practice"
                    secondary={'https://architecture-center.s3.amazonaws.com'}
                  />
                </ListItem>
              
            </List>
          </div>
        </Grid>
        
      </Grid>
      
    </div>
  );
}
