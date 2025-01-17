import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, Chip, Divider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InputTextTeamContainer from "./InputTextTeamContainer";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  chip: {
    margin: 3
  },
  button: {
    float: "right"
  }
});

export type TeamsProps = {
  members: Array<string>,
  solution_id: string
}

export default function Teams({members, solution_id}: TeamsProps) {
  const classes = useStyles();
  const [addTeamMemberVisible, setAddTeamMemberVisible] = useState(false);
  
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Team
          <Button size="small"
              variant="text"
              color="primary"
              className={classes.button}
              startIcon={<AddIcon />}
              onClick={() => setAddTeamMemberVisible(true)}
            >
              member
            </Button>
        </Typography>
        <Divider />
        {addTeamMemberVisible ? <InputTextTeamContainer setVisible={setAddTeamMemberVisible} solution_id={solution_id} />: null}
        <br/>
        {members.map((member:string) => <Chip key={member} className={classes.chip} color="primary"  label={member} />)}
      </CardContent>
    </Card>
  );
}