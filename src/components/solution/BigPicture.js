import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import UploadButtonContainer from "./Upload/UploadButtonContainer"

const Image = ({image}) => <img src={image} style={{maxWidth: '100%'}} />

const NoImageComponent = ({solution}) => (
        <>
            <Typography variant="h5" component="h2" align="center">
                This soloution does not have a big picture diagram yet.
            </Typography>
            <UploadButtonContainer solution={solution} />
        </>
    )

const BigPicture = ({solution}) =>    
   (
    <Card variant="outlined">
      <CardContent>
        {solution.big_picture !== null && solution.big_picture != ""
            ? <Image image={solution.big_picture} />
            : <NoImageComponent solution={solution} />}
      </CardContent>
    </Card>
  );


BigPicture.propTypes = {
  solution: PropTypes.object.isRequired
}

export default BigPicture;