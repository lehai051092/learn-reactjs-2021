import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CodeIcon from '@material-ui/icons/Code';
import {Link, NavLink} from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Register from "../../features/Auth/components/Register";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: '#fff'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <CodeIcon className={classes.menuButton}/>
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} to={"/"}>EZ Shop</Link>
                    </Typography>
                    <NavLink className={classes.link} to={"/todos"}>
                        <Button color="inherit">Todos</Button>
                    </NavLink>
                    <NavLink className={classes.link} to={"/albums"}>
                        <Button color="inherit">Albums</Button>
                    </NavLink>
                    <NavLink className={classes.link} to={"/color-box"}>
                        <Button color="inherit">Color Box</Button>
                    </NavLink>
                    <NavLink className={classes.link} to={"/counter"}>
                        <Button color="inherit">Counter</Button>
                    </NavLink>
                    <Button color="inherit" onClick={handleClickOpen}>Register</Button>
                </Toolbar>
            </AppBar>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogContent>
                    <Register/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
