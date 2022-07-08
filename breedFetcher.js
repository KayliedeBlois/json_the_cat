const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, function(error, response, body) {
    // console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
  
    //console.log(typeof body);
    const data = JSON.parse(body);
    console.log(data[0].description);
    //console.log(typeof data);
    
  });
};

module.exports = {fetchBreedDescription};
//console.log(fetchBreedDescription);


// console.log(typeof body);


// const data = JSON.parse(body);
// console.log(data);
// console.log(typeof data);