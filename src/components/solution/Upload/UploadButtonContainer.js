import React from 'react';
import PropTypes from "prop-types";
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

const update = (cache, fetchResult) => {
  console.log(cache, fetchResult);
}

export default function UploadButtonContainer({solution}) {
  const [mutate, { loading, error, data }] = useMutation(SINGLE_UPLOAD);
  const onChange = ({
    target: {
      validity,
      files: [file]
    }
  }) => validity.valid && mutate({variables: { file, solution_id: solution.solution_id },update});

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;

  return (
    <UploadButton onChange={onChange}/>
  );
}

UploadButtonContainer.prototype = {
  solution: PropTypes.object.isRequired
}