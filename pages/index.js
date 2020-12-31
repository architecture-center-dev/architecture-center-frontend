import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../src/components/AppBar';
import Search  from '../src/components/Search';
import ListSolutions  from '../src/components/ListSolutions';
import { makeStyles } from '@material-ui/core';
import { gql, useLazyQuery, useQuery } from "@apollo/client";

const LIST_FILTERED_SOLUTIONS_QUERY = gql`
  query filterSolutions($search: String) {
    solution(search:$search) {
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

  const [ getFilteredSolutions, { data }] = useLazyQuery(LIST_FILTERED_SOLUTIONS_QUERY);
  
  const solutions = data != undefined? data.solution : [];

  return (
    <Container disableGutters={true} maxWidth={false} style={{backgroundColor:'#f3f3f3'}}>
      <AppBar />
      <Search loadingSolutions={getFilteredSolutions} />
      <ListSolutions solutions={solutions} />

    </Container>
  );
}
