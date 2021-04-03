import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import spotsHeader from '../assets/spots_header.png';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import './Spots.css';

const drawerWidth = '100vw';

const columns = [
    { 
        id: 'name', 
        label: 'Name', 
        minWidth: 100 
    },
    { 
        id: 'country',
        label: 'Country',
        minWidth: 100 
    },
    {
        id: 'lat',
        label: 'Latitude',
        minWidth: 100
    },
    {
        id: 'long',
        label: 'Longitude',
        minWidth: 100
    },
    {
        id: 'month',
        label: 'Month',
        minWidth: 100
    },
    {
        id: 'probability',
        label: 'Probability',
        minWidth: 100
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
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
    }
}));

export default function Spots(props) {
    const classes = useStyles();
    const { open } = props; 
    const [ page, setPage ] = useState(0);
    const [ rowsPerPage, setRowsPerPage ] = useState(10);
    let [ spots, setSpots ] = useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        fetch('https://606640abb8fbbd0017568325.mockapi.io/spot')
            .then(response => response.json())
            .then(data => {
                console.log('DATA', data)
                setSpots(data);
            })
    }, []);

    return (
        <Drawer variant="permanent" 
                        className={clsx(classes.drawer, {[classes.drawerOpen]: open, [classes.drawerClose]: !open})}
                        classes={{paper: clsx({[classes.drawerOpen]: open, [classes.drawerClose]: !open})}}
        >
            <img src={spotsHeader} />
            <div style={{marginLeft: "110px", marginRight: "25px"}}>
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {spots.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                            <TableCell key={column.id} align={column.align}>
                                                {value}
                                            </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={spots.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </Drawer>
    );
}
