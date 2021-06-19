import React from 'react';
import Search from '../src/components/Search';
import ListSolutions from '../src/components/ListSolutions';
import { gql, useLazyQuery } from "@apollo/client";
import Layout from '../src/components/Layout';

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
    <Layout>
      <Search loadingSolutions={getFilteredSolutions} />
      <ListSolutions solutions={solutions} />
    </Layout>
  );
}
