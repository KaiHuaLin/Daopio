import React, { useEffect, useState } from 'react';

import { 
    FormControl, 
    FormLabel, 
    FormControlLabel, 
    RadioGroup, 
    Radio,
    TextField
} from '@material-ui/core/'

import axios from 'axios'

function Response(props){
    const pollID = props.pollID;
    const [name, setName] = useState('');
    const [options, setOptions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/poll/'+pollID)
            .then(res => {
                const poll = res.data
                setOptions(poll.options);
            })
    }, [pollID])
    return(
        <form>
            <TextField 
                required 
                id='name' 
                label='Enter your name'
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <br />
            <br />
            <FormControl>
                <FormLabel>Choose your option</FormLabel>
                <RadioGroup aria-label="option" name="option">
                {options.map(option => (
                    <FormControlLabel value={option} control={<Radio />} label={option} />
                ))}
                </RadioGroup>
            </FormControl>
        </form>
    )
}

export default Response;