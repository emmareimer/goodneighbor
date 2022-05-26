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
        Longitude: Int
    }

    type Task {
        _id: ID!
        name: String!
        task_text: String!
        created_by: String!
        created_at: String!
        completed_by: String!
        completed_at: String
        open: Boolean
        contactless: Boolean
        city: String!
        state: String!
        latitude: Int
        longitude: Int
    }

    type Query {
        tasks: [Task]
        city: [Task]
        state: [Task]
        latitude: [Task]
        longitude: [Task]
        user: [User]
    }

    type Mutation {
        updateTask(id: ID, completed_by: String, completed_at: String, open: Boolean): Task
        updateUser(id: ID, posted_tasks: String, claimed_tasks: String, address: String, city: String, state: String): User
    }
`;

module.exports = typeDefs;