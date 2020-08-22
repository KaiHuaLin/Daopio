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
    const [responseChoice, setResponseChoice] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/poll/'+pollID)
            .then(res => {
                const poll = res.data
                setOptions(poll.options);
            })
    }, [pollID])

    const handleResponseChange = event => {
        setResponseChoice(event.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();

        console.log(responseChoice)

        const response = {
            pollID: pollID,
            choice: responseChoice,
            username: name,
        }

        axios.post('http://localhost:5000/response/respond', response)
            .then(res => {
                console.log(res.data);
                window.location = 'http://localhost:3000/poll/' + pollID;
            })
    };

    return(
        <form onSubmit={onSubmit}>
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
                <RadioGroup 
                    aria-label="option" 
                    name="option"
                    value={responseChoice}
                    onChange={handleResponseChange}
                >
                    {options.map(option => (
                        <FormControlLabel 
                            key={option}
                            value={option} 
                            control={<Radio required/>} 
                            label={option} 
                        />
                    ))}
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
    )
}

export default Response;