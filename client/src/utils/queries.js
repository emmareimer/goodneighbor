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

// ???????? GET ALL USER POSTED TASKS OPEN:TRUE

// ???????? GET ALL USER POSTED TASKS OPEN:FALSE

// ------------- GET USER CLAIMED TASKS ------------

// ???????? GET ALL USER CLAIMED TASKS OPEN:TRUE

// ???????? GET ALL USER CLAIMED TASKS OPEN:FALSE



// -------------- TASK QUERIES ---------------------

// -------------- GET SINGLE TASK ------------------

// -------------- GET ALL TASKS ----------------

// -------------- GET ALL OPEN TASKS BY ZIP CODE, CITY, STATE --------