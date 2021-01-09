import { gql } from '@apollo/client';

export const ADD_MEMBER_TO_SOLUTION = gql`
    mutation createMember($solution_id: String!, $team_member: String!){
        createTeamMemberSolution(solution_id: $solution_id, team_member: $team_member){
            team_members
            solution_id
        }
    }
`;

export const ADD_TAG_TO_SOLUTION = gql`
    mutation createTag($solution_id: String!, $tag: String!){
        createTagSolution(solution_id: $solution_id, tag: $tag){
        tags
        solution_id
        }
    }
`;