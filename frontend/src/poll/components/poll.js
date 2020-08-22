import React, { useEffect, useState } from 'react';

import axios from 'axios'

function Poll(props){
    const pollID = props.pollID;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [choices, setChoices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/poll/'+pollID)
            .then(res => {
                const poll = res.data
                setTitle(poll.title);
                setDescription(poll.description);
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
        <div>
            <h1>{title}</h1>
            <h3>{description}</h3>
            {choices.map(choice => (
                <p>{choice}</p>
            ))}
        </div>
    )
}

export default Poll;