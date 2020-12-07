 
const fs = require('fs');
const request = require('request');

const inputURL = process.argv[2];

const filePathInput = process.argv[3];
//const { sizeof } = require("file-sizeof");



request(inputURL, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  // create a new open file'
  /*
  if(response.status !== 200){

    console.log("error: response status code is", response.status);
  }
  */
  
    
    fs.open(filePathInput, 'w', function (err, file) {
      if (err) {
        throw err;
      }
      else{ 
        //console.log('Created File!');
        // after file created write the data to file that was sent by the http server from the specified URL
        fs.writeFile(filePathInput, body, function (err) {
          
          if (err) return console.log(err);
          else {
            
            const {size} = fs.statSync(filePathInput);
            console.log(`Downloaded and saved ${size} bytes to ${filePathInput}`);
            //const iec = sizeof.IEC("./testfile_large.mp4");
          }
        });
  
      }
  
    });
  

});

