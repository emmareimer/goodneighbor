const { Task, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      task: async (parent, {_id}) => {
        const params = _id ? { _id } : {};
        return Task.findOne(params);
      },
      tasks: async (parent, args = {}) => {
        // const params = open ? { open } : {};
        return Task.find(args);
      },
      user: async (parent, {email}) => {
          return User.findOne({email});
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
      updateUser: async (parent, args) => {
        return await User.findOneAndUpdate( {email: args.email}, {name: args.name, email: args.email, username: args.username, password: args.password, posted_tasks: args.posted_tasks, claimed_tasks: args.claimed_tasks, city: args.city, state: args.state, zipcode: args.zipcode, streetAddress: args.streetAddress, optionalUnityNumber: args.optionalUnitNumber}, { new: true } )
      },
      addTask: async (parent, args) => {
        const task = await Task.create(args);
        await User.findOneAndUpdate({_id: task.created_by}, {$push:{posted_tasks: task._id}})
        return task;
      },
      // updateTask: {

      // }
    },
  };
  
  module.exports = resolvers;
  