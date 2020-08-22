import React from 'react';

import Poll from '../components/poll';
import Response from '../components/response';

import { Grid } from '@material-ui/core/';


function PollPage(props){
    const pollID = props.match.params.pollID;

    return(
        <Grid container spacing={10}>
            <Grid item xs={12}>
                <Grid 
                    container
                    justify='center'
                    alignItems="center"
                    spacing={10}
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
                {/* result of response */}
            </Grid>
        </Grid>
    )
}

export default PollPage;