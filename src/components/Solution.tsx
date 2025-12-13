import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
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