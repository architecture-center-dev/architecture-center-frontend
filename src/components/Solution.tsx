import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Link from "next/link"

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    minWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export type SolutionProps = {
  solution_id: string,
  name: string,
  description: string,
  date: string,
  image: string
}

export default function Solution({ solution_id, name, description, date, image }: SolutionProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root} data-testid="solution">
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