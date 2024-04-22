import React, { useState } from 'react';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import WeatherDetails from './components/weatherDetails';
import WeatherForecast from './components/WeatherForecast';
import NavBar from './components/Navbar';
import './index.css';

interface WeatherData {
  temperature: string;
  description: string;
  location: string;
  humidity: number;
  visibility: number;
  pressure: number;
  wind: {
    speed: number;
    deg: number;
  };
  uvIndex: string;
  dewPoint: number;
  coord: {
    lat: number;
    lon: number;
  };
  iconCode: string;
}

interface Data {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  name: string;
  wind: {
    speed: number;
    deg: number;
  };
  visibility: number;
  coord: {
    lat: number;
    lon: number;
  };
  uvIndex: string;
}

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

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);

  const fetchWeatherData = async (city: string) => {
    const API_KEY = '4adf09fce94542d76e2ebdef99eb97d8';
    const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      const [currentWeatherResponse, forecastResponse] = await Promise.all([
        fetch(CURRENT_WEATHER_URL),
        fetch(FORECAST_URL)
      ]);

      if (!currentWeatherResponse.ok || !forecastResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const currentWeatherData: Data = await currentWeatherResponse.json();
      const forecastData: ForecastData = await forecastResponse.json();

      setWeatherData(mapWeatherData(currentWeatherData));
      setForecastData(mapForecastData(forecastData));
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error and possibly show a user-friendly message
    }
  };

  const mapWeatherData = (data: Data): WeatherData => {
    const { main, weather, name, wind, visibility, coord, uvIndex } = data;

    return {
      temperature: `${main.temp}`,
      description: weather[0].description,
      location: name,
      humidity: main.humidity,
      visibility: visibility,
      pressure: main.pressure,
      uvIndex: uvIndex,
      wind: {
        speed: wind.speed,
        deg: wind.deg
      },
      dewPoint: main.temp,
      coord: {
        lat: coord.lat,
        lon: coord.lon
      },
      iconCode: weather[0].icon
    };
  };

  const mapForecastData = (data: ForecastData): ForecastData => ({
    list: data.list.map((item) => ({
      main: {
        temp: item.main.temp
      },
      weather: item.weather,
      dt_txt: item.dt_txt,
      iconCode: item.weather[0].icon
    }))
  });

  return (
    <div className="container mx-auto p-4">
      <NavBar />
      <Search onSearch={fetchWeatherData} />
      {weatherData && (
        <>
          <CurrentWeather data={weatherData} />
          <WeatherDetails data={weatherData} />
          <WeatherForecast data={forecastData} />
        </>
      )}
    </div>
  );
};

export default App;
