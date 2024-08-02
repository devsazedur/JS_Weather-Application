const apiKey = '38c84570fd456ce8fddf8c1f204a536d'; // Replace with your new API key
const city = "Rajshahi";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},BD&units=metric&appid=${apiKey}`;

fetch(apiUrl)
.then(response => {
if(!response.ok){
    throw new Error("Network Error")
}
return response.json();
})
.then(data=>{
    const mainDiv = document.getElementById('weather')
    mainDiv.innerHTML = 
    `<h3>Location: ${data.name}</h3> 
    <p>Temperature: ${data.main.temp}</p>`
})

