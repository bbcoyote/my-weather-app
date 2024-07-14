// fetch the weather API return in JSON format and console.log it
// play around with the link to see what other data we can pull out:
// We can get the data now we have currentConditions, and days for forecast.
//we can edit the URL to get either metric or us standard measurements.
// we can break down the url further to choose between US and Metric that way we don't have to do the math to convert temperatures.
const UNIT_GROUP = "?unitGroup=us";
const MY_API_KEY = "&key=XXGXHX3HNQFT2MBX2FVU7JYWQ";
const URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

const locationInput = document.querySelector('.location');
const submit = document.querySelector('.submit')

async function fetchWeather(location) {
    const response = await fetch(`${URL}/${location}/${UNIT_GROUP}${MY_API_KEY}&contentType=json`, { mode: 'cors' });
    if (response.ok) {
        console.log(response.json())
    }
}

submit.addEventListener('click', (e) => {
    fetchWeather(locationInput.value)
    e.preventDefault()
})
