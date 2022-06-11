require('dotenv').config({path: "../.env"})
const { CourierClient } = require("@trycourier/courier");

const courier = CourierClient({ authorizationToken: process.env.COURIER_AUTH_TOKEN }); // get from the Courier UI

// // Example: send a message supporting email & SMS
// // const { messageId } = await courier.send({
// //   eventId: "<EVENT_ID>", // get from the Courier UI
// //   recipientId: "<RECIPIENT_ID>", // usually your system's User ID
// //   profile: {
// //     email: "example@example.com",
// //     phone_number: "555-228-3890",
// //   },
// //   data: {}, // optional variables for merging into templates
// // });

const sendUserSignup = async (email) => {
  const { messageId } = await courier.send({
  
    "message": {
      "template": process.env.USER_SIGNUP_ID,
      "to": {
        "email": email
      }
    }
  }
  )
};

// Import, then call function to send email
// sendCourierNotification("developwithemma@gmail.com")

module.exports = {sendUserSignup}