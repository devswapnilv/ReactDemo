import React, {PureComponent, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, TextField, FormControlLabel, Checkbox, Button, Link} from "@material-ui/core";
import MiniDrawer from '../../containers/Sidebar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Api from "../../helper/api";

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

const DetailedView = (props) => {
    const classes = useStyles();
    const api = new Api();
    const [series, setSeries] = useState(props?.series);
    const [selectedSeries, setSelectedSeries] = useState(null);
    
    const fetchSeriesDetails = () => {
      if(props?.series != undefined)
      {
        api
        .getSeriesDetails(props?.series)
        .then((response) => {
            setSelectedSeries(response);
            
          })
        .catch((err) => console.log(err));
      }
    };

  useEffect(()=>{
      fetchSeriesDetails()
  },[props?.series]);

  useEffect(()=>{
    props?.updateSeriesDetails(selectedSeries);
  },[selectedSeries]);

    return (
        <>
        {
          selectedSeries != null ?
              <Box
                component={Grid}
                div
                boxShadow={10}
                xs={12} sm={6} md={6}
                style={{borderRadius:'4px'}}
                >
                <Grid className="detailedview" container>
                    <Grid div xs={12} sm={6} md={6} className="parentDetailsContainer">
                        <Box className="seasonDetails">
                            <Typography className="title" variant="h6" noWrap component="div">
                                {selectedSeries.Title}
                            </Typography>
                            <div>{selectedSeries.totalSeasons} Seasons</div>
                            {/* <div>73 Episodes</div> */}
                        </Box>
                        <Box className="ratingDetails">
                            <div>iMDB Rating : {selectedSeries.imdbRating}/10</div>
                            <div><a href="https://www.omdbapi.com/" target="_blank">Go to iMDB page</a></div>
                        </Box>
                    </Grid>
                    <Grid className="parentImgContainer" div xs={12} sm={6} md={6}>
                        <Box className="imageContainer">
                            <img src={selectedSeries.Poster} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            :
            <Box
            component={Grid}
            div
            boxShadow={10}
            xs={12} sm={6} md={6}
            style={{borderRadius:'4px'}}
            >
              No Series selected
            </Box>
        }
           
      </>
    );
}

export default DetailedView;