import React, {useEffect, useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useLocation, Link } from "react-router-dom";
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import TheatersIcon from '@mui/icons-material/Theaters';
import {Grid, Avatar, Button} from "@material-ui/core";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import Moment from 'react-moment';


import style from './style.css';
import Home from '@mui/icons-material/Home';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const MenuItems = [{
        'name': 'Home',
        'icon': <HomeIcon />,
        'link': '/home'
    },
    {
        'name': 'TV Shows',
        'icon': <OndemandVideoIcon />,
        'link': '/tvShows'
    },
    {
        'name': 'Movies',
        'icon': <TheatersIcon />,
        'link': '/movies'
    }];

export default function MiniDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [displayTime, setDisplayTime] = useState(null);
  const openMenu = Boolean(anchorEl);

    let location = useLocation();

    useEffect(() => {
        setPath(location.pathname);
    }, [location,setPath]);

    const activetRoute = route => {
        return route === path;
    }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const tick = () => {
    setDisplayTime(new Date())
  }

  const startTimer = () => {
    clearInterval(this.timer)
    this.timer = setInterval(tick.bind(this), 1000)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
 
          <Grid container justify="space-between">
              <Grid item>
                <Typography variant="h6" noWrap component="div">
                    {props.title}
                </Typography>
              </Grid>
              <Grid item>
                <div className="dateDiv">
                    <WatchLaterOutlinedIcon />
                    <div className="date"><Moment date={new Date()} format="DD:MMM"  />,</div>
                    <div className="time"><Moment date={displayTime} format="HH:mm"  /></div>
                </div>
              </Grid>
              <Grid item>
                <div>
                    <Button
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={openMenu ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Name Lastname
                        <KeyboardArrowDownOutlinedIcon className="arrowIcon" />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
                <IconButton>
                  <PersonOutlineOutlinedIcon />
                </IconButton>
                <IconButton className="searchIcon">
                  <SearchOutlinedIcon />
                </IconButton>
              </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        </DrawerHeader>
        <Divider />
        <List>
          {MenuItems.map((element, index) => (
            <>
                <ListItem className="sidemenuList" button key={element.name} selected={activetRoute(element.link )}  component={Link} to={element.link}>
                <ListItemIcon>
                    {element.icon}
                </ListItemIcon>
                <ListItemText primary={element.name} />
                </ListItem>
                {/* <div>Home</div> */}
            </>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader /> 
      </Box>
    </Box>
  );
}
