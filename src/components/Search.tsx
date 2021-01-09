import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:'100%'
  },
  containerSearchBar:{
    marginTop: '20%',
    marginBottom: '50px',
  },
  searchBar:{
    backgroundColor: '#ffffff',
    marginTop: '100px'
  }
}));

const keyUpSearch = (event, loadingSolutions) => {
  if(event.keyCode == 13){
     loadingSolutions({
      variables: {
        search: event.target.value
      },
    }); 
  }
}

export default function Search({loadingSolutions}) {
  const classes = useStyles();

  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.querySelector('input').focus();
  },[])

  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignContent={'center'} justify={'center'}>
        <Grid item lg={4} xl={4} md={6} xs={12} >

            <div className={classes.containerSearchBar}>
                <Typography variant={'h3'} align={'center'}>Architecture Center</Typography>
                <TextField 
                ref={inputEl}
                id="outlined-basic" 
                label="Search by i.e 'kubernetes'" 
                variant="outlined" fullWidth 
                className={classes.searchBar}
                onKeyUp={
                  (event) => keyUpSearch(event, loadingSolutions)
                }/>
            </div>

        </Grid>
      </Grid>
    </div>
  );
}