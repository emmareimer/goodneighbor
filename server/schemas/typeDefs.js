const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        email: String!
        username: String!
        password: String!
        posted_tasks: [Task]
        claimed_tasks: [Task]
        city: String
        state: String
        zipcode: Int
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
        task: Task
        tasks: [Task]
        user(email: String!): User
    }

    type Mutation {
        # --- USER MUTATIONS ---
        addUser(email: String!, password: String!, username: String!, name: String!, zipcode: Int,): Auth
        loginUser(email: String, password: String!, username: String): Auth
        updateUser(id: ID, name: String, email: String, username: String, password: String, posted_tasks: [ID], claimed_tasks: [ID], city: String, state: String, zipcode: Int, streetAddress: String, optionalUnitNumber: String): User

        # --- TASK MUTATIONS ---
        addTask(name: String, taskDescription: String, open: Boolean, category: String, instructions: String, created_by: String, contactless: Boolean, city: String, State:   String, zipcode: Int, streetAddress: String, optionalUnitNumber: String): Task
        updateTask(id: ID, completed_by: String, completed_at: String, open: Boolean, latitude: Int, longitude: Int): Task
    }
`;

module.exports = typeDefs;