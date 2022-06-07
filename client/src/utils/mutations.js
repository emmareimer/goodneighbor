import { gql } from "@apollo/client";

// -------------- USER MUTATIONS --------------

// ------------- ADD USER ---------------

export const ADD_USER = gql`
mutation addUser ($email: String!, $password: String!, $username: String!, $name: String) {
  addUser(email: $email, password: $password, username: $username, name: $name) {
    token
    user {
      username
      email
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
mutation loginUser($password: String!, $email: String) {
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

//----------------- UPDATE USER PROFILE ---------------

export const UPDATE_USER_PROFILE = gql`
mutation Mutation($name: String, $email: String, $username: String, $password: String, $city: String, $state: String, $zipcode: Int, $streetAddress: String, $optionalUnitNumber: String) {
  updateUser(name: $name, email: $email, username: $username, password: $password, city: $city, state: $state, zipcode: $zipcode, streetAddress: $streetAddress, optionalUnitNumber: $optionalUnitNumber) {
    name
    email
    username
    password
    city
    state
    zipcode
    optionalUnitNumber
    streetAddress
  }
}
`;

// TEST DATA FOR UPDATE USER PROFILE

// {
//   "name": "Emma Test",
//   "email": "emma@test.com",
//   "username": "NewerEmma",
//   "password": "$2b$10$CbG/ZMNjfiqSJSWaDEoUBe3fFdR0hJ3ltjtudjfFCQmWhnWKqT.OS",
//   "city": "Littleton",
//   "state": "Colorado",
//   "zipcode": 80126,
//   "streetAddress": "8925 Test Street",
//   "optionalUnitNumber": null
// }

// ---------------- UPDATE USER POSTED TASKS -----------------

// TEST DATA FOR UPDATE USER POSTED TASKS

// ---------------- UPDATE USER CLAIMED TASKS -----------------

// TEST DATA FOR UPDATE USER CLAIMED TASKS 



// -------------- TASK MUTATIONS --------------

// ---------------- ADD TASK ------------------

// TEST DATA FOR ADD TASK

// --------------- UPDATE SINGLE TASK -----------------

// TEST DATA FOR UPDATE TASKS

// --------------- DELETE TASK ---------------------
