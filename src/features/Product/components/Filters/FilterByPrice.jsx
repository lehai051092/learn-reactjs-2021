import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    },
    range: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),

        '& > span': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        }
    }
}));

FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};

function FilterByPrice({onChange}) {
    const classes = useStyles();
    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }

    const handleSubmit = () => {
        if (onChange) onChange(values);
        setValues({
            salePrice_gte: 0,
            salePrice_lte: 0
        });
    }

    return (
        <Box className={classes.root}>
            <Typography variant={"subtitle2"}>Filter By Price</Typography>
            <Box className={classes.range}>
                <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange}/>
                <span>-</span>
                <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange}/>
            </Box>
            <Button variant={"outlined"} size={"small"} color={"primary"} onClick={handleSubmit}>Submit</Button>
        </Box>
    );
}

export default FilterByPrice;