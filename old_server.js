// projectData = {};

// // use express to run server
// const express = require('express');
// const app = express();


// // Set up dependencies
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const cors = require('cors');
// app.use(cors());

// // Initialize project folder
// app.use(express.static('website'));

// // Establish connection port
// const port = 8000;

// // Spin up server
// const server = app.listen(port, listening);

// function listening(){
//     console.log("Server started");
//     console.log(`Running on localhost: ${port}`);
// };

// app.post('/addWeather', addWeather);

// function addWeather(req, res) {
//     console.log("req received");
//     // console.log(req.body);
//     newEntry = {
//         date: req.body.date,
//         temp: req.body.temp
//     };
//     projectData.push(newEntry);
//     console.log(projectData)
// }

// app.get("/getWeather", getWeather);

// function getWeather(req, res) {
//     console.log("Getting data")
//     console.log(res)
//     // Gets information from projectData object
//     res.send(projectData)
// };