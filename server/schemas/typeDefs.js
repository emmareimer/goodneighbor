const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        username: String!
        password: String!
        posted_tasks: [Task]
        claimed_tasks: [Task]
        city: String
        state: String
        zipcode: Int!
        streetAddress: String
        optionalUnitNumber: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Task {
        _id: ID!
        name: String!
        taskDescription: String!
        open: Boolean
        category: String!
        instructions: String!
        created_by: User!
        created_at: String!
        claimed_by: User
        completed_by: User
        completed_at: String
        contactless: Boolean
        city: String!
        state: String!
        zipcode: Int!
        streetAddress: String
        optionalUnitNumber: String
    }

    type Query {
        tasks: [Task]
        user(_id: ID!): User
    }

    type Mutation {
        updateTask(id: ID, completed_by: String, completed_at: String, open: Boolean, latitude: Int, longitude: Int): Task
        updateUser(id: ID, posted_tasks: String, claimed_tasks: String, address: String, city: String, state: String): User

        createTask(name: String, taskDescription: String, open: Boolean, category: String, instructions: String, created_by: User, contactless: Boolean, city: String, State:   String, zipcode: Int, streetAddress: String, optionalUnitNumber: String): Task

        registerUser(email: String!, password: String!): Auth
        loginUser(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;