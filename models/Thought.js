const { Schema, model, Types } = require('mongoose'); 

const ReactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtTimestamp => new Date(createdAtTimestamp) 
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            unique: true,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtTimestamp => new Date(createdAtTimestamp) //need to figure out date format
        },
        username: {
          type: String,
          required:true
        },
        reactions: [ReactionSchema], //Array of nested documents created with the reactionSchema
        
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
      }
);

ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
});





  


  const Thought = model('Thought', ThoughtSchema);

  module.exports = Thought;