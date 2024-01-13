const apiKey = "7219d8322b8283381470e92f3564c1a5";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images 4/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images 4/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images 4/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images 4/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images 4/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
