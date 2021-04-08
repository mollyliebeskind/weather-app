projectData = {};

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const cors = require('cors');
const { response } = require('express');
app.use(cors());

app.use(express.static('website'));

const port = 8000;

const server = app.listen(port, ()=>{
    console.log(`Running localhost: ${port}`)}
);

app.get('/getData', function(req, res) {
    res.send(projectData)
});

app.post('/addData', addData);

function addData(req, res) {
    let newData = req.body;

    console.log('server side data ', newData);

    projectData['date'] = newData.date;
    projectData['temp'] = newData.temp;
    projectData['runDuration'] = newData.runDuration;
    projectData['runFeel'] = newData.runFeel;

    res.send(projectData);
};