import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:'100%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  containerSearchBar:{
    marginTop: '20%',
    marginBottom: '50px'
  },
  searchBar:{
    backgroundColor: '#ffffff',
    marginTop: '100px'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignContent={'center'} justify={'center'}>
        <Grid item justify="center"  lg={4} xl={4} md={6} xs={12} >

            <div className={classes.containerSearchBar}>
                <Typography variant={'h3'} align={'center'}>Architecture Center</Typography>
                <TextField id="outlined-basic" label="Search by i.e 'kubernetes'" variant="outlined" fullWidth className={classes.searchBar}/>
            </div>

        </Grid>
      </Grid>
    </div>
  );
}