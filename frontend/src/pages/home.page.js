import React from 'react';
import { useHistory } from 'react-router-dom'

import {Container, Button} from '@material-ui/core/';

function HomePage(){
let history = useHistory();

    return(
        <Container>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={() => { history.push('/create') }}
            >
                Create a new Poll
            </Button>
        </Container>
    )
}

export default HomePage;