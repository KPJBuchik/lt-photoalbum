// const inquirer = require("inquirer");
// const axios = require('axios');

// start();

// function start(userInput) {
//     inquirer.prompt([
//         {
//             name: "userInput",
//             type: "input",
//             message: "Select the album id by number 1-100. Enter q to exit",
//             validate: function (id) {
//                 userInput = id
//                 if (!isNaN(id) && id != 0 && id < 101) {
//                     return true;
//                 }
//                 if (id === "q") {
//                     process.exit()
//                 }

//                 return false;
//             }
//         }

//     ]).then(function () {
//         //retrive json data 
//         axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${userInput}`).then(
//             function (response) {
//                 //loop through specified album id 
//                 for (let i = 0; i < response.data.length; i++) {

//                     console.log("[" + response.data[i].id + "]" + " " + response.data[i].title);
//                     console.log(" ");
//                 }
//                 //catch error if connection cannot be made to api    
//             }).catch(function (error) {
//                 console.log(error);
//             })
//             .then(function () {
//                 start();
//             });


//     });
// };



// // class Album {
// //     static async all() {

// //         let res = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=3');
// //         return res.data
// //     }
// // }
// // module.exports = Album;
// module.exports = start;
const console = require('./console');

// run the app
console()