import React from 'react'

export default function WeatherContainer(props){

  return(
    <div className='weatherContainer'>
      <p>{props.temperature}</p>
      <p>{props.city}</p>
      <p>{props.country}</p>
      <p>{props.humidity}</p>
      <p>{props.description}</p>
    </div>
  )
}