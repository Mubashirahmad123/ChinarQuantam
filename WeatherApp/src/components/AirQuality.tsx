import React from 'react';
import { WiSmoke, WiCloud, WiRain, WiFog, WiDaySunny, WiDayCloudy, WiCloudy, WiThunderstorm, WiTornado } from 'react-icons/wi';

interface AirQualityProps {
  data: {
    aqi: number;
  };
}

const AirQuality: React.FC<AirQualityProps> = ({ data }) => {
  let qualityIcon;
  let qualityText = '';

  if (data.aqi >= 0 && data.aqi <= 50) {
    qualityIcon = <WiDaySunny className="text-4xl text-green-500" />;
    qualityText = 'Good';
  } else if (data.aqi >= 51 && data.aqi <= 100) {
    qualityIcon = <WiDayCloudy className="text-4xl text-yellow-500" />;
    qualityText = 'Moderate';
  } else if (data.aqi >= 101 && data.aqi <= 150) {
    qualityIcon = <WiCloudy className="text-4xl text-orange-500" />;
    qualityText = 'Unhealthy for Sensitive Groups';
  } else if (data.aqi >= 151 && data.aqi <= 200) {
    qualityIcon = <WiRain className="text-4xl text-red-500" />;
    qualityText = 'Unhealthy';
  } else if (data.aqi >= 201 && data.aqi <= 300) {
    qualityIcon = <WiThunderstorm className="text-4xl text-purple-500" />;
    qualityText = 'Very Unhealthy';
  } else if (data.aqi > 300) {
    qualityIcon = <WiTornado className="text-4xl text-gray-900" />;
    qualityText = 'Hazardous';
  }

  return (
    <div className="mb-4">
      <h3 className="text-lg">Air Quality</h3>
      <div className="flex items-center">
        {qualityIcon}
        <p className="ml-2">AQI (Air Quality Index): {data.aqi} ({qualityText})</p>
      </div>
    </div>
  );
};

export default AirQuality;
