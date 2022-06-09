import { gql } from "@apollo/client";

// -------------- USER QUERIES --------------

// TODO UPDATE TO GET USER ID
// -------------- GET USER --------------
export const GET_USER = gql `
query User($email: String!) {
    user(email: $email) {
      name
      email
      username
      password
      city
      state
      zipcode
      streetAddress
      optionalUnitNumber
    }
  }
`;

// TEST DATA FOR GET USER

// {
//   "email": "emma@test.com"
// }

// ------------- GET USER POSTED TASKS -------------

export const GET_USER_POSTED_TASKS = gql`
query User($email: String!) {
  user(email: $email) {
    posted_tasks {
      _id
    }
  }
}
`;

// TEST DATA FOR GET USER POSTED TASKS

// {
//   "email": "emma@test.com"
// }

// ------------- GET USER CLAIMED TASKS ------------ ***

export const GET_USER_CLAIMED_TASKS = gql`
query Query($email: String!) {
  user(email: $email) {
    claimed_tasks {
      _id
    }
  }
}
`;

// TEST DATA FOR GET USER CLAIMED TASKS

// {
//   "email": "emma@test.com"
// }

// -------------- TASK QUERIES ---------------------

// -------------- GET SINGLE TASK ------------------ ****

export const GET_SINGLE_TASK = gql `
query Query($taskId: ID) {
  task(id: $taskId) {
    name
    taskDescription
    open
    category
    instructions
    city
    state
    zipcode
    streetAddress
    optionalUnitNumber
  }
}
`;

// TEST DATA FOR GET SINGLE TASK

// {
//   "taskId": "62a2116c2fc3723c1337c801"
// }

// -------------- GET ALL TASKS BY ZIP CODE -------- ****

export const GET_ALL_TASKS_BY_ZIP_CODE = gql `
query Query($zipcode: Int) {
  tasks(zipcode: $zipcode) {
    name
    taskDescription
    category
    instructions
    open
    city
    state
    zipcode
    streetAddress
    optionalUnitNumber
  }
}
`;

// TEST DATA FOR GET ALL TASKS BY ZIP CODE

// {
//   "zipcode": 80126
// }


// STRETCH GOAL
// ------------- GET USER COMPLETED TASKS ---------- ***