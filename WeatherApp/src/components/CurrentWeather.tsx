import React from 'react';

interface CurrentWeatherProps {
  data: {
    temperature: string;
    description: string;
    location: string;
    iconCode: string;
  };
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data }) => {
  const iconUrl = `http://openweathermap.org/img/w/${data.iconCode}.png`;

  return (
    <div className="current-weather-container mx-auto mt-6 p-4 w-1/3  rounded-md  border border-black shadow-md   bg-white">
      <div className="text-sm font-regular mb-2 ">Current Weather</div>
      <div className="divider mb-2 border-b border-black"></div>
      <div className="mb-4 flex items-center justify-center">
        <img src={iconUrl} alt={data.description} className="mr-8 w-28 h-28 " />
        <div>
          <h2 className="text-2xl font-bold ">{data.location}</h2>
          <div className="divider my-2 border-b border-black"></div>

          <p className="text-xl font-semibold">{data.temperature}°C</p>
          <div className="divider my-2 border-b border-black"></div>
          <p><b>{data.description}</b></p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
