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
import { gql, useQuery } from '@apollo/client';

const LIST_SOLUTION_BY_ID_QUERY = gql`
  query($solution_id: String!) {
    solutionById(solution_id: $solution_id){
      solution_id
      name
      customer
      project
      market
      year_month
      description
      tags
      created_at
      updated_at    
    }
  }  
`;

export default function Solution() {

  const router = useRouter()
  const { solution_id } = router.query

  const { loading, error, data } = useQuery(LIST_SOLUTION_BY_ID_QUERY, {
    variables: { solution_id },
  });
  
  const solution = data != undefined? data.solutionById : {};

  const tags = solution.tags !== undefined ? solution.tags : [];

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
            <SolutionDetails solution={solution} />
            <br/>
            <Teams />
            <br/>
            <Tags tags={tags} />
          </Grid> 
        </Grid> 
      </Container>
    </>
  );
}