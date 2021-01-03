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
import { useQuery } from '@apollo/client';
import {LIST_SOLUTION_BY_ID_QUERY} from "../../src/components/solution/operations/queries";

export default function Solution() {

  const router = useRouter()
  const { solution_id } = router.query

  const { loading, error, data } = useQuery(LIST_SOLUTION_BY_ID_QUERY, {
    variables: { solution_id },
  });
  
  const solution = data != undefined? data.solutionById : {};
  const tags = solution.tags !== undefined ? solution.tags : [];
  const members = solution.team_members !== undefined ? solution.team_members : [];

  return (
    <>
      <AppBar />
      <Container maxWidth={false}>
        <br/>
        <Breadcrumbs />
        <br/>
        <Grid container spacing={3}>
          <Grid item  lg={9}>
            <MainTabs solution={solution} />
          </Grid> 
          <Grid item lg={3}>
            <SolutionDetails solution={solution} />
            <br/>
            <Teams members={members} solution_id={solution.solution_id} />
            <br/>
            <Tags tags={tags} solution_id={solution.solution_id}/>
          </Grid> 
        </Grid> 
      </Container>
    </>
  );
}