import React, {PureComponent, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, TextField, FormControlLabel, Checkbox, Button, Link} from "@material-ui/core";
import DetailedView from '../../containers/DetailedView';
import CardView from '../../containers/CardView';
import RatingView from '../../containers/RatingView';
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

const DetailedSection = (props) => {
    const classes = useStyles();
    const api = new Api();
    const [series, setSeries] = useState([]);
    const [selectedSeries, setSelectedSeries] = useState(   );
    const [seriesDetails, setSeriesDetails] = useState(null);

    const fetchSeries = () => {
        api
          .getSeriesList()
          .then((response) => {
              console.log(response);
              setSeries(response.Search.slice(Number(props.displayFrom), Number(props.displayRecords)))
              
            })
          .catch((err) => console.log(err));
      };

    useEffect(()=>{
        fetchSeries()
    },[]);

    useEffect(()=>{

    },[selectedSeries]);

    useEffect(()=>{
    },[seriesDetails]);

    useEffect(()=>{
        setSelectedSeries(series[0]);
    },[series]);

    const updateSeriesDetails = (s) => {
        setSeriesDetails(s);
    }

    const updateSelectedSeries = (s) => {
        console.log(s);
        setSelectedSeries(s);
    }

    return (
        <>
        {
            series.length > 0 && selectedSeries ?
            <>
                <Grid container>
                    <DetailedView series={selectedSeries} updateSeriesDetails={updateSeriesDetails}  />
                    <CardView series={series} updateSelectedSeries={updateSelectedSeries} />
                </Grid>
                <RatingView series={seriesDetails} />
            </>
            :
            <Grid container>
                No Data Available
            </Grid>
        }
        </>
    );
}

export default DetailedSection;