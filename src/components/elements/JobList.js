/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import JobCard from './JobCard';
import Typography from '@material-ui/core/Typography';
import PaginationBar from './Pagination';
import { useJobsFetch } from './../hooks/useJobsFetch';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    margin: '0px auto',
    backgroundColor: '#f4f6f8',
    fontFamily: 'Open Sans',
  },
  title: {
    fontSize: '18px',
    color: 'black',

    marginTop: '20px',
    marginBottom: '20px',
    width: '54%',
  },
}));

function JobList({ className, ...rest }) {
  const classes = useStyles();

  const [{ jobs, error }, fetchJobs] = useJobsFetch();
  //console.log(jobs);

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography className={classes.title}>
        {jobs.length} jobs found
      </Typography>
      <div>
        {jobs.map((job) => (
          <JobCard key={job.jobId} clickable job={job} jobId={job.jobId} />
        ))}
      </div>

      <PaginationBar />
    </div>
  );
}

JobList.propTypes = {
  className: PropTypes.string,
};

export default JobList;
