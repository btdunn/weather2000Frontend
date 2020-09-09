import React, { useState } from 'react';
import WeatherContainer from './WeatherContainer'
import WeatherForm from '../components/WeatherForm'


export default function WeatherPage (){

  const [weather, setWeather] = useState({
    temperature: 60,
    city: 'Denver',
    country: 'USA',
    humidity: '60%',
    description: 'Mild',
    error: undefined,
  })

  const getWeather = async (event) => {
    event.preventDefault()
    const city = event.target.elements.city.value
    const country = event.target.elements.country.value

  }


  return (
    <div>
      <WeatherForm form={getWeather} />
      <WeatherContainer
          temperature={weather.temperature}
          city={weather.city}
          country={weather.country}
          humidity={weather.humidity}
          description={weather.description}
          error={weather.error}
      />
    </div>
  )
}