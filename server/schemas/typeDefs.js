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
    }

    type Query {
        tasks: [Task]
    }

    type Mutation {
        updateTask(id: ID, completed_by: String, completed_at: String, open: Boolean): Task
    }
`;

module.exports = typeDefs;