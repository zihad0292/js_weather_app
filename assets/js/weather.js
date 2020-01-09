(function() {
  var citySearch = document.querySelector("#citySearch");
  var btn = document.querySelector(".searchButton");
  var resultCity = document.querySelector("#resultCity h2");
  var weatherConditionIcon = document.querySelector(
    "#weatherCondition img#icon"
  );
  var dayNightStatus = document.querySelector(".dayNightStatus");
  var weather = document.querySelector(".weather");
  var temp = document.querySelector(".temp .resultValue");
  var feelsLike = document.querySelector(".feelsLike .resultValue");
  var humidity = document.querySelector(".humidity .resultValue");
  var wind = document.querySelector(".wind .resultValue");
  var windDir = document.querySelector(".wind span.windDir");

  const BASEURL = "http://api.weatherstack.com/";
  const KEY = "787a22bcc52e4d98c71906d64263e9d2";
  const TYPEOFDATA = "current";
  var query = "Sylhet";

  showWeather("Sylhet");

  btn.addEventListener("click", f => {
    if (!citySearch.value) {
      alert("Please enter a cityname first. e.g. Dhaka or Paris");
      return;
    }
    showWeather(citySearch.value);
  });

  function showWeather(cityName) {
    fetch(`${BASEURL}/${TYPEOFDATA}?access_key=${KEY}&query=${cityName}`)
      .then(response => response.json())
      .then(forecast => {
        // console.log(forecast.current);
        // console.log(forecast.location);
        var conditioIcon = forecast.current.weather_icons[0];
        // conditioIcon = conditioIcon.replace(
        //   "//cdn.apixu.com/weather",
        //   "./assets/images/weatherIcons"
        // );
        weatherConditionIcon.src = conditioIcon;
        resultCity.innerHTML = forecast.location.name;
        dayNightStatus.innerHTML =
          forecast.current.is_day == "yes" ? "Day" : "Night";
        weather.innerHTML = forecast.current.weather_descriptions[0];
        temp.innerHTML = forecast.current.temperature;
        feelsLike.innerHTML = forecast.current.feelslike;
        humidity.innerHTML = forecast.current.humidity;
        wind.innerHTML = forecast.current.wind_speed;
        windDir.innerHTML = forecast.current.wind_dir;
      });
  }
})();
