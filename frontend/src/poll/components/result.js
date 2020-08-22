import React, { useEffect, useState } from 'react';

import { Grid, Container } from '@material-ui/core/';

import axios from 'axios'

function Result(props){
    const pollID = props.pollID;
    const [options, setOptions] = useState([]);
    const [users, setUsers] = useState([]);
    const [choices, setChoices] = useState([]);

    useEffect(() => {
        //option of the poll
        axios.get('http://localhost:5000/poll/'+pollID)
            .then(res => {
                const poll = res.data
                setOptions(poll.options);
            })

        // choice from the responses
        axios.get('http://localhost:5000/response/'+pollID)
            .then(res => {
                const responses = res.data

                let userList = [];
                responses.forEach(response => {
                    userList.push(response.username);
                })

                setUsers(userList);

                let choicesList = [];
                responses.forEach(response => {
                    choicesList.push(response.choice);
                })

                setChoices(choicesList);
            })
    }, [pollID])

    return(
        <Container>
            <Grid item xs={12}>
                <Grid container justify='space-around'>
                    {options.map(option => (
                        <Grid item>{option}</Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item>
                <Grid container>
                    <Grid item>
                        <br />
                        <br />
                        {users.map(user => (
                            <p>{user}:</p>
                        ))}
                    </Grid>
                    <Grid item>
                        <br />
                        <br />
                        {choices.map(choice => (
                            <p>{choice}</p>
                        ))}
                    </Grid>
                </Grid>
                
            </Grid>
        </Container>
    )
}

export default Result;