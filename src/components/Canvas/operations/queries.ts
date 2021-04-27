import { gql } from '@apollo/client';

export const LIST_CANVAS_BY_ID_QUERY = gql`
query canvasById($solution_id: String!){
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
}
`;