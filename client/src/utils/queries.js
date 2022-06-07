import { gql } from "@apollo/client";

// -------------- USER QUERIES --------------

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

// ???????? GET ALL USER POSTED TASKS OPEN:TRUE

// ???????? GET ALL USER POSTED TASKS OPEN:FALSE

// ------------- GET USER CLAIMED TASKS ------------

// ???????? GET ALL USER CLAIMED TASKS OPEN:TRUE

// ???????? GET ALL USER CLAIMED TASKS OPEN:FALSE



// -------------- TASK QUERIES ---------------------

// -------------- GET SINGLE TASK ------------------

// -------------- GET ALL TASKS ----------------

// -------------- GET ALL OPEN TASKS BY ZIP CODE, CITY, STATE --------