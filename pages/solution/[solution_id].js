import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../../src/components/AppBar';
import { useRouter } from 'next/router'
import { Grid } from '@material-ui/core';
import Breadcrumbs from '../../src/components/Breadcumb';
import SolutionDetails from '../../src/components/solution/SolutionDetails';
import MainTabs from '../../src/components/solution/MainTabs';
import Tags from '../../src/components/solution/Tags';
import Teams from '../../src/components/solution/Teams';
import References from '../../src/components/solution/References';
import Diagrams from '../../src/components/solution/Diagrams';

export default function Solution() {

    const router = useRouter()
    const { solution_id } = router.query

    console.log("solution_id",solution_id);

  return (
    <>
      <AppBar />
      <Container maxWidth={false}>
        <br/>
        <Breadcrumbs />
        <br/>
        <Grid container spacing={3}>
          <Grid item  lg={9}>
            <MainTabs />
          </Grid> 
          <Grid item lg={3}>
            <SolutionDetails />
            <br/>
            <Teams />
            <br/>
            <Diagrams />
            <br/>
            <References />
            <br/>
            <Tags />
          </Grid> 
        </Grid> 
      </Container>
    </>
  );
}