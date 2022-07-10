const router = require('express').Router();

const {
    getAllThought,
    getThoughtId,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    //     GET to get all thoughts
    .get(getAllThought)
    //     POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    .post(addThought)
router
    .route('/:id')
    //     GET to get a single thought by its _id
    .get(getThoughtId)
    //       PUT to update a thought by its _id
    .put(updateThought)
    //       DELETE to remove a thought by its _id
    .delete(deleteThought)




// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    //     POST to create a reaction stored in a single thought's reactions array field
    .post(addReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    //     DELETE to pull and remove a reaction by the reaction's reactionId value
    .delete(removeReaction)


module.exports = router;