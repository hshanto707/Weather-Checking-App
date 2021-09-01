const cityName = document.getElementById("city-name");
const input = document.getElementById("weather-input");
const weather = document.getElementById("weather");
const icon = document.getElementById("icon");
const curTemp = document.getElementById("temp-cur");
const maxTemp = document.getElementById("temp-max");
const minTemp = document.getElementById("temp-min");

const loadWeatherData = () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=f03386cdc30cfab1bf03df7c23a9325b`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWeatherData(data))
    .catch((error) => {
      document.getElementById("error-message").style.display = "block";
      document.getElementById("main-display").style.display = "none";
      input.value = "";
    });
};

const displayWeatherData = (data) => {
  document.getElementById("error-message").style.display = "none";
  document.getElementById("main-display").style.display = "block";
  cityName.innerText = `${data.name}, ${data.sys.country}`;
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weather.innerText = data.weather[0].main;
  curTemp.innerText = `Current Temp: ${(data.main.temp - 273.15).toFixed(
    2
  )} °C`;
  maxTemp.innerText = `Maximum Temp: ${(data.main.temp_max - 273.15).toFixed(
    2
  )} °C`;
  minTemp.innerText = `Minimum Temp: ${(data.main.temp_min - 273.15).toFixed(
    2
  )} °C`;
  input.value = "";
};
