$(document).ready(function() {

    //Openweather API key
    const apiKey = "04fd169e0aae8bb627a82ef7c675ce19";
    
    //Current Conditions elements
    const currentWrapper = document.querySelector("currentWrapper");
    const cityHeader = document.querySelector("cityHeader");
    const currentCity = document.querySelector("currentCity");
    const currentTemp = document.querySelector("temp");
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
    
    let city = document.getElementById("searchInput").value;

    

    
    $(searchBtn).on("click", displayForecast);
    
    //Search Openweather API with user input
    function displayForecast() {
        let city = document.getElementById("searchInput").value;
        let queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
        console.log(city);
        
        $.ajax({
            url: queryUrl,
            method: "GET",
        }).then(function(response) {
            showCurrentWeather(response);
            console.log(response);
        })
        
    }
    
    
    
    function showCurrentWeather(data) {
        let currentDate = dayjs().format("D MMM, YYYY");
        document.getElementById("cityHeader").text = currentDate;
        
        let temp = "Temperature: " + (1.8 * (data.main.temp - 273) + 32).toFixed(0) + " F°";
        let humidity = "Humidity: " + data.main.humidity;
        let wind = "Wind Speed: " + data.wind.speed.toFixed(0) + "mph";


        $("#cityHeader").empty();
        $("#currentCity").empty();
        $("#temp").empty();  
        $("#humidity").empty();
        $("#wind").empty();  


        $("#cityHeader").append(currentDate);
        $("#currentCity").append(data.name);
        $("#temp").append(temp);  
        $("#humidity").append(humidity);  
        $("#wind").append(wind);  




    }
    
});