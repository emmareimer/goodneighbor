import { gql, useQuery } from "@apollo/client";
import { GET_ALL_TASKS_BY_ZIP_CODE } from "./queries";

export default function searchZip(e) {
  e.preventDefault();

  let apikey =
    "McJoP5WVgt3PzVLZFUG7nu5J9Jc68jX4XOATaButc7wGf4cqmssk8XvcvGkdWwco";
  let zipCode = document.getElementById("zip-code");

  fetch(
    `https://www.zipcodeapi.com/rest/${apikey}/radius.json/${zipCode.value}/5/mile`
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      let zipArray = response.zip_codes;
      console.log(zipArray);

      zipArray.forEach((element) => {
        console.log(element.zip_code);
      });
    });
  console.log("Zipcode: " + zipCode.value);
  console.log("Category: " + categories.value);

  zipCode.value = "";
}
