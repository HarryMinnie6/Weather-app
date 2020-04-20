//after page loads we get the location
window.addEventListener('load', weather)

//variables used by both weather forecasts
let kelvin = 273.15
let key = 'e6f4095da8d7d8b43509c4fd21cd3b4c'

//DOM variables for single day forcast
let place = document.querySelector('.location')
let icon = document.querySelector('.icon')
let description = document.querySelector('.weather-description')
let currentTemp = document.querySelector('.current-temp')
let feelsLikeTemp = document.querySelector('.feels-like-temp')
let minTemp = document.querySelector('.min-temp')
let maxTemp = document.querySelector('.max-temp')

//if the users browser does not support geolocation
if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(weather, errorMessage )
} else {
    description.innerHTML = "Browser does not support GeoLocation"
}
function errorMessage(){
    description.innerHTML = 'Please turn on location '
}

//getting the weather from the API
function weather() {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition( function(position) {
           
            let latitude = position.coords.latitude
            let longitude = position.coords.longitude
                     
            let api1 =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
            fetch(api1)
            .then(function(getApi) {
                let data =getApi.json()
                return data
            })
            .then(function(data) {
                // console.log(data);
                place.innerText = data.name
                icon.innerHTML = `<img src="weather-symbols/${data.weather[0].icon}.png"/>`
                description.innerText = `${data.weather[0].description}` 
                currentTemp.innerText = `${Math.floor(data.main.temp-kelvin)}°C`
                feelsLikeTemp.innerText = `feels like: ${Math.floor(data.main.feels_like-kelvin)}°C`
                minTemp.innerText = `${Math.floor(data.main.temp_min-kelvin)}°C`
                maxTemp.innerText = `${Math.floor(data.main.temp_max-kelvin)}°C`                                    
            })           
        })
    } 
}

// let place2 = document.querySelector('.location')
let day1 = document.querySelector('.day1')
let icon1 = document.querySelector('.icon-day1')
let minTemp1 = document.querySelector('.min-temp-day1')
let maxTemp1 = document.querySelector('.max-temp-day1')

let day2 = document.querySelector('.day2')
let icon2 = document.querySelector('.icon-day2')
let minTemp2 = document.querySelector('.min-temp-day2')
let maxTemp2 = document.querySelector('.max-temp-day2')

let icon3 = document.querySelector('.icon-day3')
let minTemp3 = document.querySelector('.min-temp-day3')
let maxTemp3 = document.querySelector('.max-temp-day3')

let icon4 = document.querySelector('.icon-day4')
let minTemp4 = document.querySelector('.min-temp-day4')
let maxTemp4 = document.querySelector('.max-temp-day4')

window.addEventListener('load', weather2)

function weather2() {
    let latitude;
    let longitude;
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition( function(position) {
           
            latitude = position.coords.latitude
            longitude = position.coords.longitude
            
            let api2 =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}`
            fetch(api2)
            .then(function(data) {
                return data.json()
            })
            .then(data => {
                console.log(data);
                console.log();
                              
            console.log(`${data.current.weather[0].description}`);
            console.log(`tomorrow min: ${Math.floor(data.daily[1].temp.min-kelvin)}`);
            console.log(`tomorrow max: ${Math.floor(data.daily[1].temp.max-kelvin)}`);
            console.log(`tomorrow icon: ${data.daily[1].weather[0].icon}`);
            console.log(`dt: ${data.daily[1].dt}`);

                    
            

    
            icon1.innerHTML = `<img class='forecast-img' src="weather-symbols/${data.daily[1].weather[0].icon}.png"/>`
            minTemp1.innerText = `${Math.floor(data.daily[1].temp.min-kelvin)}°C`
            maxTemp1.innerText = `${Math.floor(data.daily[1].temp.max-kelvin)}°C`

            
           
            icon2.innerHTML = `<img class='forecast-img' src="weather-symbols/${data.daily[2].weather[0].icon}.png"/>`
            minTemp2.innerText = `${Math.floor(data.daily[2].temp.min-kelvin)}°C`
            maxTemp2.innerText = `${Math.floor(data.daily[2].temp.max-kelvin)}°C`

            icon3.innerHTML = `<img class='forecast-img' src="weather-symbols/${data.daily[3].weather[0].icon}.png"/>`
            minTemp3.innerText = `${Math.floor(data.daily[3].temp.min-kelvin)}°C`
            maxTemp3.innerText = `${Math.floor(data.daily[3].temp.max-kelvin)}°C`

            icon4.innerHTML = `<img class='forecast-img' src="weather-symbols/${data.daily[4].weather[0].icon}.png"/>`
            minTemp4.innerText = `${Math.floor(data.daily[4].temp.min-kelvin)}°C`
            maxTemp4.innerText = `${Math.floor(data.daily[4].temp.max-kelvin)}°C`
             
                

                })
        })
       

    } 
}






