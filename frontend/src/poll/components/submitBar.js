import React from 'react';

import {
    TextField,
    Grid
} from '@material-ui/core/'

import '../../styles/Button.css'
import '../../styles/SubmitBar.css'

function SubmitBar(props){
    return(
        <div className="klSubmitBar">
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