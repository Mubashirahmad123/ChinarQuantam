import React from 'react';
import WeatherForDay from './WeatherForDay';

interface ForecastData {
  list: Array<{
    main: {
      temp: number;
    };
    weather: Array<{
      description: string;
      icon: string;
    }>;
    dt_txt: string;
    iconCode: string;
  }>;
}

interface WeatherForecastProps {
  data: ForecastData | null;
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ data }) => {
  if (!data) return null;

  const next10DaysForecast = data.list.slice(1, 11);

  return (
    <div className="weather-forecast-container mt-8 mb-4 w-1/2 border border-black rounded-md shadow-md p-2 bg-white">
      <h3 className="text-md font-regular mb-4">10-Day Weather Forecast</h3>
      <div className="divider mb-4 border-b border-black"></div>
      {next10DaysForecast.map((forecast, index) => (
        <div className="forecast-item mb-4 font-regular text-lg text-center justify-center items-center" key={index}>
          <WeatherForDay 
            key={index}
            data={{
              temperature: `${forecast.main.temp}`,
              description: forecast.weather[0].description,
              date: forecast.dt_txt.split(' ')[0],
              iconCode: forecast.weather[0].icon
            }}
          />
          <div className="divider my-2 border-b border-black"></div>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
