$(document).ready(function() {

    //Openweather API key
    const apiKey = "04fd169e0aae8bb627a82ef7c675ce19";
    
    //Current Conditions elements
    const currentWrapper = document.querySelector("currentWrapper");
    const cityHeader = document.querySelector("cityHeader");
    const currentCity = document.querySelector("currentCity");
    const currentTemp = document.querySelector("temp");
    const humidity = document.querySelector("humidity");
    const currentWind = document.querySelector("wind");
    const uvIndex = document.querySelector("uvIndex");
    
    //Forcast Panel Elements
    const forecastPanel = $("div.forecast");

    //Search Elements
    const searchInput = document.querySelector("input.searchInput");
    const searchBtn = document.querySelector("button.searchBtn");
    const searchHistory = document.querySelector("section.history");
    let searchHistoryArr = [];
    //Dayjs current time
    const date = dayjs().format("D MMM, YYYY");




    
    //Search Openweather API with user input
    function displayForecast(cityName) {
        let queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

        $.ajax({
            url: queryUrl,
            method: "GET",
        }).then(function(response) {
            showCurrentWeather(response);
            console.log(response);
        })
    }
    
    $(searchBtn).on("click", displayForecast);


    function showCurrentWeather(data) {
        document.getElementById("cityHeader").textContent = date;
        document.getElementById("currentCity").textContent = "Temp: " + (data.main.temp -273) * 9/5 + 32 + " F";
    }

    showCurrentWeather();
});