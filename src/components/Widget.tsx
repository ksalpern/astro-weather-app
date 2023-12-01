export default function Widget({ weather }) {
  console.log(weather, "weather");
  return (
    <div className="bg-[#5936B4] flex p-4 rounded-lg">
      <div className="container mx-auto py-8">
        <p className="text-6xl mb-6">
          {Math.round(weather.main.temp - 273.15)}°
        </p>
        <h2 className="text-xl">{weather.name}, Ukraine</h2>
      </div>
      <div className="flex flex-col items-end">
        {/* <div
          className={`w-40 h-40 bg-[url('http://openweathermap.org/img/w/${weather.weather[0].icon}.png')] bg-no-repeat bg-center bg-contain`}
        ></div> */}
        <div className="w-40 h-40 bg-cloud-wind bg-no-repeat bg-center bg-contain"></div>
        {/* <img
          src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
          alt=""
        /> */}
        <p className="text-sm">{weather.weather[0].main}</p>
      </div>
    </div>
  );
}
