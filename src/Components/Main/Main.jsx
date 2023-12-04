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

  const handleSearch = async () => {
    try {
      const responseData = await getCurrentWeather(city);
      if (responseData) {
        setCurrentWeather(responseData);
      }
    } catch (error) {
      setError(error.message);
    }

    try {
      const responseDataForDays = await getDailyWeather(city);
      if (responseDataForDays) {
        setCurrentWeatherForDays(responseDataForDays.timelines.daily);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    setCurrentCity(city);
  }, [currentWeather]);

  console.log(currentWeatherForDays);

  return (
    <div className="main-block h-full w-full">
      <div className="absolute w-full z-10 pr-10 pl-10">
        <div className="w-full text-center text-white text-[100px] font-[200] mb-4">
          Weather App
        </div>
        <div className="flex items-center justify-center flex-row w-full h-[50px] gap-5 mb-14">
          <input
            className="h-full w-[50vw] text-black outline-none pr-5 pl-5 text-[20px] bg-transparent border-b-[1px] border-black/60 placeholder:text-black/60"
            type="search"
            placeholder="enter the city"
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch} className="button">
            Search
          </button>
        </div>
        {error && (
          <div className="text-red-500 w-full text-center">{error}</div>
        )}
        {currentWeather && (
          <div className=" w-full h-fit flex flex-col items-center justify-start gap-5">
            <div className="w-[500px] h-fit">
              <WeatherToday
                currentWeather={currentWeather?.data}
                city={currentCity}
              />
            </div>
            <div className="flex flex-row items-center justify-center w-full gap-2">
              {currentWeatherForDays &&
                currentWeatherForDays.map((item) => (
                  <div key={item.time} className="w-fit h-fit">
                    <WeatherBox item={item} />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      <div className="block cloud relative pointer-events-none ">
        <img src="/img/cloud-02.png" alt="cloud" className="cloud2" />
        <img src="/img/cloud-04.png" alt="cloud" className="cloud4" />
        <img src="/img/cloud-01.png" alt="cloud" className="cloud1" />
        <img src="/img/cloud-03.png" alt="cloud" className="cloud3" />
      </div>
    </div>
  );
};

export default Main;
