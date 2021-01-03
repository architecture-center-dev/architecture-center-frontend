import React from 'react';
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import PropTypes from "prop-types"

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
const Segment = ({name, items}) => {
  const classes = useStyles();

  return(
    <>
    <Typography className={classes.titles} variant="caption5" component="h4">
      {name}
    </Typography>
    {items.map(item => <PostIt description={item} />)}
    </>
  )
}

const canvas = ({canvas}) => {

  const classes = useStyles();

    return (
      <>
        <Grid container spacing={2} justify="center">
          <Grid item lg={2} className={classes.column}>
            <Paper elevation={0} className={classes.fullRetangle}>
              <Segment name="Dependencies" items={canvas.dependencies} />
            </Paper>
          </Grid>
          <Grid item lg={2} className={classes.column}>
            <Paper elevation={0} className={classes.halfRetangle}>
              <Segment name="Technology" items={canvas.technology} />
            </Paper>
            <Paper elevation={0} className={classes.halfRetangle}>
              <Segment name="Patterns" items={canvas.patterns} />
            </Paper>
          </Grid>
          <Grid item lg={2} className={classes.column}>
            <Paper elevation={0} className={classes.fullRetangle}>
              <Segment name="What problem does this solution solve?" items={canvas.problem} />
            </Paper>
          </Grid>
          <Grid item lg={2} className={classes.column}>
            <Paper elevation={0} className={classes.halfRetangle}>
              <Segment name="Functional requirements" items={canvas.func_requirement} />
            </Paper>
            <Paper elevation={0} className={classes.halfRetangle}>
            <Segment name="Non-functional requirements" items={canvas.non_func_requirement} />
            </Paper>
          </Grid>
          <Grid item lg={2} className={classes.column}>
            <Paper elevation={0} className={classes.fullRetangle}>
              <Segment name="Context" items={canvas.context} />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="center">
        <Grid item lg={5}>
            <Paper elevation={0} className={classes.mainDificulties}>
              <Segment name="Main dificulties" items={canvas.difficulties} />
            </Paper>
          </Grid>
          <Grid item lg={5}>
            <Paper elevation={0} className={classes.mainAdvantages}>
              <Segment name="Main advantages" items={canvas.advantages} />
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