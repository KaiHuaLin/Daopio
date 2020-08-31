import React from 'react';
import { useHistory } from 'react-router-dom'

import {Container} from '@material-ui/core/';

import '../styles/Button.css'

function HomePage(){
let history = useHistory();

    return(
        <Container>
            <div 
                className="klButton"
                onClick={() => { history.push('/create') }}
            >
                Create a new Poll
            </div>
        </Container>
    )
}

export default HomePage;