/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, AppBar, Toolbar, colors, Container } from '@material-ui/core';
import SearchArea from './components/elements/SearchArea';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '80px',

    width: '100%',
  },
}));

function Home({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Grid {...rest} container className={classes.root} xs={12}>
      <Grid item xs={12}>
        <SearchArea
        //onSearch={onSearch}
        //searchPlaceholder={searchPlaceholder}
        />
      </Grid>
    </Grid>
  );
}

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
