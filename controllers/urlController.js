const URL = require("../models/Url");


/*
You need to implement a shortenUrl controller which takes a destinationUrl and expiresAt as input, creates a new shortened URL, and returns it in the response.

Instructions:

The controller expects an HTTP POST request with a destinationUrl and an optional expiresAt field in the request body.

If the destinationUrl field is missing, the controller should respond with a 400 Bad Request status and a JSON object containing a message field with value 'Please provide destinationUrl', and a status field with value 'Error'.

If the destinationUrl is not a valid URL, the controller should respond with a 400 Bad Request status and a JSON object containing a message field with value 'Invalid URL', and a status field with value 'Error'.

If the expiresAt field is provided, it should be a valid date string in the format 'YYYY-MM-DD'.

The controller should create a new URL object with the provided destinationUrl and expiresAt fields, and save it to the database.

The controller should then respond with a 200 OK status and a JSON object containing the shortUrl field with value equal to the shortened URL for the saved URL object.

If there is an error during the saving process, the controller should respond with a 500 Internal Server Error status and a JSON object containing a message field with value 'Something went wrong', a status field with value 'Error', and an error field with the error object.

Input:
destinationUrl and expiresAt (optional) in the request body.

Output:
{
"shortUrl": "https://short.url/abc123"
}
*/
const shortenUrl = async (req, res) => {
  //Write your code here
};


/*
You need to implement an updateUrl controller which takes a short URL and a new destination URL as input, finds the URL corresponding to the given short URL, updates the destination URL and responds with a JSON object containing a 'success' field with value true.

Instructions:

The controller expects an HTTP PUT request with a short URL and a new destination URL in the request body.

If the short URL is not found in the database, the controller should respond with a 404 Not Found status and a JSON object containing a 'message' field with value 'URL not found'.

If the update is successful, the controller should respond with a 200 OK status and a JSON object containing a 'success' field with value true.

Input:
{
"shortUrl": "abcxyz",
"destinationUrl": "https://www.example.com"
}

Output:
{
"success": true
}
*/
const updateUrl = async (req, res) => {
  //Write you code here
};


/*
Instructions:

The controller expects an HTTP GET request with a shortUrl parameter in the request URL.

If the shortUrl parameter is missing, the controller should respond with a 400 Bad Request status and a JSON object containing a 'message' field with value 'Short URL parameter is missing', and a 'status' field with value 'Error'.

If the shortUrl parameter is invalid, the controller should respond with a 404 Not Found status and a JSON object containing a 'message' field with value 'URL not found', and a 'status' field with value 'Error'.

If the shortUrl parameter is valid, the controller should redirect the request to the destinationUrl of the URL object corresponding to the shortUrl parameter.

If there is an error during the database query, the controller should respond with a 500 Internal Server Error status and a JSON object containing a 'message' field with value 'Something went wrong', a 'status' field with value 'Error', and an 'error' field with the error object.

Input:
Short URL parameter in the request URL

Output:
Redirect to the destinationUrl of the corresponding URL object if the shortUrl parameter is valid
*/
const getDestinationUrl = async (req, res) => {
  //Write your code here
};


/*
You need to implement an update expiry controller which takes a short URL and the number of days to extend the expiry date as input, finds the corresponding URL, updates its expiry date, and returns a JSON object with a 'success' field.

Instructions:
The controller expects an HTTP PUT request with a JSON body containing a 'shortUrl' field with the short URL and a 'days' field with the number of days to extend the expiry date.

If the short URL is not found in the database, the controller should respond with a 404 Not Found status and a JSON object containing a 'message' field with value 'URL not found' and a 'status' field with value 'Error'.

If the URL is found, the controller should update its expiry date by adding the specified number of days to the current expiry date.

If there is an error during the update process, the controller should respond with a 500 Internal Server Error status and a JSON object containing a 'message' field with value 'Something went wrong', a 'status' field with value 'Error', and an 'error' field with the error object.

Input:
A JSON object containing a 'shortUrl' field with the short URL and a 'days' field with the number of days to extend the expiry date.

Output:
{
"success": true
}


*/
const updateExpiry = async (req, res) => {

};

module.exports = {
  shortenUrl,
  updateUrl,
  getDestinationUrl,
  updateExpiry,
};
