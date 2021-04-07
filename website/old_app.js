// document.getElementById('trigger-button').addEventListener('click', callAPI);

// function callAPI(e) {
//     console.log("Button clicked. API triggered.");

//     const apiKey = "8ffeaf78b38e0adfcb5c0d96c5e156b4"
//     const latitude = "41.87";
//     // const latitude = document.getElementById("lat-box").value;
//     const longitude = "-87.62";
//     // const longitude = document.getElementById("lon-box").value;
//     const fullURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=daily&appid=${apiKey}`
    
//     getWeatherData(fullURL)

//     .then(function(data) {
//         console.log('Received Data.');
//         // const hour = data.hourly[1];
//         for (const hour of data.hourly) {
//             const utcSeconds = hour.dt;
//             // const d = new Date(0);
//             // d.setUTCSeconds(utcSeconds) 
//             // const dateString = new String(d);
//             // const dateInfo = dateString.slice(0,15)
//             // const timeInfo = dateString.slice(16,21)
//             const tempInfo = hour.temp;
//             postData('/addWeather', {date: utcSeconds, temp: tempInfo});
//             console.log('data posted.');
//         }
//     })
//     // fetch the results back
//     // .then(function(data) {
//     //     console.log("Getting data.");
//     //     getWeatherData('/getWeather');
//     //     console.log(data);
//     // });
// };

// const getWeatherData = async (fullURL) => {
//     const res = await fetch(fullURL)

//     try {
//         const data = await res.json();
//         console.log(data)
//         return data
//     } catch(error) {
//         console.log("Error: ", error);
//     }
// }

// const postData = async (url='', data = {})=>{
//     // console.log(data)
//     const response = await fetch(url, {
//         method: "POST",
//         credentials: "same-origin", 
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     });

//     try {
//         const newData = await response.json();
//         // console.log(newData);
//         return newData
//     } catch(error) {
//         console.log("error: ", error);
//     }
// }

// const getData = async (url='')=>{
//     const response = await fetch(url, {
//         method: "GET",
//         credentials: "same-origin", 
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     });
//     try {
//         const newData = await response.json();
//         // console.log(newData);
//         return newData
//     } catch(error) {
//         console.log("error: ", error);
//     }
// }