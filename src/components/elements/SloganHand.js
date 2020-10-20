/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Head from './../images/1.jpg';
import Hand from './../images/2.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    height: '500px',
    //border: '1px red solid',
    margin: '10px auto',
  },
  pic: {
    width: '80%',
    maxWidth: '500px',
  },
  title: {
    fontFamily: 'Open Sans',
    color: '#2F2E2E',
    fontSize: '250%',
    textAlign: 'right',
    paddingTop: '30px',
  },
}));

function Slogan({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div {...rest} className={classes.root}>
      <Grid container>
        <Grid item sm={6} xs={6}>
          <Typography variant="h4" gutterBottom className={classes.title}>
            <p>Upload Your Resume. </p>
            <p>Get Job Matches.</p>
          </Typography>
        </Grid>
        <Grid item sm={6} xs={6}>
          <img src={Hand} alt="logo" className={classes.pic} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Slogan;
