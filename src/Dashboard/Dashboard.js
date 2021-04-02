import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';

// Icons
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// Styles
import './Dashboard.css';

// Components
import Map from '../Map/Map';
import Spots from '../Spots/Spots';

const drawerWidth = '50vw';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Dashboard() {
    const classes = useStyles();

    const [openSpots, setOpenSpots] = React.useState(false);
    const handleDrawerOpenSpots = () => {
        setOpenSpots(true);
    };
    const handleDrawerCloseSpots = () => {
        setOpenSpots(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <div style={{backgroundColor: '#2a6049', zIndex: '2000'}}>
                <div className={classes.toolbar}>
                    <IconButton onClick={openSpots ? handleDrawerCloseSpots : handleDrawerOpenSpots}>
                        {openSpots ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <List button>
                    <ListItem>
                        <ListItemIcon>
                            <ExploreIcon id="explore-icon" onClick={!openSpots ? handleDrawerOpenSpots : null}/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FavoriteIcon id="favorite-icon" onClick={!openSpots ? handleDrawerOpenSpots : null}/>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </div>
            <Drawer variant="permanent" 
                    className={clsx(classes.drawer, {[classes.drawerOpen]: openSpots, [classes.drawerClose]: !openSpots})}
                    classes={{paper: clsx({[classes.drawerOpen]: openSpots, [classes.drawerClose]: !openSpots})}}
            >
                <Spots/>
            </Drawer>
            <main className={classes.content}>
                    <Map drawerOpened={openSpots.toString()}/>
                </main>
        </div>
    );
}
