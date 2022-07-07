const router = require('express').Router();

///api/users//
//get all users//

//get single userby id//

//post new user//

//put to update a user by its id//

//delete to remove user by its id//



router
    .route('/')
    .get(getAllUsers)
    



///api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list
