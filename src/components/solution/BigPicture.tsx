import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import UploadButtonContainer from "./Upload/UploadButtonContainer"

const Image = ({ image }: { image: string }) => <img src={image} style={{ maxWidth: '100%' }} />

const NoImageComponent = ({ solution }: { solution: Solution }) => (
  <>
    <Typography variant="h5" component="h2" align="center">
      This soloution does not have a big picture diagram yet.
            </Typography>
    <UploadButtonContainer solution={solution} />
  </>
)

export type Solution = {
  solution_id: string,
  name: string,
  description: string,
  year_month: string,
  big_picture: string
}

export type BigPictureProps = {
  solution: Solution
}

const BigPicture = ({ solution }: BigPictureProps) =>
(
  <Card variant="outlined">
    <CardContent>
      {solution.big_picture !== null && solution.big_picture != ""
        ? <Image image={solution.big_picture} />
        : <NoImageComponent solution={solution} />}
    </CardContent>
  </Card>
);

export default BigPicture;