$(document).ready(function () {

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
    
    
    

    $(searchBtn).on("click", getForecast);
    
    function getCity() {
        return localStorage.getItem("searchedCity");
    }
    
    function updateHTML() {
        let city = getCity();

    }
    
    function setCity() {
        // Gets input value
        let city = document.getElementById("searchInput").value;
        // Saves data to retrieve later
        localStorage.setItem("searchedCity", city);
        
        let search = $("#searchHistory");
        let savedCity = $("<h5>");
        savedCity.append(city);
        search.append(savedCity);
        // Updates HTML
        updateHTML();
    }
    

    //Search Openweather API with user input
    function getForecast() {
        let city = document.getElementById("searchInput").value;
        let queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

        
        $.ajax({
            url: queryUrl,
            method: "GET",
        }).then(function (response) {
            showCurrentWeather(response);
            console.log(response);
        })
        setCity();
        
        
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
        $(".dayDate").empty();
        $(".dayTemp").empty();
        $(".dayHumi").empty();
        
        
        $("#cityHeader").append(currentDate);
        $("#currentCity").append(data.name);
        $("#temp").append(temp);
        $("#humidity").append(humidity);
        $("#wind").append(wind);
        


        //OneCall API
        let oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&exclude=minutely,hourly,alerts&appid=" + apiKey;

        $.ajax({
            url: oneCallUrl,
            method: "GET",
        }).then(function (oneCall) {
            console.log(oneCall);

            //5 day Forecast
            //Day 1    
            let day1Unix = oneCall.daily[1].dt * 1000;
            let day1Image = oneCall.daily[1].weather[0].icon;
            let day1DateObj = new Date(day1Unix);
            let day1Date = day1DateObj.toLocaleDateString("en-US");
            let day1Temp = "Temp: " + (1.8 * (oneCall.daily[1].temp.day - 273) + 32).toFixed(0) + " F°";
            let day1Humi = "Humidity: " + oneCall.daily[1].humidity;
            $("#date1").append(day1Date);
            $("#date1Temp").append(day1Temp);
            $("#date1Humi").append(day1Humi);

            //Day2
            let day2Unix = oneCall.daily[2].dt * 1000;
            let day2DateObj = new Date(day2Unix);
            let day2Date = day2DateObj.toLocaleDateString("en-US");
            let day2Temp = "Temp: " + (1.8 * (oneCall.daily[2].temp.day - 273) + 32).toFixed(0) + " F°";
            let day2Humi = "Humidity: " + oneCall.daily[2].humidity;
            $("#date2").append(day2Date);
            $("#date2Temp").append(day2Temp);
            $("#date2Humi").append(day2Humi);

            //Day 3
            let day3Unix = oneCall.daily[3].dt * 1000;
            let day3DateObj = new Date(day3Unix);
            let day3Date = day3DateObj.toLocaleDateString("en-US");
            let day3Temp = "Temp: " + (1.8 * (oneCall.daily[3].temp.day - 273) + 32).toFixed(0) + " F°";
            let day3Humi = "Humidity: " + oneCall.daily[3].humidity;
            $("#date3").append(day3Date);
            $("#date3Temp").append(day3Temp);
            $("#date3Humi").append(day3Humi);

            //Day 4
            let day4Unix = oneCall.daily[4].dt * 1000;
            let day4DateObj = new Date(day4Unix);
            let day4Date = day4DateObj.toLocaleDateString("en-US");
            let day4Temp = "Temp: " + (1.8 * (oneCall.daily[4].temp.day - 273) + 32).toFixed(0) + " F°";
            let day4Humi = "Humidity: " + oneCall.daily[4].humidity;
            $("#date4").append(day4Date);
            $("#date4Temp").append(day4Temp);
            $("#date4Humi").append(day4Humi);

            //Day 5
            let day5Unix = oneCall.daily[5].dt * 1000;
            let day5DateObj = new Date(day5Unix);
            let day5Date = day5DateObj.toLocaleDateString("en-US");
            let day5Temp = "Temp: " + (1.8 * (oneCall.daily[5].temp.day - 273) + 32).toFixed(0) + " F°";
            let day5Humi = "Humidity: " + oneCall.daily[5].humidity;
            $("#date5").append(day5Date);
            $("#date5Temp").append(day5Temp);
            $("#date5Humi").append(day5Humi);

        })

    }

    $("#searchInput").empty();

    
});
