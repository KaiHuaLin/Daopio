import React, { useEffect, useState } from 'react';

import { Container } from '@material-ui/core/';
import { FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core/'

import axios from 'axios'

function PollPage(props){
    const pollID = props.match.params.pollID;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [options, setOptions] = useState([]);
    const [choices, setChoices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/poll/'+pollID)
            .then(res => {
                const poll = res.data
                setTitle(poll.title);
                setDescription(poll.description);
                setOptions(poll.options);
            })

        axios.get('http://localhost:5000/response/'+pollID)
            .then(res => {
                const responses = res.data

                let choicesList = [];
                responses.forEach(response => {
                    choicesList.push(response.choice);
                })

                setChoices(choicesList);
            })
    }, [pollID])
    return(
        <Container>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <form>
                <FormControl>
                    <FormLabel>Choose your option</FormLabel>
                    <RadioGroup aria-label="option" name="option">
                    {options.map(option => (
                        <FormControlLabel value={option} control={<Radio />} label={option} />
                    ))}
                    </RadioGroup>
                </FormControl>
            </form>
            {choices.map(choice => (
                <p>{choice}</p>
            ))}
        </Container>
    )
}

export default PollPage;