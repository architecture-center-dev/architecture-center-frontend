import { gql } from '@apollo/client';

export const CREATE_ITEM_CANVAS = gql`
mutation createItemCanvas($value: String!, $item: String!, $canvas_id: String!) {
  createItemCanvas(value:$value, item: $item, canvas_id: $canvas_id){
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