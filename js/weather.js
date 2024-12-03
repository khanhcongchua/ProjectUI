const apiKey = "c76c27beb2f949449b36fcc83a532629";
const url7days = `https://api.weatherbit.io/v2.0/forecast/daily?city_id=Can%20Tho&city=Can%20Tho&postal_code=%2B84&country=Vi%E1%BB%87t%20Nam&key=${apiKey}`

function handleApi7Days(url7days, weather7Days, weatherCurrent){
    fetch(url7days)
        .then(res => res.json())
        .then(data => {
            weather7Days(data)
            weatherCurrent(data)
        })
}


function dataWeather(data) {
    const icon = data.data[0].weather.icon
    const weatherTitle= data.data[0].weather.description;

    // const solarRad= data.data[0].solar_rad;
    const highTemp =data.data[0].high_temp;
    const lowTemp =data.data[0].low_temp;
    const temp = data.data[0].temp;
    const humidity=data.data[0].rh;

    const weatherHtml=`
                    <h6 class="mb-4">Thời Tiết Hôm Nay</h6>
                    <div class="general-weather-infor">
                        <div class="col-icon">
                            <div class="weather-icon">
                                <img height ="55" src="img/high-temperature.png" />
                                <h3>${temp}°C</h3>
                            </div>
                            <div class="weather-icon">
                                <img height ="55" src="img/thermometer.png" />
                                <h3>${highTemp}°C</h3>
                            </div>
                        </div>
                        <div class="col-icon">
                            <div class="weather-icon">
                                <img height ="55" src="img/humidity-sensor.png" />
                                <h3>${humidity}%</h3>
                            </div>
                            <div class="weather-icon">
                                <img height ="55" src="img/low-temperature.png" />
                                <h3>${lowTemp}°C</h3>
                            </div>
                        </div>
                    </div>
                    <div class="weather-temp-today">
                        <img height="150" width="150" alt="Weather API Day Thunderstorm with light rain" style=""                     
                         src="https://cdn.weatherbit.io/static/img/icons/${icon}.png">
                        <h1>${weatherTitle}</h1>
                    </div>`

     const viewWeather= document.querySelector('.weather-inf');
     viewWeather.innerHTML=weatherHtml;
}

function predictWeather7days(data){
    const days=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
    const template = document.querySelector('.weather7days .row .row');
    for(i=0;i<7;i++){
        const icon = data.data[i].weather.icon;
        const temp = data.data[i].temp;
        const render=`
        <div class="col" style="margin-bottom:20px">
            <div class="bg-white rounded p-3">
                <h6>${days[i]}</h6>
                <img height="50" width="50" alt="Weather API Day Thunderstorm with light rain" style=""                     
                         src="https://cdn.weatherbit.io/static/img/icons/${icon}.png">
                <p>${temp}°C</p>
            </div>
        </div>
        `
        template.innerHTML+=render;
    }
}

handleApi7Days(url7days, predictWeather7days, dataWeather);

