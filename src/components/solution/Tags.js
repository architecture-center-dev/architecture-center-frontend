import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, Chip, Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import InputTextTagContainer from './InputTextTagContainer';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  chip: {
    margin: 3
  },
  button: {
    float: "right"
  }
});

export default function Tags({tags, solution_id}) {
  const classes = useStyles();

  const [addTagVisible, setAddTagVisible] = useState(false);

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
            Tags
            <Button size="small"
              variant="text"
              color="primary"
              className={classes.button}
              startIcon={<AddIcon />}
              size="small"
              onClick={() => setAddTagVisible(!addTagVisible)}
            >
              tag
            </Button>
        </Typography>
        <Divider />
        {addTagVisible ? <InputTextTagContainer setVisible={setAddTagVisible} solution_id={solution_id} />: null}
        <br/>
        {tags.map(tag => <Chip key={tag} className={classes.chip} size="small" label={tag} />)}
      </CardContent>
    </Card>
  );
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  solution_id: PropTypes.string.isRequired
}