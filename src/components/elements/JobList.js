/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, AppBar, Toolbar, colors, Paper } from '@material-ui/core';
import JobCard from './JobCard';
import Typography from '@material-ui/core/Typography';
import PaginationBar from './Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    margin: '0px auto',
    backgroundColor: '#f4f6f8',
  },
  title: {
    fontSize: '15px',
    color: 'gray',
    marginTop: '10px',
    marginBottom: '10px',
    width: '60%',
  },
}));

function JobList({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography className={classes.title}>34 jobs found</Typography>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <PaginationBar />
    </div>
  );
}

JobList.propTypes = {
  className: PropTypes.string,
};

export default JobList;
