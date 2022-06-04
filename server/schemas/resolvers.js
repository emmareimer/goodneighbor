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

    Mutation: { 
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },
      loginUser: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      },
      // updateTask: {

      // },
      // updateUser: {

      // },
      // addTask: {

      // }

    },
  };
  
  module.exports = resolvers;
  