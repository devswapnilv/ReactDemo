import React, {PureComponent, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, TextField, FormControlLabel, Checkbox, Button, Link} from "@material-ui/core";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { elementAcceptingRef } from '@mui/utils';
import { RestorePageOutlined } from '@mui/icons-material';

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

const CardView = (props) => {
    const [series, setSeries] = useState(props?.series);
    const classes = useStyles();

    useEffect(()=>{
    },[])
    return (
        <>
        <Grid div xs={12} sm={6} md={6}>
                <Grid container className="SeriesListSection">
                    {
                        series.map(row => (
              
                            <Grid div xs={6} sm={4} md={4} onClick={()=>{props?.updateSelectedSeries(row)}}>
                                <Box className="SeriesListItem">
                                    <Box className="imageContainer">
                                        <img src={row.Poster} />
                                    </Box>
                                    <Box className="ratingDetails">
                                        <div className="name">{row.Title}</div>
                                        <div className="rating">iMDB Id : {row.imdbID}</div>
                                    </Box>
                                </Box>
                            </Grid>
                       ))
                    }
                </Grid>
            </Grid>
      </>
    );
}

export default CardView;