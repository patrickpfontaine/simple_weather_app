
const apiKey = '0cc7e1ec80bf0b30b669c60e320839b9'; // Replace with your API key

// Function to fetch weather data
async function getWeather(city) {
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    // fetch() sends request to API and returns resopnce object
    const response = await fetch(url);
    if (response.ok == false) {
      throw new Error('City not found');
    }
    //turns responce object into a javascript object
    const data = await response.json();
    return data;
  } 


// Function to display weather data
function displayWeather(data) {
  const weatherOutput = document.getElementById('weather-output');
  const { name, main, weather } = data;
  weatherOutput.innerHTML = `
    <h2>${name}</h2>
    <p>Temperature: ${main.temp}°F</p>
    <p>Weather: ${weather[0].description}</p>
  `;
}

// Add event listener to the button
const getWeatherButton = document.getElementById('get-weather-button');

getWeatherButton.addEventListener('click', async () => {
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value.trim();
    console.log(cityInput)
    //console.log(city)
    const weatherData = await getWeather(city);
    displayWeather(weatherData);
});