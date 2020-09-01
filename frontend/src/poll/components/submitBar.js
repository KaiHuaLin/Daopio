import React from 'react';

import {
    TextField,
    Grid
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';

import '../../styles/Button.css'

const useStyles = makeStyles({
    submitBar: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        textAlign: "center",
        padding: "15px",
        position: "fixed",
        width: "100%",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)"
    }
})

function SubmitBar(props){
    const classes = useStyles();
    return(
        <div className={classes.submitBar}>
            <Grid container justify="space-evenly">
                <TextField 
                    required 
                    id='name' 
                    label='Enter your name'
                    value={props.name}
                    onChange={e => props.handleNameChange(e)}
                />
                <input type="submit" value={props.value} className="klButton"/>
            </Grid>
        </div>
    )
}

export default SubmitBar;