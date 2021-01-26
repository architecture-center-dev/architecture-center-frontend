import React from 'react';
import { gql, useMutation } from '@apollo/client';
import UploadButton from "./UploadButton"

const SINGLE_UPLOAD = gql`
  mutation($file: Upload!, $solution_id: String!) {
    singleFileUpload(solution_id: $solution_id, file: $file){
      attachment_id
      url
      filename
      encoding
      mimetype
      created_at
      updated_at
    }
  }
`;

export type Solution = {
  solution_id: string,
  name: string,
  description: string,
  year_month: string,
  big_picture: string
}

export type UploadButtonContainerProps = {
  solution: Solution
}

export default function UploadButtonContainer({ solution }: UploadButtonContainerProps) {
  const [mutate, { loading, error }] = useMutation(SINGLE_UPLOAD);
  const onChange = ({
    target: {
      validity,
      files: [file]
    }
  }: any) => validity.valid
    && mutate({
      variables: { file, solution_id: solution.solution_id },
      update: (cache, { data: { singleFileUpload } }) => {
        cache.modify({
          fields: {
            solutionById: (existingTodos) => ({ ...existingTodos, big_picture: singleFileUpload.url })
          }
        })
      }
    });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;

  return (
    <UploadButton onChange={onChange} />
  );
}