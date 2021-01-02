import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import PropTypes from "prop-types";
import { gql, useMutation } from '@apollo/client';

const useStyles = makeStyles((theme) => ({
  button: {
    display: "none" 
  },
  div: {
    textAlign: "center"
  }
}));

const SINGLE_UPLOAD = gql`
  mutation($file: Upload!) {
    singleFileUpload(file: $file)
  }
`;

export default function UploadButton() {
  const classes = useStyles();

  const [mutate, { loading, error }] = useMutation(SINGLE_UPLOAD);
  const onChange = ({
    target: {
      validity,
      files: [file]
    }
  }) => validity.valid && mutate({ variables: { file } });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;


  return (
    <div className={classes.div}>
      <label htmlFor="upload-photo">
        <input
          className={classes.button}
          id="upload-photo"
          name="upload-photo"
          type="file"
          accept="image/*"
          onChange={onChange} //onUpload(target.files[0])
        />
        <Button color="primary" variant="contained" component="span">
          Upload big picture
        </Button>{" "}
      </label>
    </div>
  );
}