// Retrieve the data from the server side API
const updateUI = async(url) => {
    const response = await fetch(url);

    try {
        const retrievedData = await response.json();
        console.log("RETRIEVED DATA");
        console.log(retrievedData); // this needs more work

        const inputForm = document.getElementById('weather-input-form');
        inputForm.style.display = 'None';
        const resultBox = document.getElementById('weather-record-response');
        resultBox.style.display = 'flex';

        // Manipulate date to human readable format
        const d = new Date(0);
        d.setUTCSeconds(retrievedData.date);
        const dateString = new String(d);
        const dateInfo = dateString.slice(0,15);
        const timeInfo = dateString.slice(16,21);


        document.getElementById('date-result').innerHTML = dateInfo + " " + timeInfo;
        document.getElementById('temp-result').innerHTML = retrievedData.temp + " degrees F";
        document.getElementById('duration-result').innerHTML = retrievedData.runDuration + " miles";
        document.getElementById('feel-result').innerHTML = "Overall it felt " + retrievedData.runFeel;

        return retrievedData
    }
    catch(error) {
        console.log('Error: ', error);
    }
};

// Function to post data from API to server side database
const postData = async(url, data) => {
    console.log("Input Data");
    console.log(data);

    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    try {
        const newData = await response.json();
        console.log("NEWDATA");
        console.log(newData);
        return newData;
    } catch(error) {
        console.log('error', error);
    }
};

// Trigger API request
const getWeather = async (zipCode, baseURL, apiKey) => {
    const fullURL = `${baseURL}zip=${zipCode}&units=imperial&appid=${apiKey}`;

    console.log(fullURL);
    const res = await fetch(fullURL);

    try {
        const apiData = await res.json();
        console.log("APIDATA")
        console.log(apiData)
        return apiData

    } catch(error) {
        console.log("Error: ", error);
    }
}

document.getElementById('trigger-button').addEventListener('click', triggerResponse);

function triggerResponse() {
    console.log("Button triggered.")
    const baseURL = "http://api.openweathermap.org/data/2.5/weather?";
    const zipCode = document.getElementById('zip-box').value
    const apiKey = "8ffeaf78b38e0adfcb5c0d96c5e156b4";
    const runDuration = document.getElementById('run-duration-selector').value
    const runFeel = document.getElementById('run-feeling-selector').value
    
    getWeather(zipCode, baseURL, apiKey)

    .then(function(data) {
        let dataInput = {
            temp: data.main.temp,
            date:  data.dt,
            runDuration: runDuration,
            runFeel: runFeel
        }

        postData('/addData', dataInput)
        updateUI('/getData')
    });

};

const buttons = document.getElementsByClassName('how-to-button');

for (button of buttons) {
    button.addEventListener('click', function() {
        window.scrollTo(0, 0);
    });
};