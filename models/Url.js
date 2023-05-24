const mongoose = require('mongoose');
const shortid = require("shortid");

/*
You have to implement a Mongoose model using the urlSchema schema. To create an instance of this model, you can use the following object as an example:
{
  "shortUrl": "V7JklpWw",
  "destinationUrl": "https://www.example.com",
  "expiresAt": "2023-12-31T23:59:59.999Z"
}

The shortUrl field should be a unique string that is generated using the shortid package. The destinationUrl field should be a string that is required. The expiresAt field should be a date that is required.

In this example, the shortUrl field is automatically generated using the shortid.generate function, destinationUrl is a required string that holds the destination URL for the short URL, and expiresAt is a required date that specifies when the short URL should expire.
*/
const urlSchema = new mongoose.Schema({
   //Write your code here
});

// Define URL model based on schema
const URL = mongoose.model("URL", urlSchema);

module.exports = URL;
