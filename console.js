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

function start(userInput) {
    //collect user input
    inquirer.prompt([

        {
            name: "userInput",
            type: "input",
            message: "Select the album id by number 1-100 or q to exit",
            validate: function (id) {
                userInput = id
                if (!isNaN(id) && id != 0 && id < 101) {
                    return true;
                }
                if (id === "q") {
                    process.exit(0);
                }

                return false;
            }
        }

    ]).then(function () {
        //invoke get request
        run(userInput);
    });
};

module.exports = run;

