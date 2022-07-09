const router = require('express').Router();

const {
    getAllThought,
    getThoughtId,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    //     GET to get all thoughts
    .route(getAllThought)
    //     GET to get a single thought by its _id
    .route(getThoughtId)
    //     POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    .route(createThought)
    //       PUT to update a thought by its _id
    .route(updateThought)
    //       DELETE to remove a thought by its _id
    .route(deleteThought)

// /api/thoughts/:thoughtId/reactions
router
    //     POST to create a reaction stored in a single thought's reactions array field
    .route()
    //     DELETE to pull and remove a reaction by the reaction's reactionId value
    .route()



    module.exports = router;