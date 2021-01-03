import { gql } from '@apollo/client';

export const LIST_SOLUTION_BY_ID_QUERY = gql`
  query($solution_id: String!) {
    solutionById(solution_id: $solution_id){
      solution_id
      name
      customer
      project
      market
      year_month
      description
      big_picture
      tags
      team_members
      created_at
      updated_at    
    }
  }  
`;