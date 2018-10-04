import axios from 'axios';

const API_KEY = '78486177fd5653e7d271922b75036f95';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const rootUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeatherData(city) {
  const urlString = `${rootUrl}&q=${city},US`
  const request = axios.get(urlString);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
