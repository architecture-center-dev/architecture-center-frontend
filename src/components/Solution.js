import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Link from "next/link"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function Solution({solution_id,name,description,date,image}) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <Link href={`/solution/${solution_id}`}>
      <CardHeader
        title={name}
        subheader={date}
      />
      </Link>
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      
      </CardActions>
      
    </Card>
  );
}

Solution.propTypes = {
  solution_id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};