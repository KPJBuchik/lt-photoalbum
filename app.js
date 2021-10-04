const inquirer = require("inquirer");

const axios = require('axios');

class Album {
    static async all() {
       let res = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=3');
      return res.data
     }
}

const start = async (userInput) => {

    inquirer.prompt([

        {
            name: "userInput",
            type: "input",
            message: "select the album id by number 1-100",
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
                let log;
                for (let i = 0; i < response.data.length; i++) {
                    log = ("[" + response.data[i].id + "]" + " " + response.data[i].title)
                    console.log(log);
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


module.exports = Album;
module.exports = start;




