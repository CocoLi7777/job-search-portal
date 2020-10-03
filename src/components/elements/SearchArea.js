/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, AppBar, Toolbar, colors, Paper } from '@material-ui/core';
import SearchBar from './SearchBar';
import { findByLabelText } from '@testing-library/react';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#04c49e',
    display: 'flex',
    width: '100%',
    flexDirection: 'center',
    alignItems: 'center',
    alignContent: 'center',
    margin: '0px auto',
  },
  area: {
    margin: '0px auto',
    width: '90%',
  },
  mid: {
    backgroundColor: '#04c49e',
  },
}));

function SearchArea({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid container className={classes.area}>
        <Grid item xs={12}>
          Job Search
        </Grid>
        <Grid item xs={12} className={classes.mid}>
          <SearchBar
            className={classes.search}
            //onSearch={onSearch}
            //searchPlaceholder={searchPlaceholder}
          />
        </Grid>
        <Grid item xs={12}>
          More option
        </Grid>
      </Grid>
    </div>
  );
}

SearchArea.propTypes = {
  className: PropTypes.string,
};

export default SearchArea;