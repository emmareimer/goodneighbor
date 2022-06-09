import { gql } from "@apollo/client";

// -------------- USER MUTATIONS --------------

// ------------- ADD USER ---------------

export const ADD_USER = gql`
mutation addUser ($email: String!, $password: String!, $username: String!) {
  addUser(email: $email, password: $password, username: $username) {
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

export const UPDATE_USER_POSTED_TASK = gql`
mutation Mutation($email: String, $postedTasks: [ID]) {
  updateUser(email: $email, posted_tasks: $postedTasks) {
    posted_tasks {
      _id
    }
  }
}
`;

// TEST DATA FOR UPDATE USER POSTED TASKS

// {
//   "email": "emma@test.com",
//   "postedTasks": "629f6a132b355e02efcf16cf"
// }

// ---------------- UPDATE USER CLAIMED TASKS -----------------

export const UPDATE_USER_CLAIMED_TASK = gql`
mutation UpdateUser($email: String, $claimedTasks: [ID]) {
  updateUser(email: $email, claimed_tasks: $claimedTasks) {
    email
    claimed_tasks {
      _id
    }
  }
}
`;

// TEST DATA FOR UPDATE USER CLAIMED TASKS 

// {
//   "email": "dylan@test.com",
//   "claimedTasks": "629f68ec2b355e02efcf16c7"
// }


// -------------- TASK MUTATIONS --------------

// ---------------- ADD TASK ------------------

export const ADD_TASK = gql`
mutation Mutation($name: String, $taskDescription: String, $open: Boolean, $category: String, $createdBy: String, $city: String, $state: String, $zipcode: Int, $streetAddress: String, $optionalUnitNumber: String, $instructions: String, $email: String, $postedTasks: [ID]) {
  addTask(name: $name, taskDescription: $taskDescription, open: $open, category: $category, created_by: $createdBy, city: $city, state: $state, zipcode: $zipcode, streetAddress: $streetAddress, optionalUnitNumber: $optionalUnitNumber, instructions: $instructions) {
    name
    taskDescription
    open
    category
    instructions
    created_by {
      _id
    }
    created_at
    city
    state
    zipcode
    streetAddress
    optionalUnitNumber
  }
  updateUser(email: $email) {
    posted_tasks {
      _id
    }
  }
}
`;

// TEST DATA FOR ADD TASK

// {
//   "name": "This is a new task",
//   "taskDescription": "Description of task",
//   "open": true,
//   "category": "Landscaping",
//   "instructions": "these are instructions",
//   "city": "Littleton",
//   "state": "Colorado",
//   "zipcode": 80126,
//   "streetAddress": "8925 Test St",
//   "optionalUnitNumber": null,
//   "createdBy": "629cd21cb085f4d937f863c9",
// }

// --------------- UPDATE SINGLE TASK OPEN, COMPLETED_BY ----------------- ***

export const UPDATE_TASK_OPEN_COMPLETEDBY = gql`
mutation Mutation($updateTaskId: ID, $open: Boolean, $completedBy: String) {
  updateTask(id: $updateTaskId, open: $open, completed_by: $completedBy) {
    open
    completed_at
    completed_by {
      _id
    }
  }
}
`;

// TEST DATA FOR UPDATING TASK BY OPEN AND COMPLETED BY

// {
//   "open": false,
//   "updateTaskId": "62a2116c2fc3723c1337c801",
//   "completedBy": "62a2116c2fc3723c1337c801"
// }

// --- UPDATE SINGLE TASK CLAIMED_BY AND UPDATE USER CLAIMED_TASKS --- ***

export const UPDATE_TASK_CLAIMED = gql`
mutation Mutation($claimedBy: String, $updateTaskId: ID) {
  updateTask(claimed_by: $claimedBy, id: $updateTaskId) {
    claimed_by {
      _id
    }
  }
}
`

// TEST DATA FOR UPDATE TASKS

// {
//   "claimedBy": "62a16d738c34461fa96726b2",
//   "updateTaskId": "62a2116c2fc3723c1337c801",
// }

// --------------- DELETE TASK ---------------------


