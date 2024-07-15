// fetch the weather API return in JSON format and console.log it
// play around with the link to see what other data we can pull out:
// We can get the data now we have currentConditions, and days for forecast.
//we can edit the URL to get either metric or us standard measurements.
// we can break down the url further to choose between US and Metric that way we don't have to do the math to convert temperatures.

// Fetch data
const UNIT_GROUP = "?unitGroup=us";
const MY_API_KEY = "&key=XXGXHX3HNQFT2MBX2FVU7JYWQ";
const URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

const locationInput = document.querySelector('.location');
const submit = document.querySelector('.submit');
const content = document.querySelector('.content-container');
const weatherLocation = document.querySelector('.current-location');
const currentConditionsContainer = document.querySelector('.current-conditions');
const currentTemperature = document.querySelector('.temperature');
const currentHumidity = document.querySelector('.humidity');
const currentSunrise = document.querySelector('.sunrise');
const currentSunset = document.querySelector('.sunset');

async function fetchWeather(location) {
    const response = await fetch(`${URL}/${location}/${UNIT_GROUP}${MY_API_KEY}&contentType=json`, { mode: 'cors' });
    if (!response.ok) {
        console.log("You have an error with this fetch")
    } else {
        return response.json()
    }

}



submit.addEventListener('click', async (e) => {
    e.preventDefault()
    const weatherData = await fetchWeather(locationInput.value);
    displayCity(weatherData);
})

function displayCity(data) {
    const { temp, humidity, sunrise, sunset } = data.currentConditions
    const city = data.resolvedAddress
    weatherLocation.textContent = city
    currentTemperature.textContent = `temperature ${temp}`
    currentHumidity.textContent = `Humidity ${humidity}`
    currentSunrise.textContent = `Sunrise ${sunrise}`
    currentSunset.textContent = `Sunset ${sunset}`
    console.log(data)
}

