import React from 'react';

import Poll from '../components/poll';
import Response from '../components/response';
import Result from '../components/result';

import { Grid } from '@material-ui/core/';


function PollPage(props){
    const pollID = props.match.params.pollID;

    return(
        <Grid>
            <Grid item xs={12} justify='space-between'>
                <Grid 
                    container
                    justify='space-around'
                    alignItems="center"
                >
                    <Grid item>
                        <Poll pollID={pollID}/>
                    </Grid>
                    <Grid item>
                        <Response pollID={pollID} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid>
                    <Result pollID={pollID}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PollPage;