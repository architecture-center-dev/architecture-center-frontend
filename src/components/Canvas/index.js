import React, { useState } from 'react';
import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import PropTypes from "prop-types"
import CreateItemContainer from "./CreateItemContainer"
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  column: {
    height: 600
  },
  mainAdvantages:{
    height: 150,
  },
  mainDificulties:{
    height: 150,
  },  
  fullRetangle: {
    height: '100%',
  },
  halfRetangle: {
    height: '50%',
  },
  titles:{
    padding: 5
  },
  button: {
    float: "right"
  }
}));

const useStylesPostIt = makeStyles({
  postIr: {
    backgroundColor: purple[100],
    margin: 5,
    padding: 5
  }
});

const PostIt = ({description}) => {
  const classes = useStylesPostIt();

  return (
    <div className={classes.postIr}>
      {description}
    </div>
  );
}
// Dependencies
const Segment = ({name, items, canvas_id, propName}) => {
  const classes = useStyles();
  const [addItemVisible, setAddItemVisible] = useState(false);
  
  return(
    <>
      <Typography className={classes.titles} variant="caption5" component="p">
        {name}
        <Button size="small"
          variant="text"
          color="primary"
          className={classes.button}
          startIcon={<AddIcon />}
          size="small"
          onClick={() => setAddItemVisible(!addItemVisible)}
        ></Button>
      </Typography>
      {addItemVisible ? <CreateItemContainer setVisible={setAddItemVisible} canvas_id={canvas_id} item={propName} />: null}
      {items.map(item => <PostIt key={item} description={item} />)}
    </>
  )
}

const canvas = ({canvas}) => {
  
  const {
    dependencies,
    technology,
    patterns,
    problem, 
    func_requirement, 
    non_func_requirement, 
    context, 
    difficulties, 
    advantages
  } = canvas

  const classes = useStyles();
    
    return (
      <>
        <Grid container spacing={2} justify="center">
          <Grid item lg={2} className={classes.column}>
            <Paper elevation={0} className={classes.fullRetangle}>
              <Segment name="Dependencies" propName="dependencies" items={(dependencies == null ? [] : dependencies)} canvas_id={canvas.canvas_id}/>
            </Paper>
          </Grid>
          <Grid item lg={2} className={classes.column}>
            <Paper elevation={0} className={classes.halfRetangle}>
              <Segment name="Technology" propName="technology" items={technology == null ? [] : technology} canvas_id={canvas.canvas_id}/>
            </Paper>
            <Paper elevation={0} className={classes.halfRetangle}>
              <Segment name="Patterns" propName="patterns" items={patterns == null ? [] : patterns} canvas_id={canvas.canvas_id}/>
            </Paper>
          </Grid>
          <Grid item lg={2} className={classes.column}>
            <Paper elevation={0} className={classes.fullRetangle}>
              <Segment name="What problem does this solution solve?" propName="problem" items={problem == null ? [] : problem} canvas_id={canvas.canvas_id}/>
            </Paper>
          </Grid>
          <Grid item lg={2} className={classes.column}>
            <Paper elevation={0} className={classes.halfRetangle}>
              <Segment name="Functional requirements" propName="func_requirement" items={func_requirement == null ? [] : func_requirement} canvas_id={canvas.canvas_id}/>
            </Paper>
            <Paper elevation={0} className={classes.halfRetangle}>
            <Segment name="Non-functional requirements" propName="non_func_requirement" items={non_func_requirement == null ? [] : non_func_requirement} canvas_id={canvas.canvas_id}/>
            </Paper>
          </Grid>
          <Grid item lg={2} className={classes.column}>
            <Paper elevation={0} className={classes.fullRetangle}>
              <Segment name="Context" propName="context" items={context == null ? [] : context} canvas_id={canvas.canvas_id}/>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="center">
        <Grid item lg={5}>
            <Paper elevation={0} className={classes.mainDificulties}>
              <Segment name="Main dificulties" propName="difficulties" items={difficulties == null ? [] : difficulties} canvas_id={canvas.canvas_id}/>
            </Paper>
          </Grid>
          <Grid item lg={5}>
            <Paper elevation={0} className={classes.mainAdvantages}>
              <Segment name="Main advantages" propName="advantages" items={advantages == null ? [] : advantages} canvas_id={canvas.canvas_id}/>
            </Paper>
          </Grid>
        </Grid>
      </>
    )
}

canvas.propTypes = {
  canvas: PropTypes.object.isRequired
}

export default canvas;