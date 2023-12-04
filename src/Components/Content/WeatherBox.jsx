const WeatherBox = (item) => {
  console.log(item.item.values);
  return (
    <div className="w-full h-full bg-white rounded-[10px] flex flex-col items-center justify-start p-2">
      <div className="text-[24px]">
        {new Date(item?.item?.time).toLocaleDateString()}
      </div>

      <div className="flex items-center justify-center h-full">
        <img
          className="h-[50px]"
          src={`/img/svg/${item?.item?.values.weatherCode}.svg`}
          alt="weather icon"
        />
      </div>
      {item.item && item.item.values ? (
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="text-[24px] 2xl:text-[24px] font-[400]">temp</div>
            <div className="text-[24px] 2xl:text-[24px] font-[400]">{`${item?.item?.values.temperature} °C`}</div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="text-[24px] 2xl:text-[24px] font-[400]">wind</div>
            <div className="text-[24px] 2xl:text-[24px] font-[400]">{`${item?.item?.values.windSpeed} m/s`}</div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="text-[24px] 2xl:text-[24px] font-[400]">
              humidity
            </div>
            <div className="text-[24px] 2xl:text-[24px] font-[400]">{`${item?.item?.values.humidity} %`}</div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default WeatherBox;
