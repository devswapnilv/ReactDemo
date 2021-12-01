
import React, {PureComponent, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, TextField, FormControlLabel, Checkbox, Button, Link} from "@material-ui/core";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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

const RatingView = (props) => {
    const classes = useStyles();
    const [series, setSeries] = useState(props?.series);
    const [seasons, setSeasons] = useState(props?.series?.totalSeasons);

    useEffect(()=>{
        setSeries(props?.series);
        setSeasons(props?.series?.totalSeasons);
    },[props.series]);

    useEffect(()=>{
        
    },[seasons]);

    return (
        <>
        <Grid className="ratingListContainer" container>
            {
                props?.series != undefined && seasons ?
                (
                    // <>{
                        <>{[...Array(Number(seasons))].map((e, i) => {
                            return <Grid div xs={6} sm={2} md={2} className="ratingListItem">
                                 <Box className="ratingListItemContainer">
                                     <Box className="seasonTitle">
                                         <div>Season {i+1}</div>
                                         <button>IMDb</button>
                                     </Box>
                                     <Box className="seasionRatin">
                                        <div>Rating:</div>
                                        <div class="ratingProgressBar">
                                            <CircularProgressbar maxValue={10} value={series.imdbRating} text={`${series.imdbRating}`} styles={buildStyles({textSize: '24px',pathColor: `rgba(255, 193, 7, ${6 / 10})`,textColor: '#000',trailColor: '#eaeaea',})}/>
                                         </div>
                                     </Box>
                                 </Box>
                             </Grid>
                          })}</>
                )
                    
                : null
            }
        </Grid>
      </>
    );
}

export default RatingView;