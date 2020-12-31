import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../src/components/AppBar';
import Search  from '../src/components/Search';
import ListSolutions  from '../src/components/ListSolutions';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  buttonAlign:{
    textAlign: "right"
  }
}));

export default function Index() {

  const classes = useStyles();

  return (
    <Container disableGutters={true} maxWidth={false} style={{backgroundColor:'#f3f3f3'}}>
      <AppBar />
      <div className={classes.buttonAlign}>
        
      </div>
      <Search />
      <ListSolutions />

    </Container>
  );
}
