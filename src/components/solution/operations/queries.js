import { gql } from '@apollo/client';

export const LIST_SOLUTION_BY_ID_QUERY = gql`
  query($solution_id: String!) {
    canvasBySolutionId(solution_id: $solution_id){
      canvas_id
      solution_id
      dependencies
      technology
      patterns
      problem
      func_requirement
      non_func_requirement
      context
      difficulties
      advantages
      created_at
      updated_at
    }
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