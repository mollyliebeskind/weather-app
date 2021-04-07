projectData = [];

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('website'));

const port = 8000;

const server = app.listen(port, ()=>{
    console.log(`Running localhost: ${port}`)}
);

app.get('/getData', function(req, res) {
    res.send(projectData)
});

app.post('/postData', function(req, res) {
    let newData = req.body;
    let newEntry = {
        temp: newData.temp,
        date: newData.date,
        runDuration: newData.runDuration,
        runFeel: newData.runFeel
    }
    projectData.push(newEntry)
});