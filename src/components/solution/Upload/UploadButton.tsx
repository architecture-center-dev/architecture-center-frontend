import React, { ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  button: {
    display: "none" 
  },
  div: {
    textAlign: "center"
  }
}));

export type UploadButtonProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function UploadButton({onChange}: UploadButtonProps) {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <label htmlFor="upload-photo">
        <input
          data-testid="upload-image"
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