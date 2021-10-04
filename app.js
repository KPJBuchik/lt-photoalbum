const inquirer = require("inquirer");

const axios = require('axios');

const start = async (userInput) => {

    inquirer.prompt([

        {
            name: "userInput",
            type: "input",
            message: "select the album id by number",
            validate: function (id) {
                userInput = id
                if (!isNaN(id) && id != 0 && id < 101) {
                    return true;
                }
                return false;
            }
        }

    ]).then(function () {

        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${userInput}`).then(
            function (response) {
                for (let i = 0; i < response.data.length; i++) {

                    console.log("[" + response.data[i].id + "]" + " " + response.data[i].title);
                    console.log(" ")

                }

            }).catch(function (error) {
                console.log(error);
            })
            .then(function () {
                start()
            });


    
})
}
start();

module.exports = start;
