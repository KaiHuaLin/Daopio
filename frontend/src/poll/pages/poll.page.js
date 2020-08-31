import React from 'react';

import Poll from '../components/poll';
import Response from '../components/response';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core/';


const useStyles = makeStyles({
    content: {
        backgroundColor: "#DEF5CA",
        color: "#4A960B",
        margin: "10px 200px 80px 200px",
        padding: "20px",
        borderRadius: "20px"
    }
})


function PollPage(props){
    const pollID = props.match.params.pollID;

    const classes = useStyles();

    return(
        <Container> 
            <div className={classes.content}>
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