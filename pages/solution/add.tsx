import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../../src/components/AppBar';
import { Button, Card, CardContent, Divider, Grid, TextField, Typography } from '@material-ui/core';
import Breadcrumbs from '../../src/components/Breadcumb';
import { Check } from '@material-ui/icons';

export default function addSolution() {

  return (
    <>
      <AppBar />
      <Container maxWidth={false}>
        <br/>
        <Breadcrumbs />
        <br/>
        <Grid container spacing={3} justify="center">
          <Grid item  lg={4}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Add new solution
                    </Typography>
                    <Divider />
                    <br/>
                    <Grid container spacing={3}>
                        <Grid item xl={6}>
                            <TextField id="outlined-basic" label="Solution name" variant="outlined" fullWidth/>
                        </Grid>
                        <Grid item xl={6}>
                            <TextField id="outlined-basic" label="Customer" variant="outlined" fullWidth/>
                        </Grid>
                        <Grid item xl={6}>
                            <TextField id="outlined-basic" label="Project" variant="outlined" fullWidth/>
                        </Grid>
                        <Grid item xl={6}>
                            <TextField id="outlined-basic" label="Market" variant="outlined" fullWidth/>
                        </Grid>
                        <Grid item xl={6}>
                            <TextField id="outlined-basic" label="Year/month" variant="outlined" fullWidth/>
                        </Grid>
                        <Grid item xl={12}>
                            <TextField id="outlined-basic" label="Description" variant="outlined" fullWidth/>
                            <br/>
                            <br/>
                            <div style={{textAlign:'right'}}>
                            <Button
                                size="large"
                                variant="contained"
                                color="primary"
                                >
                                Save
                                <Check />
                            </Button>
                        </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
          </Grid> 
        </Grid> 
      </Container>
    </>
  );
}