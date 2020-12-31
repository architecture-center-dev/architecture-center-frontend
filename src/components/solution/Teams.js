import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, Chip, Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  chip: {
    margin: 3
  }
});

export default function Teams() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Team
        </Typography>
        <Divider />
        <br/>
        <Chip className={classes.chip} color="primary"  label="Robisson Oliveira" avatar={<Avatar>RC</Avatar>} />
        <Chip className={classes.chip} color="primary"  label="Roberto Picanço" avatar={<Avatar>RP</Avatar>} />
        <Chip className={classes.chip} color="primary"  label="Thiago Ferreira" avatar={<Avatar>RC</Avatar>} />
        <Chip className={classes.chip} color="primary"  label="Gustavo Ott" avatar={<Avatar>GO</Avatar>} />
        <Chip className={classes.chip} color="primary"  label="Leandro Angelim" avatar={<Avatar>LA</Avatar>} />
      </CardContent>
    </Card>
  );
}
