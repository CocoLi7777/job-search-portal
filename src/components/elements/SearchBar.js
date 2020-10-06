import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '20',
  },
  search: {
    minHeight: 200,
    margin: '0px auto',
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
  searchInput: {
    flexGrow: 1,
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
  const [level, setLevel] = React.useState('All Levels');

  const handleChange = (event) => {
    setLevel(event.target.value);
  };

  return (
    <Grid container className={classes.search} spacing={3}>
      <Grid item sm={3} xs={12}>
        <Typography variant="h5" className={classes.title}>
          Job
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
          Level
        </Typography>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel></InputLabel>
          <Select
            value={level}
            onChange={handleChange}
            className={classes.select}
          >
            <MenuItem value={'All Levels'}>All Levels</MenuItem>
            <MenuItem value={'Internship'}>Internship</MenuItem>
            <MenuItem value={'Entry level'}>Entry level</MenuItem>
            <MenuItem value={'back end'}>Junior</MenuItem>
            <MenuItem value={'full stack'}>Mid-level</MenuItem>
            <MenuItem value={'java'}>Senior</MenuItem>
            <MenuItem value={'c#'}>Manager</MenuItem>
            <MenuItem value={'javascript'}>Director</MenuItem>
            <MenuItem value={'testing'}>Executive</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item sm={3} xs={12}>
        <Typography variant="h5" className={classes.title}>
          Location
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
