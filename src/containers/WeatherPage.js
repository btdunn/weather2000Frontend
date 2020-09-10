import React, { useState, useEffect } from 'react';
import WeatherContainer from './WeatherContainer'
import WeatherForm from '../components/WeatherForm'


export default function WeatherPage (){

  const [weather, setWeather] = useState([])

  const [userLocation, setUserLocation] = useState([])

  const clickHandler = (event) => {
    event.preventDefault()
    const userCity = event.target.elements.city.value
    search(userCity, weather)
  }
  
  useEffect(() => {
    fetch('http://localhost:9000/')
      .then(response => response.json())
      .then(weather => {
        setWeather(weather.weather)
      }).catch(error => console.error(error.message))
  }, [])

  const search = (userCity, weather) => {
    for (let i=0; i < weather.length; i++){
      if (weather[i].city === userCity) {
        return setUserLocation(weather[i])
      }
    }
  }

  return (
    <div>
      <header>
        <img src='https://s3.amazonaws.com/word-art/5f5a7f20f3acbb532895e284.png'></img>
      </header>
      <marquee className='rainbow'>{'~*~*enter your city and country to see the damn weather bro*~*~'}</marquee>
      <WeatherForm form= {clickHandler} />
      <WeatherContainer
          temperature={userLocation.temperature}
          city={userLocation.city}
          country={userLocation.country}
          humidity={userLocation.humidity}
          description={userLocation.description}
          error={userLocation.error}
      />
    </div>
  )
}