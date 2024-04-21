import React from 'react';
import { WiHumidity, WiDayFog, WiBarometer, WiStrongWind,  WiThermometer } from 'react-icons/wi';
import { GiSpeedometer } from "react-icons/gi";


interface WeatherDetailsProps {
  data: {
    humidity: number;
    location:string
    visibility: number;
    pressure: number;
    wind: {
      speed: number;
      deg: number;
    };
    uvIndex: string;
    dewPoint: number;
  };
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ data }) => {
  return (
    <div className="weather-details-container mx-auto mt-8 p-6 w-1/2 border border-black rounded-md shadow-xl text-center bg-white">
      <div className="weather-details text-md font-regular mb-1 text-left">Weather details for <b>{data.location}</b></div>
      <div className="divider mb-4 border-b border-black"></div>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="weather-detail-item border-b p-4 rounded-md shadow-md">
          <WiHumidity className="mr-2 inline text-2xl text-blue-500" />
          <p>Humidity: <span className="font-bold">{data.humidity}%</span></p>
        </div>
        <div className="weather-detail-item border-b p-4 rounded-md shadow-md">
          <WiDayFog className="mr-2 inline text-2xl text-blue-500" />
          <p>Visibility: <span className="font-bold">{data.visibility} meters</span></p>
        </div>
        <div className="weather-detail-item border-b p-4 rounded-md shadow-md">
          <WiBarometer className="mr-2 inline text-2xl text-blue-500" />
          <p>Pressure: <span className="font-bold">{data.pressure} hPa</span></p>
        </div>
        <div className="weather-detail-item border-b p-4 rounded-md shadow-md">
          <WiStrongWind className="mr-2 inline text-2xl text-blue-500" />
          <p>Wind Speed: <span className="font-bold">{data.wind.speed} m/s</span></p>
        </div>
        <div className="weather-detail-item border-b p-4 rounded-md shadow-md">
          <GiSpeedometer className="mr-2 inline text-2xl text-blue-500" />
          <p>Wind Direction: <span className="font-bold">{data.wind.deg}°</span></p>
        </div>
        <div className="weather-detail-item p-4 rounded-md shadow-md">
          <WiThermometer className="mr-2 inline text-2xl text-blue-500" />
          <p>Dew Point: <span className="font-bold">{data.dewPoint}°C</span></p>
        </div>
        
      </div>
    </div>
  );
};

export default WeatherDetails;
