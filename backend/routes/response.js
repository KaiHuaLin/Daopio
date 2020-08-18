const router = require('express').Router();
let Response = require('../models/response.model');

// get response by id
router.route('/:id').get((req, res) => {
    Response.find({ pollID: req.params.id}).exec()
        .then(response => res.json(response))
        .catch(err => res.status(400).json("Error: "+ err));
});

// post a new response
router.route('/respond').post((req, res) => {
    const pollID = req.body.pollID
    const choice = req.body.choice
    const username = req.body.username

    const newResponse = new Response({
        pollID,
        choice,
        username
    })

    newResponse.save()
        .then(() => res.json('successfully respond'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router