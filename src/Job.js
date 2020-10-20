/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import JobDescription from './components/elements/JobDescription';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    fontFamily: 'roboto',
  },
}));

function Job({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div {...rest} className={classes.root}>
      <JobDescription />
    </div>
  );
}

Job.propTypes = {
  className: PropTypes.string,
};

export default Job;
