import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../src/components/AppBar';
import Search from '../src/components/Search';
import ListSolutions from '../src/components/ListSolutions';
import { gql, useLazyQuery } from "@apollo/client";

const LIST_FILTERED_SOLUTIONS_QUERY = gql`
  query filterSolutions($search: String) {
    solution(search:$search) {
      solution_id
      name
      year_month
      description
      tags
      big_picture
    }
  }  
`;

export default function Index() {

  const [getFilteredSolutions, { data }] = useLazyQuery(LIST_FILTERED_SOLUTIONS_QUERY);

  const solutions = data != undefined ? data.solution : [];

  return (
    <Container disableGutters={true} maxWidth={false} style={{ backgroundColor: '#f3f3f3' }}>
      <AppBar />
      <Search loadingSolutions={getFilteredSolutions} />
      <ListSolutions solutions={solutions} />

    </Container>
  );
}
