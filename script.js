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
                console.log(data);
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

// window.addEventListener('load', weather2)

// function weather2() {
//     let latitude;
//     let longitude;
//     if (navigator.geolocation){
//         navigator.geolocation.getCurrentPosition( function(position) {
           
//             latitude = position.coords.latitude
//             longitude = position.coords.longitude
            
            
            

//             let api2 =`https:api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}`
//             fetch(api2)
//             .then(function(data) {
//                 return data.json()
//             })
//             .then(data => {
//                 console.log(data);
                // data.main.temp
                // data.name

                // console.log(`${data.lat} + ${data.lon}`);
                // console.log(`Actual temp: ${Math.floor(data.current.temp-kelvin)}°C`);
                // console.log(`feels like temp: ${Math.floor(data.current.feels_like-kelvin)}°C`);
                // console.log(`${data.current.humidity}%`);
                // console.log(`${data.timezone}`);
                // // console.log(`${data.sys.id}`);
                // console.log(`${data.current.weather[0].description}`);
                // // adding elements to the dom
                // description.innerText = `${data.current.weather[0].description}`

//                 })
//         })
       

//     } 
// }

//after page loads we get the location




