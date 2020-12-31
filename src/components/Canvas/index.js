import React from 'react';
import { Chip, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
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

const PostIt = ({children}) => {
  const classes = useStylesPostIt();

  return (
    <div className={classes.postIr}>
      {children}
    </div>
  );
}

const canvas = () => {

  const classes = useStyles();

    return (
      <>
        <Grid container spacing={2} justify="center">
          <Grid item lg={2} className={classes.column}>
            <Paper elevation={0} className={classes.fullRetangle}>
              <Typography className={classes.titles} variant="caption5" component="h4">
                Dependencies
              </Typography>
              <PostIt>
                Solução de vault
              </PostIt>
              <PostIt>
                Gateway de pagamento
              </PostIt>
            </Paper>
          </Grid>
          <Grid item lg={2} className={classes.column}>
            <Paper elevation={0} className={classes.halfRetangle}>
              <Typography className={classes.titles} variant="caption5" component="h4">
                Technology
              </Typography>
            </Paper>
            <Paper elevation={0} className={classes.halfRetangle}>
              <Typography className={classes.titles} variant="caption5" component="h4">
                Patterns
              </Typography>
            </Paper>
          </Grid>
          <Grid item lg={2} className={classes.column}>
            <Paper elevation={0} className={classes.fullRetangle}>
              <Typography className={classes.titles} variant="caption5" component="h4">
                  What problem does this solution solve?
              </Typography>
            </Paper>
          </Grid>
          <Grid item lg={2} className={classes.column}>
            <Paper elevation={0} className={classes.halfRetangle}>
              <Typography className={classes.titles} variant="caption5" component="h4">
                Functional requirements
              </Typography>
            </Paper>
            <Paper elevation={0} className={classes.halfRetangle}>
              <Typography className={classes.titles} variant="caption5" component="h4">
                Non functional requirements
              </Typography>
            </Paper>
          </Grid>
          <Grid item lg={2} className={classes.column}>
            <Paper elevation={0} className={classes.fullRetangle}>
              <Typography className={classes.titles} variant="caption5" component="h4">
                Context
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="center">
        <Grid item lg={5}>
            <Paper elevation={0} className={classes.mainDificulties}>
              <Typography className={classes.titles} variant="caption5" component="h4">
                Main dificulties
              </Typography>
            </Paper>
          </Grid>
          <Grid item lg={5}>
            <Paper elevation={0} className={classes.mainAdvantages}>
              <Typography className={classes.titles} variant="caption5" component="h4">
                Main advantages
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </>
    )
}

export default canvas;