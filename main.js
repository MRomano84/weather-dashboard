$(document).ready(function() {

    //Openweather API key
    const apiKey = "04fd169e0aae8bb627a82ef7c675ce19";
    
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
    const now = dayjs().format("h:mma - ddd MMMM DD, YYYY");


    

    
    






})