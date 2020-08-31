import React, { useEffect, useState } from 'react';

import { 
    FormControl, 
    FormLabel, 
    FormControlLabel, 
    RadioGroup, 
    Radio,
    TextField,
    Grid
} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles';

import '../../styles/Button.css'

import axios from 'axios'

const useStyles = makeStyles({
    options: {
        backgroundColor: "white",
        border: "1px solid white",
        borderRadius: "20px",
        margin: "10px",
        padding: "10px 10px 0px 10px"
    },
    submitBar: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        textAlign: "center",
        padding: "15px",
        position: "fixed",
        width: "100%",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)"
    },
    radioButtom: {
        color: "inherit",
        '&$checked': {
            color: '#CD5515'
        }
    },
    checked: {}
})

function Response(props){    
    const pollID = props.pollID;
    const [name, setName] = useState('');
    const [options, setOptions] = useState([]);
    const [responseChoice, setResponseChoice] = useState('');

    const [initoptionsMap, setInitoptionsMap] = useState(new Map());
    const [optionsMap, setOptionsMap] = useState(new Map());

    const classes = useStyles();

    useEffect(() => {
        axios.get('http://localhost:5000/poll/'+pollID)
            .then(res => {
                const optionsArray = res.data.options
                let map = new Map();
                
                optionsArray.forEach(option => {
                    map.set(option, 0)
                })
                setInitoptionsMap(map)
                setOptions(optionsArray);
            })

        // choice from the responses
        axios.get('http://localhost:5000/response/'+pollID)
            .then(res => {
                const responses = res.data

                let map = initoptionsMap
                responses.forEach(response => {
                    const choice = response.choice
                    if(map.has(choice)){
                        map.set(choice, map.get(choice) + 1)
                    }
                })
                setOptionsMap(map);
            })
    }, [pollID, initoptionsMap])

    const handleResponseChange = event => {
        setResponseChoice(event.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();

        console.log(responseChoice)

        const response = {
            pollID: pollID,
            choice: responseChoice,
            username: name,
        }

        axios.post('http://localhost:5000/response/respond', response)
            .then(res => {
                console.log(res.data);
                window.location = 'http://localhost:3000/poll/' + pollID;
            })
    };

    return(
        <form onSubmit={onSubmit}>
            <br />
            <br />
            <FormControl fullWidth>
                <FormLabel>Choose your option</FormLabel>
                <RadioGroup 
                    aria-label="option" 
                    name="option"
                    value={responseChoice}
                    onChange={handleResponseChange}
                >
                    {options.map(option => (
                        <div className={classes.options} key={option}>
                            <Grid container justify="space-between">
                                <FormControlLabel 
                                    key={option}
                                    value={option} 
                                    control={<Radio required classes={{root: classes.radioButtom, checked: classes.checked}}/>} 
                                    label={option} 
                                />
                                <h3>{optionsMap.get(option)}</h3>
                            </Grid>
                        </div>
                    ))}
                </RadioGroup>
            </FormControl>
            <br />
            <br />
            <div className={classes.submitBar}>
                <Grid container justify="space-evenly">
                    <TextField 
                        required 
                        id='name' 
                        label='Enter your name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input type="submit" value="Submit" className="klButton"/>
                </Grid>
            </div>
        </form>
    )
}

export default Response;