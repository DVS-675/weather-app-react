import { useState } from "react";
import { getWeather } from "../../api";

const Main = () => {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState();

  const handleSearch = async () => {
    const responseData = await getWeather(city);

    setCurrentWeather(responseData);
    console.log(currentWeather);
  };
  return (
    <div className="main-block h-full w-full">
      <div className="absolute w-full z-10 pr-10 pl-10">
        <div className="w-full text-center text-white text-[100px] font-[200] mb-4">
          Weather App
        </div>
        <div className="flex items-center justify-center flex-row w-full h-[50px] gap-5 ">
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
