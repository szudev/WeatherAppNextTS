// Forecast Weather API:
export const weatherUrl =
  "https://weatherapi-com.p.rapidapi.com/forecast.json?q=";

// Search/Autocomplete API:
export const searchWeatherUrl =
  "https://weatherapi-com.p.rapidapi.com/search.json?q=";

export const fetchOption = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": process.env.RAPIDAPI_WEATHER_API_HOST,
    "X-RapidAPI-Key": process.env.RAPIDAPI_WEATHER_API_KEY,
  },
};
