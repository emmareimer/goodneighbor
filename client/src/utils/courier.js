import { CourierClient } from "@trycourier/courier";

const courier = CourierClient({ authorizationToken: "<AUTH_TOKEN>" }); // get from the Courier UI

// Example: send a message supporting email & SMS
const { messageId } = await courier.send({
  eventId: "<EVENT_ID>", // get from the Courier UI
  recipientId: "<RECIPIENT_ID>", // usually your system's User ID
  profile: {
    email: "example@example.com",
    phone_number: "555-228-3890",
  },
  data: {}, // optional variables for merging into templates
});