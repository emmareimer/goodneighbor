import { gql } from "@apollo/client";

// ------------- ADD USER ---------------

export const ADD_USER = gql`
mutation Mutation($email: String!, $password: String!, $username: String!, $name: String!) {
  addUser(email: $email, password: $password, username: $username, name: $name) {
    token
    user {
      name
      email
      username
      password
    }
  }
}
`;

// TEST DATA FOR ADD_USER

// {
//     "email": "emma@test.com",
//     "password": "mypassword",
//     "username": "emmatest",
//     "name": "Emma Test"
// }

// ---------------- LOGIN USER -------------

export const LOGIN_USER = gql`
mutation Mutation($password: String!, $email: String) {
  loginUser(password: $password, email: $email) {
    token
    user {
      email
      password
    }
  }
}
`;

// TEST DATA FOR LOGIN USER

// {
//     "email": "emma@test.com",
//     "password": "mypassword"
// }

//----------------- UPDATE USER ---------------

// TEST DATA FOR UPDATE USER

// ---------------- ADD TASK ------------------

// TEST DATA FOR ADD TASK

// --------------- UPDATE TASK -----------------

// TEST DATA FOR UPDATE TASKS
