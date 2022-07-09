const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser, 
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

///api/users//
router
    .route('/')
    //get all users//
    .get(getAllUser)
    //post new user//
    .post(createUser)
   
//api/users/id
router  
    route('/:id')
    //get single userby id and populated thought and friend data//
    .get(getUserById)
     //put to update a user by its id//
     .put(updateUser)
     //delete to remove user by its id//
     .delete(deleteUser);
 
///api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    // POST to add a new friend to a user's friend list
    .post(addFriend)
    // DELETE to remove a friend from a user's friend list
    .delete(removeFriend)


module.exports = router;