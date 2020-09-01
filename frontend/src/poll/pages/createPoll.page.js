import React from 'react';

import { Container } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

import CreatePoll from '../components/createPoll';

import '../../styles/Container.css'

const useStyles = makeStyles({
    pollForm: {
        textAlign: 'center'
    }
})

function CreatePollPage(){
    const classes = useStyles();

    return(
        <Container className={classes.pollForm}>
            <div className="klContainer">
                <CreatePoll />
            </div>
        </Container>
    )
}

export default CreatePollPage;