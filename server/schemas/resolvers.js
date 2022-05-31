const { Task, User } = require('../models');

const resolvers = {
    Query: {
      tasks: async (parent, args = {}) => {
        // const params = open ? { open } : {};
        return Task.find(args);
      },
      user: async (parent, {_id}) => {
          return User.findOne({_id});
      },
      userLogin: async (parent, {username, password}) => {
          // TODO: bcrypt compare plaintext pass to stored pass
        //   return User.findOne({username, password})
      }
    },
    Mutation: { // TODO: Add mutation for userLogin and signup using jwt tokens
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
  