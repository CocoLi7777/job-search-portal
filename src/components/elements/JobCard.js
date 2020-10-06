import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '60%',
    position: 'relative',
  },

  avatar: {
    backgroundColor: red[500],
  },
  logo: {
    position: 'absolute',
    right: 0,
  },
}));

export default function JobCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Melbourne
          </Typography>
          <Typography variant="h5" component="h2">
            Frontend Developer
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Myer
          </Typography>
          <Typography variant="body2" component="p">
            An immediate opportunity for a passionate Graduate / Developer to
            join our talented team.
            <br />
            Agile and fast paced environment
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <div className={classes.logo}>
            <IconButton aria-label="logo">
              <Avatar aria-label="recipe" className={classes.avatar}>
                M
              </Avatar>
            </IconButton>
          </div>
        </CardActions>
      </Card>

      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Melbourne
          </Typography>
          <Typography variant="h5" component="h2">
            Senior Front-end Developer
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Optus
          </Typography>
          <Typography variant="body2" component="p">
            An immediate opportunity for a passionate Graduate / Developer to
            join our talented team.
            <br />
            Agile and fast paced environment
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <div className={classes.logo}>
            <IconButton aria-label="logo">
              <Avatar aria-label="recipe" className={classes.avatar}>
                O
              </Avatar>
            </IconButton>
          </div>
        </CardActions>
      </Card>

      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Melbourne
          </Typography>
          <Typography variant="h5" component="h2">
            Web Developer
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Canvas
          </Typography>
          <Typography variant="body2" component="p">
            An immediate opportunity for a passionate Graduate / Developer to
            join our talented team.
            <br />
            Agile and fast paced environment
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <div className={classes.logo}>
            <IconButton aria-label="logo">
              <Avatar aria-label="recipe" className={classes.avatar}>
                C
              </Avatar>
            </IconButton>
          </div>
        </CardActions>
      </Card>
    </>
  );
}
