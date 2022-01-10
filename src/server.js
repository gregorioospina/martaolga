const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.put("/add_subscriber", (req, res) => {
  const client = require("mailchimp-marketing");

  client.setConfig({
    apiKey: "YOUR_API_KEY",
    server: "YOUR_SERVER_PREFIX",
  });

  const run = async () => {
    const response = await client.lists.setListMember(
      "list_id",
      "subscriber_hash",
      { email_address: "Sammy_Klein@hotmail.com", status_if_new: "pending" }
    );
    console.log(response);
  };
  run();
});
