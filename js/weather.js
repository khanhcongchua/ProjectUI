import { callApi, getDataForHomePage, getWeather7days, getWeatherToday } from "./handlleAPI.js";
import { initOrUpdateBar, initPredicting7daysBar } from "./webSocket.js";

// Assuming this code is running in a browser environment
const currentUrl = window.location.href;
// Extract the origin (protocol + hostname) from the current URL
const currentOrigin = new URL(currentUrl).origin;
// Combine the origin and API path to get the full API URL
// const apiUrl = `${currentOrigin}`;
const apiUrl = 'http://localhost:3000';

function renderWeatherToday(data) {
    const weatherHtml = `
                    <h6 class="mb-4">Thời Tiết Hôm Nay</h6>
                    <div class="general-weather-infor">
                        <div class="col-icon">
                            <div class="weather-icon">
                                <img height ="55" src="img/high-temperature.png" />
                                <h3>${data.temp}°C</h3>
                            </div>
                            <div class="weather-icon">
                                <img height ="55" src="img/thermometer.png" />
                                <h3>${data.maxTemp}°C</h3>
                            </div>
                        </div>
                        <div class="col-icon">
                            <div class="weather-icon">
                                <img height ="55" src="img/humidity-sensor.png" />
                                <h3>${data.humidity}%</h3>
                            </div>
                            <div class="weather-icon">
                                <img height ="55" src="img/low-temperature.png" />
                                <h3>${data.minTemp}°C</h3>
                            </div>
                        </div>
                    </div>
                    <div class="weather-temp-today">
                        <img height="150" width="150" alt="Weather API Day Thunderstorm with light rain" style=""                    
                         src="https://cdn.weatherbit.io/static/img/icons/${data.icon}.png">
                        <h1>${data.titleOfWeather}</h1>
                    </div>`

    const viewWeather = document.querySelector('.weather-inf');
    viewWeather.innerHTML = weatherHtml;
}

function renderPredictWeather7days(data) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const template = document.querySelector('.weather7days .row .row');

    template.innerHTML = '';//remove old div

    for (let i = 0; i < 7; i++) {
        const date = data.date[i];
        const day = new Date(date).getDay();

        const icon = data.icon[i];
        const temp = data.temp[i];
        const render = `
        <div class="col" style="margin-bottom:20px">
            <div class="bg-white rounded p-3">
                <h6>${days[day]}</h6>
                <img height="50" width="50" alt="Weather API Day Thunderstorm with light rain" style=""                     
                         src="https://cdn.weatherbit.io/static/img/icons/${icon}.png">
                <p>${temp}°C</p>
            </div>
        </div>
        `
        template.innerHTML += render;
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // Function to check and update the weather data
    const updateWeatherData = async () => {
        let weatherToday = null;
        let weather7Days = null;
        let predictWaterVolume = null;
        let dataFromWaterVolume = null;
        try {
            const currentTime = new Date().getTime();

            let data = await getDataForHomePage(apiUrl, null);
            weatherToday = data.data.dataWeatherToday;
            weather7Days = data.data.dataWeather7days;
            predictWaterVolume = data.data.predictWaterVolume;
            dataFromWaterVolume = data.data.dataFromWaterVolume;
            // console.log(dataFromWaterVolume);

            // weatherToday = await getWeatherToday();
            // weather7Days = await getWeather7days();

            if (weatherToday == null || weather7Days == null) {
                console.log('Call api');

                // await callApi(apiUrl);
                weatherToday = await getWeatherToday(apiUrl);
                weather7Days = await getWeather7days(apiUrl);
            }

            // console.log(currentTime, weatherToday.currentTime, weather7Days.currentTime);


            if (currentTime - weatherToday.currentTime > 90 * 60 * 1000) {
                console.log("Call Api after timing greater than 90 minutes");

                await callApi(apiUrl);
                weatherToday = await getWeatherToday(apiUrl);
                weather7Days = await getWeather7days(apiUrl);
            }

            renderWeatherToday(weatherToday);
            renderPredictWeather7days(weather7Days);
            initPredicting7daysBar(predictWaterVolume, weather7Days.date)
            initOrUpdateBar(dataFromWaterVolume, 0)

        } catch (error) {
            console.error('Error:', error);
        }
    };

    setInterval(updateWeatherData, 5 * 60 * 1000);

    updateWeatherData();
});
