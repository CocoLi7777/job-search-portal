/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, AppBar, Toolbar, colors, Container } from '@material-ui/core';
import SearchArea from './components/elements/SearchArea';
import JobList from './components/elements/JobList';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

function Home({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div {...rest} className={classes.root}>
      <SearchArea
      //onSearch={onSearch}
      //searchPlaceholder={searchPlaceholder}
      />
      <JobList />
    </div>
  );
}

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
