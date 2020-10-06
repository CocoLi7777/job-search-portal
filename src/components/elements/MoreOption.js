import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#2AA68B',
    width: '100%',
  },
  main: {
    flexGrow: 1,
    margin: '0px auto',
    width: '78%',
    paddingBottom: '20px',
  },
  bar: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  second: {
    width: '100%',
  },
  list: {
    display: 'flex',
    width: '100%',
  },
  btn: {
    width: '100%',
    backgroundColor: '#2AA68B',
    height: '60px',
    color: 'white',
    '&:hover': {
      backgroundColor: 'black',
    },
  },
}));

export default function MoreOption() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <AppBar position="static" className={classes.bar}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Work types" {...a11yProps(0)} />

            <Tab label="Salary" {...a11yProps(1)} />

            <Tab label="listed time" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} className={classes.second}>
          <Grid container className={classes.list}>
            <Grid item sm={3} xs={12}>
              <Button variant="contained" className={classes.btn}>
                Full time
              </Button>
            </Grid>
            <Grid item sm={3} xs={12}>
              <Button variant="contained" className={classes.btn}>
                Part time
              </Button>
            </Grid>
            <Grid item sm={3} xs={12}>
              <Button variant="contained" className={classes.btn}>
                Contract/Temp
              </Button>
            </Grid>
            <Grid item sm={3} xs={12}>
              <Button variant="contained" className={classes.btn}>
                Casual/Vacation
              </Button>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Grid container className={classes.list}>
            <Grid item sm={1} xs={12}>
              <Button variant="contained" className={classes.btn}>
                $0
              </Button>
            </Grid>
            <Grid item sm={1} xs={12}>
              <Button variant="contained" className={classes.btn}>
                30k
              </Button>
            </Grid>
            <Grid item sm={1} xs={12}>
              <Button variant="contained" className={classes.btn}>
                40k
              </Button>
            </Grid>
            <Grid item sm={1} xs={12}>
              <Button variant="contained" className={classes.btn}>
                50k
              </Button>
            </Grid>
            <Grid item sm={1} xs={12}>
              <Button variant="contained" className={classes.btn}>
                60k
              </Button>
            </Grid>
            <Grid item sm={1} xs={12}>
              <Button variant="contained" className={classes.btn}>
                70k
              </Button>
            </Grid>
            <Grid item sm={1} xs={12}>
              <Button variant="contained" className={classes.btn}>
                80k
              </Button>
            </Grid>
            <Grid item sm={1} xs={12}>
              <Button variant="contained" className={classes.btn}>
                90k
              </Button>
            </Grid>
            <Grid item sm={1} xs={12}>
              <Button variant="contained" className={classes.btn}>
                100k
              </Button>
            </Grid>
            <Grid item sm={1} xs={12}>
              <Button variant="contained" className={classes.btn}>
                120k
              </Button>
            </Grid>
            <Grid item sm={1} xs={12}>
              <Button variant="contained" className={classes.btn}>
                150k
              </Button>
            </Grid>
            <Grid item sm={1} xs={12}>
              <Button variant="contained" className={classes.btn}>
                200k
              </Button>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container className={classes.list}>
            <Grid item sm={2} xs={12}>
              <Button variant="contained" className={classes.btn}>
                All time
              </Button>
            </Grid>
            <Grid item sm={2} xs={12}>
              <Button variant="contained" className={classes.btn}>
                Today
              </Button>
            </Grid>
            <Grid item sm={2} xs={12}>
              <Button variant="contained" className={classes.btn}>
                Last 3 days
              </Button>
            </Grid>
            <Grid item sm={2} xs={12}>
              <Button variant="contained" className={classes.btn}>
                Last 7 days
              </Button>
            </Grid>
            <Grid item sm={2} xs={12}>
              <Button variant="contained" className={classes.btn}>
                Last 14 days
              </Button>
            </Grid>
            <Grid item sm={2} xs={12}>
              <Button variant="contained" className={classes.btn}>
                Last 30 days
              </Button>
            </Grid>
          </Grid>
        </TabPanel>
      </div>
      <div></div>
    </div>
  );
}
