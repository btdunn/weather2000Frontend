import React from 'react';

export default function WeatherForm(props){
  console.log(props.form)
  return (
    <form onSubmit={props.form}>
      <input type='text' name='city' placeholder='City'/>
      <input type='text' name='country' placeholder='Country'/>
      <button>Show Me The Weather</button>
    </form>
  )
}