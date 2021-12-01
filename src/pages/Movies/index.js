import React, {PureComponent} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, TextField, FormControlLabel, Checkbox, Button, Link} from "@material-ui/core";
import MiniDrawer from '../../containers/Sidebar';

const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: theme.spacing(12)
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));

const Movies = (props) => {
    const classes = useStyles();
    return (
        <>
        <MiniDrawer title="Movies" />
        <div>Movies</div>
      </>
    );
}

export default Movies;