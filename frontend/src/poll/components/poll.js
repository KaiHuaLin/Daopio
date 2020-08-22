import React, { useEffect, useState } from 'react';

import axios from 'axios'

function Poll(props){
    const pollID = props.pollID;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/poll/'+pollID)
            .then(res => {
                const poll = res.data
                setTitle(poll.title);
                setDescription(poll.description);
            })
    }, [pollID])

    return(
        <div>
            <h1>{title}</h1>
            <h3>{description}</h3>
        </div>
    )
}

export default Poll;