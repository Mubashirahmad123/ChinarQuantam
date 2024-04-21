import React from 'react';

interface WeatherForDayProps {
  data: {
    temperature: string;
    description: string;
    date: string;
    iconCode: string;
  };
}

const WeatherForDay: React.FC<WeatherForDayProps> = ({ data }) => {
  const iconUrl = `http://openweathermap.org/img/w/${data.iconCode}.png`;

  return (
    <div className="weather-for-day-container mb-4  bg-white">
      <h4 className="text-md">{data.date}</h4>
      <img src={iconUrl} alt={data.description} className="w-12 h-12" />
      <p>Temperature: {data.temperature}°C</p>
      <p>Weather: {data.description}</p>
    </div>
  );
};

export default WeatherForDay;
