const { Task, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      task: async (parent, {_id}) => {
        return Task.findOne({_id});
      },
      tasks: async (parent, args = {}) => {
        // const params = open ? { open } : {};
        return Task.find(args);
      },
      user: async (parent, {_id}) => {
          return User.findOne({_id});
      },
    },

    Mutation: { // TODO: Add mutation for loginUser and registerUser using jwt tokens
    //   createMatchup: async (parent, args) => {
    //     const matchup = await Matchup.create(args);
    //     return matchup;
    //   },
    //   createVote: async (parent, { _id, techNum }) => {
    //     const vote = await Matchup.findOneAndUpdate(
    //       { _id },
    //       { $inc: { [`tech${techNum}_votes`]: 1 } },
    //       { new: true }
    //     );
    //     return vote;
    //   },
    },
  };
  
  module.exports = resolvers;
  