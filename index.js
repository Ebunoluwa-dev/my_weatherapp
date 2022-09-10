let now = new Date();
console.log(now);
let h2 = document.querySelector("#date");
h2.innerHTML = now;

function searchCity(city) {
  let apiKey = "5abfacb2719eefc2eddc5948beae3973";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  console.log(searchInput.value);
  let h1 = document.querySelector("#city");
  h1.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showTemperature(response) {
  console.log(response.data.main.temp);
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let precipitation = document.querySelector("#humidity");
  precipitation.innerHTML = Math.round(response.data.main.humidity);
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
  let sunrise = document.querySelector("#max");
  sunrise.innerHTML = Math.round(response.data.sys.sunrise);
  let sunset = document.querySelector("#min");
  sunset.innerHTML = Math.round(response.data.sys.sunset);
}

function showPosition(position) {
  console.log(position);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("#current");
button.addEventListener("click", getCurrentPosition);
