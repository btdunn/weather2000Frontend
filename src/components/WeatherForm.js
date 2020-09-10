import React from 'react';

export default function WeatherForm(props){
  return (
    <form onSubmit={props.form} className='form'>
      <input type='text' name='city' placeholder='City'/>
      <input type='text' name='country' placeholder='Country'/>
      <button className='rainbow'>Show Me The Weather</button>
    </form>
  )
}