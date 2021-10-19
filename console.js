const inquirer = require("inquirer");
const axios = require('axios');


function run(input) {
    // retrieve json data 
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${input}`).then(
        function (response) {
            //loop through specified album id 
            for (let i = 0; i < response.data.length; i++) {

                console.log("[" + response.data[i].id + "]" + " " + response.data[i].title);
                console.log(" ");
            }
            //catch error if connection cannot be made to api    
        }).catch(function (error) {
            console.log(error);
        })
        .then(function () {
            start();
        });

};

/*
  NOTE:  I don't think userInput needs to be an argument here. We could simply define this variable as let inside start.
*/
function start(userInput) {
    //collect user input
    inquirer.prompt([
        {
            name: "userInput",
            type: "input",
            message: "Select the album id by number 1-100 or q to exit",
            validate: function (id) {
                userInput = id
                /* NOTE: what if id = -1? */
                if (!isNaN(id) && id != 0 && id < 101) {
                    return true;
                }
                if (id === "q") {
                    console.log( '\n', "##Goodbye##")
                    process.exit(0);
                    
                }
                /*
                NOTE: If you return a string here it will display as error message which is helpful for 
                */
                return false;
            }
        }

    ]).then(function () {
        //invoke get request
        run(userInput);
    });
};

/* NOTE: I think start should be exported here*/
module.exports = run;

