import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Paper, Button, Input, Grid, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '20',
  },
  search: {
    minHeight: 200,
    margin: '0px auto',

    //padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
    width: '80%',
  },
  title: {
    color: 'white',
  },
  inputArea: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: '5px',
    border: '0px',
    color: 'none',
    '& label.Mui-focused': {
      color: 'white',
    },

    '& .MuiInput-underline:after': {
      borderBottomColor: '#83c5be',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#83c5be',
      },
    },
  },
  btn: {
    width: '100%',
    height: '56px',
    fontWeight: 'bold',
    marginTop: '32px',
    backgroundColor: '#c44536',
    fontSize: '20px',
    color: 'white',
    '&:hover': {
      backgroundColor: '#6a040f',
    },
  },
  searchIcon: {
    //marginRight: theme.spacing(2),
    //color: theme.palette.icon,
    color: 'black',
  },
  searchInput: {
    flexGrow: 1,
  },
  searchButton: {
    //backgroundColor: theme.palette.common.white,
    //marginLeft: theme.spacing(2),
    backgroundColor: 'red',
  },
  formControl: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '5px',
    border: '0px',
    color: 'none',
  },
  select: {
    '&:before': {
      borderColor: 'white',
    },
    '&:focused': {
      borderColor: 'white',
    },
  },
}));

function SearchBar({ onSearch, className, searchPlaceholder, ...rest }) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid container className={classes.search} spacing={3}>
      <Grid item sm={3} xs={12}>
        <Typography variant="h5" className={classes.title}>
          What
        </Typography>
        <TextField
          id="outlined-search"
          placeholder="Search field"
          type="search"
          variant="outlined"
          className={classes.inputArea}
        />
      </Grid>
      <Grid item sm={3} xs={12}>
        <Typography variant="h5" className={classes.title}>
          Any Classification
        </Typography>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel></InputLabel>
          <Select
            value={age}
            onChange={handleChange}
            className={classes.select}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'front end'}>Front-end Development</MenuItem>
            <MenuItem value={'back end'}>Front-end Development</MenuItem>
            <MenuItem value={'full stack'}>Full-stack Development</MenuItem>
            <MenuItem value={'java'}>Java Development</MenuItem>
            <MenuItem value={'c#'}>C# Development</MenuItem>
            <MenuItem value={'javascript'}>Javascript Development</MenuItem>
            <MenuItem value={'testing'}>Testing</MenuItem>
            <MenuItem value={'QA'}>QA</MenuItem>
            <MenuItem value={'BA'}>Business Analyst</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item sm={3} xs={12}>
        <Typography variant="h5" className={classes.title}>
          Where
        </Typography>
        <TextField
          id="outlined-search"
          placeholder="Enter suburb,city,or region"
          type="search"
          variant="outlined"
          className={classes.inputArea}
        />
      </Grid>

      <Grid item sm={3} xs={12}>
        <Typography variant="h5" className={classes.title}>
          {' '}
        </Typography>
        <Button
          className={classes.searchButton}
          onClick={onSearch}
          size="large"
          variant="contained"
          className={classes.btn}
        >
          MALIH
        </Button>
      </Grid>
    </Grid>
  );
}

SearchBar.propTypes = {
  className: PropTypes.string,
  onSearch: PropTypes.func,
};

export default SearchBar;
