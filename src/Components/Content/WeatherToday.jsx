const WeatherToday = (currentWeather, city) => {
  console.log(currentWeather);

  return (
    <div className="w-full h-full bg-white/60 rounded-[10px] p-4 flex flex-col justify-between ">
      <div className="flex flex-col xl:flex-row items-center justify-between">
        <div className="text-[28px] 2xl:text-[38px]">{currentWeather.city}</div>
        <div className="flex items-center justify-center h-full">
          {currentWeather && currentWeather.currentWeather ? (
            <img
              className="h-[100px] 2xl:h-[150px]"
              src={`/img/svg/${currentWeather.currentWeather.values.weatherCode}.svg`}
              alt="weather icon"
            />
          ) : (
            <div />
          )}
        </div>

        {currentWeather && currentWeather.currentWeather ? (
          <div className="text-[24px] 2xl:text-[24px] mb-4 xl:mb-0">
            {new Date(currentWeather.currentWeather.time).toLocaleDateString()}
          </div>
        ) : (
          <div />
        )}
      </div>
      {currentWeather && currentWeather.currentWeather ? (
        <div className="flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-0">
          <div className="flex flex-col items-center justify-center">
            <div className="text-[24px] 2xl:text-[28px] font-[400]">temp</div>
            <div className="text-[24px] 2xl:text-[28px] font-[400]">{`${currentWeather.currentWeather.values.temperature} °C`}</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-[24px] 2xl:text-[28px] font-[400]">wind</div>
            <div className="text-[24px] 2xl:text-[28px] font-[400]">{`${currentWeather.currentWeather.values.windSpeed} m/s`}</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-[24px] 2xl:text-[28px] font-[400]">
              humidity
            </div>
            <div className="text-[24px] 2xl:text-[28px] font-[400]">{`${currentWeather.currentWeather.values.humidity} %`}</div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default WeatherToday;
