$(document).ready(function() {

    //Openweather API key
    const apiKey = "ff846794ae22bbaded5b58abe22ccda5";
    
    //Current Conditions elements
    const currentWrapper = $("#currentWrapper");
    const cityHeader = $("#cityHeader");
    const currentCity = $("#currentCity");
    const currentTemp = $("#temp");
    const humidity = $("#humidity");
    const currentWind = $("#wind");
    const uvIndex = $("#uvIndex");
    
    //Forcast Panel Elements
    const forecastPanel = $("div.forecast");

    //Search Elements
    const searchInput = $("input.searchInput");
    const searchBtn = $("button.searchBtn");
    const searchHistory = $("section.history");
    let searchHistoryArr = [];
    //Dayjs current time
    const date = dayjs().format("D MMM, YYYY");




    
    //Search Openweather API with user input
    function displayForecast() {
        let cityName = searchInput.val().trim();
        let queryUrl = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

        $.ajax({
            url: queryUrl,
            method: "GET",
        }).then(function(response) {
            console.log(response);
        })
    }
    
    $(searchBtn).on("click", displayForecast);


    function showCurrentWeather(data) {
        cityHeader.innerHTML =  date;
    }

    showCurrentWeather();
})