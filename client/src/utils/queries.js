import { gql } from "@apollo/client";

// -------------- USER QUERIES --------------

// TODO UPDATE TO GET USER ID
// -------------- GET ONE USER --------------
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

// ------------- GET USER POSTED TASKS -------------

export const GET_USER_POSTED_TAKS = gql`
query User($email: String!) {
  user(email: $email) {
    posted_tasks {
      _id
    }
  }
}
`;

// ------------- GET USER CLAIMED TASKS ------------ ***

// -------------- TASK QUERIES ---------------------

// -------------- GET SINGLE TASK ------------------ ****

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




// STRETCH GOAL
// ------------- GET USER COMPLETED TASKS ---------- ***