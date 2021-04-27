import React, { KeyboardEvent, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: '100%'
  },
  containerSearchBar: {
    marginTop: '20%',
    marginBottom: '50px',
  },
  searchBar: {
    backgroundColor: '#ffffff',
    marginTop: '100px'
  }
}));

const keyUpSearch = (event: KeyboardEvent, loadingSolutions: Function) => {
  if (event.keyCode == 13) {
    loadingSolutions({
      variables: {
        search: (event.target as HTMLInputElement).value
      },
    });
  }
}

export type SearchProps = {
  loadingSolutions: Function
}

export default function Search({ loadingSolutions }: SearchProps) {
  const classes = useStyles();

  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputEl?.current?.querySelector('input')?.focus();
  }, [])

  return (
    <div className={classes.root} data-testid="search">
      <Grid container spacing={3} alignContent={'center'} justify={'center'}>
        <Grid item lg={4} xl={4} md={6} xs={12} >

          <div className={classes.containerSearchBar}>
            <Typography variant={'h3'} align={'center'}>Architecture Center</Typography>
            <TextField
              data-testid="searchTextField"
              ref={inputEl}
              id="outlined-basic"
              label="Search by i.e 'kubernetes'"
              variant="outlined" fullWidth
              className={classes.searchBar}
              onKeyUp={
                (event) => keyUpSearch(event, loadingSolutions)
              } />
          </div>

        </Grid>
      </Grid>
    </div>
  );
}