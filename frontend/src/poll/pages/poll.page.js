import React from 'react';

import Poll from '../components/poll';
import Response from '../components/response';

import { Container, Grid } from '@material-ui/core/';

import '../../styles/Container.css'


function PollPage(props){
    const pollID = props.match.params.pollID;

    return(
        <Container> 
            <div className="klContainer">
                <Grid>
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <Poll pollID={pollID}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid>
                            <Response pollID={pollID} />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default PollPage;