import { gql, useQuery } from "@apollo/client";
import { GET_ALL_TASKS_BY_ZIP_CODE } from "./queries";

let zipcodeCard = document.getElementById(`zipcode`);

export default async function searchZip(e) {
  // e.preventDefault();

  let apikey =
    "McJoP5WVgt3PzVLZFUG7nu5J9Jc68jX4XOATaButc7wGf4cqmssk8XvcvGkdWwco";
  let zipCode = document.getElementById("zip-code");

  return await fetch(
    `https://www.zipcodeapi.com/rest/${apikey}/radius.json/${zipCode.value}/5/mile`
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      let zipArray = response.zip_codes;
      let res = [];
      res.push(zipCode.value);
      zipArray.forEach((element) => {
        res.push(element.zip_code);
        // console.log(element.zip_code);
        // 1. Query here --> for each zip code returned, pass that zipcode into a GET_ALL_TASKS_BY_ZIP_CODE query --> filter by OPEN tasks only
        // const { loading, error, data } = useQuery(GET_ALL_TASKS_BY_ZIP_CODE, {
        //   variables: { zipcode: element.zip_code },
        // });
        // console.log(data);
        // 2. Return those tasks, and nest another for each statement where cards are built featuring tasks of all the returned zip codes
      });
      return res;
    });
  console.log("Zipcode: " + zipCode.value);
  // console.log("Category: " + categories.value);

  zipCode.value = "";
}

// zipcodeCard.addEventListener(`click`, searchZip);
