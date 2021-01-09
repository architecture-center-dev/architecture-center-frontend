import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "none" 
  },
  div: {
    textAlign: "center"
  }
}));

export default function UploadButton({onChange}) {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <label htmlFor="upload-photo">
        <input
          className={classes.button}
          id="upload-photo"
          name="upload-photo"
          type="file"
          accept="image/*"
          onChange={onChange}
        />
        <Button color="primary" variant="contained" component="span">
          Upload big picture
        </Button>{" "}
      </label>
    </div>
  );
}

UploadButton.prototype = {
  onChange: PropTypes.func.isRequired
}