const router = require('express').Router();
let Poll = require('../models/poll.model');

// get poll by id
router.route('/:id').get((req, res) => {
    Poll.findById(req.params.id)
        .then(poll => res.json(poll))
        .catch(err => res.status(400).json("Error: "+ err));
});

// create a new poll to database and response with the id 
router.route('/create').post((req, res) => {
    const title = req.body.title
    const description = req.body.description
    const options = req.body.options
    const choices = req.body.choices

    const newPoll = new Poll({
        title,
        description,
        options,
        choices
    })

    newPoll.save()
        .then(() => res.json(newPoll._id))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router