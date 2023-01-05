import './App.css'

import Search from './components/search/Search'
import { CurrentWeather } from './components/current-weather/CurrentWeather'; 
import {  WEATHER_API_URL } from './api';
import { WEATHER_API_KEY } from './api';
import { useState } from 'react';
function App(){
  const [currentWeather, setcurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange =(searchData)=>{
const [lat,lon]=searchData.value.split("");
const currentWeather=fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
const forecastFetch=fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)



Promise.all([currentWeather, forecastFetch])
.then(async (response)=>{
  const weatherResponse=await response[0].json();
  const forecastResponse= await response[1].json();

setcurrentWeather({ city:searchData.label, ...weatherResponse});
  setForecast({ city:searchData.label, ...forecastResponse});

})
.catch((err)=>console.log(err));


  }

  console.log(currentWeather);
  console.log(forecast);


  return (
    <div className="container">
    <Search onSearchChange={handleOnSearchChange}/>
    { currentWeather && <CurrentWeather data={currentWeather}/>}
     
      
     
    </div>
  );
}


export default App
