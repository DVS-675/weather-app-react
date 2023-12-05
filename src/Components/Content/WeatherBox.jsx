const WeatherBox = (item) => {
  console.log(item.item.values);
  return (
    <div className="w-full h-full bg-white/60 rounded-[10px] flex flex-col items-center justify-start p-6">
      <div className="text-[24px] w-full text-end">
        {new Date(item?.item?.time).toLocaleDateString()}
      </div>

      <div className="flex items-center justify-center h-full">
        <img
          className="h-[100px]"
          src={`/img/svg/${item?.item?.values.weatherCodeMax}.svg`}
          alt="weather icon"
        />
    
      </div>
      {item && item.item ? (
        <div className="w-full flex flex-col items-start justify-center">
          <div className="flex flex-row items-start justify-between gap-2 w-full">
            <div className="text-[24px] 2xl:text-[24px] font-[400]">temp</div>
            <div className="text-[24px] 2xl:text-[24px] font-[400]">{`${item.item.values.temperatureAvg} °C`}</div>
         
          </div>
          <div className="flex flex-row items-start justify-between gap-2 w-full">
            <div className="text-[24px] 2xl:text-[24px] font-[400]">wind</div>
            <div className="text-[24px] 2xl:text-[24px] font-[400]">{`${item.item.values.windSpeedAvg} m/s`}</div>
            
          </div>
          <div className="flex flex-row items-start justify-between gap-2 w-full">
            <div className="text-[24px] 2xl:text-[24px] font-[400]">
              humidity
            </div>
            <div className="text-[24px] 2xl:text-[24px] font-[400]">{`${item.item.values.humidityAvg} %`}</div>
            
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default WeatherBox;
