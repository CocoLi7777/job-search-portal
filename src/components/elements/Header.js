/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    background:
      'linear-gradient(90deg, rgba(168,230,19,1) 0%, rgba(0,255,205,1) 34%, rgba(30,140,94,1) 100%)',
  },
  flexGrow: {
    flexGrow: 1,
  },
}));

function Header({ className, ...rest }) {
  const classes = useStyles();

  return (
    <AppBar {...rest} className={clsx(classes.root, className)} color="primary">
      <Toolbar>
        <img src="/malih.png" alt="logo" style={{ width: '140px' }}></img>
        <div className={classes.flexGrow} />
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
