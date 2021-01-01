import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const Image = ({image}) => <img src={image} style={{maxWidth: '100%'}} />

const NoImageComponent = () => (<Typography variant="h5" component="h2" align="center">
                                    This soloution does not have a big picture diagram yet.
                                </Typography>)

export default function BigPicture({solution}) {
  let componentToRender = null;

  
  return (
    <Card variant="outlined">
      <CardContent>
        {solution.big_picture !== undefined && solution.big_picture !== "" 
            ? <Image image={solution.big_picture} />
            : <NoImageComponent />}
      </CardContent>
    </Card>
  );
}

BigPicture.propTypes = {
  solution: PropTypes.object.isRequired
}