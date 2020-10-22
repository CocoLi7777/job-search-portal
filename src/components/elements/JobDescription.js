/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '60%',
    fontFamily: 'roboto',
    fontSize: '20px',
    borderColor: 'gray',
    borderRadius: '5px',
    margin: '120px auto',
  },
  title: {},
}));

function JobDescription({ job, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.title}>{job.jobTitle}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{job.place}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{job.salary}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" disableElevation>
            Apply Now
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{job.description}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

JobDescription.propTypes = {
  className: PropTypes.string,
};

export default JobDescription;
