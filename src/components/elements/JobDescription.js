/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '60%',
    fontFamily: 'roboto',
    fontSize: '20px',
    borderColor: 'gray',
    borderRadius: '5px',
    margin: '20px auto',
  },
  title: {},
}));

function Job({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.title}>Front End Developer</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Melbourne CBD</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Full Time, Permanent</Paper>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" disableElevation>
            Apply Now
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Netable is seeking a talented Magento and Wordpress Front-end
            developer to join our dynamic team on a full-time basis. You will be
            working closely with the design team to convert designs into
            responsive websites. Skills and experience required: Minimum 3 years
            commercial experience in a similar in both Magento and Wordpress
            front-end development role and with responsive websites. A Master’s
            degree in Information Technology or similar field. Excellent skills
            in coding with HTML, Javascript, jQuery and CSS. Commercial
            experience converting designs to theme in Magento 1 and 2. Working
            knowledge of github or bitbucket repository. Great communication
            skills including with client presentation and project progress
            updates. Ability to train clients in the use and update of the web
            application. Experience creating documentation for client usage of
            how the website works. Ability to think on your feet and solve
            problems in an efficient and effective way. Personal qualities and
            skills: Energetic and driven with a strong, professional work ethic
            and attitude. Diligent and can work autonomously. Someone who can
            hit deadlines and delivers high levels of work. Understands the
            importance as working as part of a team and rolls up their sleeves
            to get the jobs done. The right candidate will work in a warm team
            environment with great personal as well as professional growth
            opportunities. The salary range for this position is $65K to 70K per
            annum plus superannuation. Netable is located in Moorabbin, a city
            fringe location with public transport (bus and train) at our
            doorstep and amazing Cafés, shops, gyms and more. If this sounds
            like your kind of role, we would love to hear from you. Please send
            your resume and a cover letter with a summary of your experience and
            achievements. Application Deadline: 18/11/2020 Job Types: Full-time,
            Permanent Salary: $65,000.00 – $70,000.00 per year Experience:
            frontend development: 3 years (Required) Education: Masters Degree
            (Required) Work Eligibility: Permitted to work temporarily with no
            restriction on hours (Preferred)
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Job.propTypes = {
  className: PropTypes.string,
};

export default Job;
