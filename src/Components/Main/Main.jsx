import { useEffect, useState } from "react";
import { getCurrentWeather, getDailyWeather } from "../../api";
import WeatherToday from "../Content/WeatherToday";
import WeatherBox from "../Content/WeatherBox";

const Main = () => {
  const [city, setCity] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [currentWeatherForDays, setCurrentWeatherForDays] = useState();
  const [currentCity, setCurrentCity] = useState();
  const [error, setError] = useState();
  const [weatherArray, setWeatherArray] = useState([]);

  const handleSearch = async () => {
    try {
      const responseData = await getCurrentWeather(city);
      if (responseData) {
        setCurrentWeather(responseData);
        setError("");
      }
    } catch (error) {
      setError(error.message);
      setCurrentWeather("");
    }

    try {
      const responseDataForDays = await getDailyWeather(city);
      if (responseDataForDays) {
        setCurrentWeatherForDays(responseDataForDays.timelines.daily);
        setError("");
      }
    } catch (error) {
      setError(error.message);
      setCurrentWeatherForDays("");
    }
  };

  useEffect(() => {
    setCurrentCity(city);
  }, [currentWeather]);

  useEffect(() => {
    if (currentWeatherForDays && currentWeatherForDays.length) {
      setWeatherArray(currentWeatherForDays.slice(-5));
    }
  }, [currentWeatherForDays]);

  console.log(weatherArray);

  return (
    <div className="main-block h-full w-full relative pb-16">
      <div className=" cloud absolute pointer-events-none h-full">
        <img src="/img/cloud-02.png" alt="cloud" className="cloud2" />
        <img src="/img/cloud-04.png" alt="cloud" className="cloud4" />
        <img src="/img/cloud-01.png" alt="cloud" className="cloud1" />
        <img src="/img/cloud-03.png" alt="cloud" className="cloud3" />
      </div>
      <div className="relative w-full pr-4 pl-4 xl:pr-10 xl:pl-10">
        <div className="w-full text-center text-white text-[50px] xl:text-[80px] font-[200] mb-2">
          Weather App
        </div>
        <div className="flex items-center justify-center flex-row w-full h-[50px] gap-5 mb-8 relative">
          <input
            className="h-full xl:w-[50vw] text-black outline-none xl:pr-5 xl:pl-5 text-[20px] bg-transparent border-b-[1px] border-black/60 placeholder:text-black/60"
            type="search"
            placeholder="enter the city"
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch} className="button">
            Search
          </button>
        </div>
        {error && <div className="text-red-500 text-center">{error}</div>}
        {currentWeather && (
          <div className=" w-full h-fit flex flex-col items-center justify-start gap-5">
            <div className="w-full md:w-[500px] h-fit">
              <WeatherToday
                currentWeather={currentWeather?.data}
                city={currentCity}
              />
            </div>
            <div className="grid grid-cols-6 2xl:grid-cols-5 w-full gap-2">
              {weatherArray &&
                weatherArray.length &&
                weatherArray.map((item) => (
                  <div
                    key={item.time}
                    className="col-span-6 sm:col-span-3 lg:col-span-2 2xl:col-span-1 h-fit"
                  >
                    <WeatherBox item={item} />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      
    </div>
  );
};

export default Main;
