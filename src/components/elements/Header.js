/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:
      'linear-gradient(90deg, rgba(168,230,19,1) 0%, rgba(0,255,205,1) 34%, rgba(30,140,94,1) 100%)',
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.root}
      position="static"
      data-test="headerComponent"
    >
      <Toolbar>
        <img
          src="/malih.png"
          alt="logo"
          style={{ width: '140px' }}
          data-test="logoIMG"
        />
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
