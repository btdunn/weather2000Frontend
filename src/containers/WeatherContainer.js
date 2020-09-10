import React from 'react'

export default function WeatherContainer(props){

  return(
    <div className='wrap'>
      <div className='weather-container'>
        <p className='rainbow'>{'temperature:'} {props.temperature}</p>
        <p className='rainbow'>{'city:'} {props.city}</p>
        <p className='rainbow'>{'country:'} {props.country}</p>
        <p className='rainbow'>{'humidity:'} {props.humidity}</p>
        <p className='rainbow'>{'description:'} {props.description}</p>
      </div>
    </div>
  )
}