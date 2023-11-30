export function getWeather(city) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&cnt=5&units=metric&appid=3d9de74844d28377e81415151cbe6a66`,
    {
      method: "GET",
    }
  ).then((response) => {
    return response.json();
  });
}
