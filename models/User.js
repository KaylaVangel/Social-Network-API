const { Schema, model} = require('mongoose'); 
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /.+\@.+\..+/,
        },
        //array of id values referencing thought model (is this correct?)
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        //array of id values referenceing the User model
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ] 
    },
    {
        toJSON: {
            virtuals: true,
           
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length
});



const User = model('User', UserSchema);

module.exports = User; 
