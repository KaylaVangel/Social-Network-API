const { Schema, model, Types } = require('mongoose'); //how do you know which to import?//

const UserSchema = new Schema(
    {
        username: {
            type: String,
            //unique
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            //unique
            //match valid email
        },
        thoughts: [ThoughtSchema], //array of id values referencing thought model (is this correct?)
        friends: [UserSchema] //array of id values referenceing the User model
    },
    {
        toJSON: {
          virtuals: true,
        //   getters: true
        },
        // id: false
      }
);

UserSchema.virtual('friendCount').get(function(){
    return this.friends.length
});



// const User = model('User', UserSchema);

// module.exports = User; not sure if we need this or not yet