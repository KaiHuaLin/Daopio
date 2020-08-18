import React from 'react';

import { IconButton, TextField } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';

function Option(props) {
    return(
        <div>
            <br />
            <TextField 
                label="Option"
                onChange={e => props.handleValue(e, props.id)}
            />
            <IconButton
                onClick={() => props.handleDelete(props.id)}
            >
                <DeleteIcon />
            </IconButton>
        </div>
    )
}

export default Option;