/*
fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=79f2180f696f74f48844082da9bb130b')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        //https://openweathermap.org/img/wn/02d@2x.png
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });

    */
const time1 = document.getElementById('time-1');
const date1 = document.getElementById('date-1');
const currentItem = document.getElementById('current_item');
const timeZone1 = document.getElementById('time_zone-1');
const currentCountry = document.getElementById('current_country');
const weatherForecast1 = document.getElementById('weather_forecast-1');
const currentTemp1 = document.getElementById('current_temp-1');

// Let's create an array of days
const days = ['Sanday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY = '79f2180f696f74f48844082da9bb130b';

// Let's make an array to update the date and time
setInterval(() => {
   const time = new Date();
   const month = time.getMonth();
   const date = time.getDate();
   const day = time.getDay();
   const hour = time.getHours(); // 24 hour clock
   const hoursIn12 = hour >= 13 ? hour % 12 : hour
   const minutes = time.getMinutes();
   const ampm = hour >= 12 ? 'PM' : 'AM'

   time1.innerHTML = (hoursIn12 < 10 ? '0' + hoursIn12 : hoursIn12) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + `<span id="am-pm">${ampm}</span>`;
   date1.innerHTML = days[day] + ', ' + date + ' ' + months[month];
}, 1000);

// How to make an API call
getWeatherData()
function getWeatherData() {
   navigator.geolocation.getCurrentPosition((success) => {
      // console.log(success);

      let { latitude, longitude } = success.coords;

      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
         .then(res => res.json()).then(data => {
            console.log(data);
            showWeatherData(data);
         })
   })
}

function showWeatherData(data) {
   let { humidity, pressure, sunrise, sunset, wind_speed } = data.current;
   timeZone1.innerHTML = data.timezone;
   currentCountry.innerHTML = data.lat + 'N ' + data.lon + 'E';

   currentItem.innerHTML =
      `<div class="weather_item-1">
   <div>Humidity</div>
   <div>${humidity} %</div>
</div>
<div class="weather_item-1">
   <div>Pressure</div>
   <div>${Math.round(pressure * 0.750063755419211)} mmHg</div>
</div>
<div class="weather_item-1">
   <div>Wind Speed</div>
   <div>${wind_speed} m/s</div>
</div>

<div class="weather_item-1">
   <div>Sunrise</div>
   <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
</div>
<div class="weather_item-1">
   <div>Sunset</div>
   <div>${window.moment(sunset * 1000).format('HH:mm a')}</div>
</div>
`;

   let otherDayForcast1 = '';
   data.daily.forEach((day, idx1) => {
      if (idx1 == 0) {
         currentTemp1.innerHTML = `
         <div class="today-1" id="current_temp-1">
         <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="weather icon" class="weather_icon">
         <div class="other">
            <div class="weather_for_day">${window.moment(day.dt * 1000).format('ddd')}</div>
            <div class="temp-1">Nidht - ${day.temp.night}&#176; C</div>
            <div class="temp-1">Day - ${day.temp.day}&#176; C</div>
         </div>
      </div>
         `
      } else {
         otherDayForcast1 += `
      <div class="weather_forecast_item-1">
      <div class="weather_for_day">${window.moment(day.dt * 1000).format('ddd')}</div>
      <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="weather_icon">
      <div class="temp-1">Nidht - ${day.temp.night}&#176; C</div>
      <div class="temp-1">Day - ${day.temp.day}&#176; C</div>
   </div>
      `
      }
   })
   weatherForecast1.innerHTML = otherDayForcast1;
} 
