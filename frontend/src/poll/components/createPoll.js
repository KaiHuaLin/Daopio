import React, { useState } from 'react';

import { IconButton, TextField } from '@material-ui/core/';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

import OptionList from './optionList';

import SubmitBar from './submitBar';

function CreatePoll(){
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [options, setOptions] = useState([]);

    function addOption(option) {
        setOptions([...options, option])
    }

    function handleValue(e, id){
        options.forEach(option => {
            if(option.id === id){
                option.value = e.target.value
            }
        })

        setOptions(options)
    }

    function handleDelete(id){
        setOptions(options.filter(option => option.id !== id))
    }

    function onSubmit(e){
        e.preventDefault();

        options.map(option => console.log(option))

        let optionsList = [];

        options.forEach(option => {
            if(option.value !== "")
                optionsList.push(option.value)
        })

        if(optionsList.length > 0){
            // remove duplicate options
            const uniqueSet = new Set(optionsList)
            optionsList = [...uniqueSet]

            const poll = {
                title: title,
                description: description,
                options: optionsList,
            }

            axios.post('http://localhost:5000/poll/create', poll)
                .then(res => {
                    window.location = 'http://localhost:3000/poll/' + res.data
                })

        } else {
            console.log("enter option")
        }
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    return(
        <form onSubmit={onSubmit}>
            <TextField 
                required 
                id='title' 
                label='Title'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <br />
            <br />
            <TextField 
                id='description' 
                label='Description'
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <OptionList 
                options={options}
                handleDelete={handleDelete}
                handleValue={handleValue}
            />
            <br />
            <IconButton
                onClick={() => addOption({
                    id: uuidv4(),
                    value: ""
                })}
            >
                <AddCircleIcon />
            </IconButton>
            <br />
            <SubmitBar 
                name={name}
                handleNameChange={handleNameChange}
                value="Create Poll"
            />
        </form>
    )
}

export default CreatePoll;