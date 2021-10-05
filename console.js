const inquirer = require("inquirer");
const axios = require('axios');
let input;
function run(userInput) {
    // retrieve json data 
    userInput= input
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

}

function start() {

    inquirer.prompt([

        {
            name: "userInput",
            type: "input",
            message: "Select the album id by number 1-100. q to exit",
            validate: function (id) {
                input = id
                if (!isNaN(id) && id != 0 && id < 101) {
                    return true;
                }
                if (id === "q"){
                    process.exit(0)
                }

                return false;
            }
        }

    ]).then(function () {

        let url = `https://jsonplaceholder.typicode.com/photos?albumId=${input}`
        run(url)
    })
}

module.exports = start;
module.exports = run;
