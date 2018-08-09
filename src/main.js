import { WeatherService } from './business.js';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    let weatherService = new WeatherService();  // create instance of WeatherService class
    
      let promise = weatherService.getWeatherByCity(city);  // call the instance method and pass in user input
      promise.then(function(response) {
        let body = JSON.parse(response);
        $('.showHumidity').append(`<li>The humidity in ${city} is ${body.main.humidity}%</li>`);
        $('.showTemp').append(`<li>The temperature in Kelvins is ${body.main.temp} degrees.</li>`);
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
});
