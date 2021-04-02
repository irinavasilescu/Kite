import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CssBaseline from '@material-ui/core/CssBaseline';

// Icons
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteIcon from '@material-ui/icons/Favorite';

// Styles
import './Dashboard.css';

// Components
import Map from '../Map/Map';
import Spots from '../Spots/Spots';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Dashboard() {
    const classes = useStyles();

    // Spots
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
            
            {/* NAVIGATION */}
            <div style={{backgroundColor: '#2a6049', zIndex: '2000'}}>
                <List button>
                    <ListItem>
                        <ListItemIcon>
                            <ExploreIcon id="explore-icon" onClick={!openSpots ? handleDrawerOpenSpots : handleDrawerCloseSpots}/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <FavoriteIcon id="favorite-icon" />
                        </ListItemIcon>
                    </ListItem>
                </List>
            </div>

            {/* DRAWER FOR EVERY SECTION */}
            <Spots open={openSpots}/>

            {/* MAP */}
            <main className={classes.content}>
                <Map drawerOpened={openSpots.toString()}/>
            </main>
        </div>
    );
}
