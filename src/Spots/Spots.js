import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = '50vw';

const useStyles = makeStyles((theme) => ({
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
    }
}));

export default function Spots(props) {
    const classes = useStyles();
    const { open } = props; 
    return(
        <Drawer variant="permanent" 
                className={clsx(classes.drawer, {[classes.drawerOpen]: open, [classes.drawerClose]: !open})}
                classes={{paper: clsx({[classes.drawerOpen]: open, [classes.drawerClose]: !open})}}
        >        
            <div style={{backgroundColor: 'yellow', width: '100vw', height: '100vh'}}></div>
        </Drawer>
    )
}