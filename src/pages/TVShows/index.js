import React, {useState, PureComponent} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, TextField, FormControlLabel, Checkbox, Button, Link} from "@material-ui/core";
import MiniDrawer from '../../containers/Sidebar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import style from './style.css';
import DetailedSection from './DetailedSection';

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

const TVShows = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
        <MiniDrawer title="Watch This" />
        <div className="mainContainer">
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="My Series" {...a11yProps(0)} />
            <Tab label="Popular" {...a11yProps(1)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <DetailedSection displayRecords="3" displayFrom="0" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DetailedSection displayRecords="8" displayFrom="3" />
        </TabPanel>
        </Box>
      </div>
      </>
    );
}

export default TVShows;

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
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }