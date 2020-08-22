import React from 'react';

import { Container } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

import CreatePoll from '../components/createPoll';

const useStyles = makeStyles({
    pollForm: {
        textAlign: 'center'
    }
})

function CreatePollPage(){
    const classes = useStyles();

    return(
        <Container>
            <div className={classes.pollForm}>
                <CreatePoll />
            </div>
        </Container>
    )
}

export default CreatePollPage;