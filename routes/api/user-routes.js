const router = require('express').Router();

const {
    getAllUser,
    getUserId,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

///api/users//
router
    .route('/')
    //get all users//
    .get(getAllUser)
    //get single userby id//
    .get(getUserId)
    //post new user//
    .post(createUser)
    //put to update a user by its id//
    .put(updateUser)
    //delete to remove user by its id//
    .delete(deleteUser);

///api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list
