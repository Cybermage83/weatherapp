const fetchWeather = cityName => {
  const API_KEY = "60e69ba35ecd55255b8e5c7ecb4b5047";
  // TODO: fetch weather forecast from endpoint
  // from https://openweathermap.org/api

  return fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityName}&appid=${API_KEY}`)
};
