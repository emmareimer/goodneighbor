const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        username: String!
        password: String!
        zipcode: Int!
        address: String
        posted_tasks: [Task]
        claimed_tasks: [Task]
        city: String
        state: String
        latitude: Int
        longitude: Int
    }

    type AuthPayload {
        token: String!
        user: User!
    }

    type Task {
        _id: ID!
        name: String!
        task_text: String!
        created_by: User!
        created_at: String!
        completed_by: User
        completed_at: String
        open: Boolean
        contactless: Boolean
        city: String!
        state: String!
        latitude: Int
        longitude: Int
    }

    type Query {
        tasks(open: Boolean, city: String, state: String, latitude: Int, longitude: Int): [Task]
        # city: [Task]
        # state: [Task]
        # latitude: [Task]
        # longitude: [Task]
        user(_id: ID!): User
    }

    type Mutation {
        updateTask(id: ID, completed_by: String, completed_at: String, open: Boolean, latitude: Int, longitude: Int): Task
        updateUser(id: ID, posted_tasks: String, claimed_tasks: String, address: String, city: String, state: String): User
        # TODO: update registerUser and loginUser
        # registerUser(username: String, email: String!, password: String!): AuthPayload!
        # userLogin (email: String!, password: String!): AuthPayload!

        # TODO (Emma): Set up mutations for creating tasks
    }
`;

module.exports = typeDefs;