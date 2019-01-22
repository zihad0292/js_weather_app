(function() {
    var citySearch = document.querySelector("#citySearch");
    var btn = document.querySelector(".searchButton");
    var resultCity = document.querySelector("#resultCity h2");
    var weatherConditionIcon = document.querySelector("#weatherCondition img#icon");
    var dayNightStatus = document.querySelector(".dayNightStatus");
    var weather = document.querySelector(".weather");
    var temp = document.querySelector(".temp .resultValue");
    var feelsLike = document.querySelector(".feelsLike .resultValue");
    var humidity = document.querySelector(".humidity .resultValue");
    var wind = document.querySelector(".wind .resultValue");
    var windDir = document.querySelector(".wind span.windDir");
    
    const BASEURL = "https://api.apixu.com/v1";
    const KEY = "5e7d2e5334654e5993b84427192001";
    const TYPEOFDATA = "current.json";
    var query = "Sylhet";

    fetch(`${BASEURL}/${TYPEOFDATA}?key=${KEY}&q=${query}`)
    .then(response => response.json())
    .then(forecast => {
        console.log(forecast.current);
        console.log(forecast.location);
        var conditioIcon = forecast.current.condition.icon;
        conditioIcon = conditioIcon.replace("//cdn.apixu.com/weather", "./assets/images/weatherIcons");
        weatherConditionIcon.src = conditioIcon;
        resultCity.innerHTML  = forecast.location.name;
        dayNightStatus.innerHTML  = forecast.current.is_day == 1 ? "Day" : "Night";
        weather.innerHTML  = forecast.current.condition.text;
        temp.innerHTML  = forecast.current.temp_c;
        feelsLike.innerHTML  = forecast.current.feelslike_c;
        humidity.innerHTML  = forecast.current.humidity;
        wind.innerHTML  = forecast.current.wind_kph;
        windDir.innerHTML  = forecast.current.wind_dir;

    });

    btn.addEventListener("click", f => {
        if(!citySearch.value){
            alert("Please enter a cityname first. e.g. Dhaka or Paris")
            return;
        }
        fetch(`${BASEURL}/${TYPEOFDATA}?key=${KEY}&q=${citySearch.value}`)
        .then(response => response.json())
        .then(forecast => {
            console.log(forecast.current);
            console.log(forecast.location);
            var conditioIcon = forecast.current.condition.icon;
            conditioIcon = conditioIcon.replace("//cdn.apixu.com/weather", "./assets/images/weatherIcons");
            weatherConditionIcon.src = conditioIcon;
            resultCity.innerHTML  = forecast.location.name;
            dayNightStatus.innerHTML  = forecast.current.is_day == 1 ? "Day" : "Night";
            weather.innerHTML  = forecast.current.condition.text;
            temp.innerHTML  = forecast.current.temp_c;
            feelsLike.innerHTML  = forecast.current.feelslike_c;
            humidity.innerHTML  = forecast.current.humidity;
            wind.innerHTML  = forecast.current.wind_kph;
            windDir.innerHTML  = forecast.current.wind_dir;
    
        });
    });
 })();