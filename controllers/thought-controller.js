//controller files contain functionality for the routes//
const { Thought, User } = require('../models');

const thoughtController = {
    // GET to get all thoughts
    getAllThought(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    //     GET to get a single thought by its _id
    getThoughtId({ params }, res) {
        Thought.findOne({ _id: params.id })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    //     POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    addThought({ body }, res) {
        Thought.create(body)
            .then(thought => {
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err)
                res.json(err)
            });
    },
    //     "thoughtText": "Here's a cool thought...",
    //     "username": "lernantino",
    //     "userId": "5edff358a0fcb779aa7b118b"
    //   }

    //       PUT to update a thought by its _id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err));
    },

    //       DELETE to remove a thought by its _id
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No Thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err));
    },


    //POST to create a reaction stored in a single thought's reactions array field
    addReaction({ params, body }, res) {
        console.log(params);
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true }
        )
            .then(dbThoughtData => {
                console.log(dbThoughtData);
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
    },

    // DELETE to pull and remove a reaction by the reaction's reactionId value
    removeReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            // { new: true }
        )
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err));
    }
};


module.exports = thoughtController;