import "./current-weather.css"
import React from 'react'

export const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <div>

          <p className="city">{data.city}</p>
          <p className="weather-description">
            {data.weather[0].description }
          </p>
        </div>
        <img src={`icons/${data.weather[0].icon}.png`} alt="" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temperature">{`${Math.round(data.main.temp)}`}°C</p>
        <div className="details">
          <div className="paramter-row">
            <span className="parameter-label">details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">22°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">6km/h</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">60%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">25%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
