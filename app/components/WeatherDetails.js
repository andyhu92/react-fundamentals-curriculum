import React, { Component } from 'react';
import { toCelsius } from '../utils/helper'


export default function WeatherDetails(props){
    let city = props.match.params.city;
    let weather = props.location.state.weather;
    return (
        <div className="text-center">
            <img src={`/app/images/weather-icons/${weather.weather[0].icon}.svg`} style={{width:80,height:80}}/>
            <h3>{(new Date(weather.dt * 1000)).toDateString()}</h3>

            <h3>{city}</h3>
            <h3>{weather.weather[0].description}</h3>
            <h3>Min temp: {weather.temp.min}&#8457; / {toCelsius(weather.temp.min)}&#8451;</h3>
            <h3>Max temp: {weather.temp.max}&#8457; / {toCelsius(weather.temp.max)}&#8451;</h3>
            <h3>Humidity: {weather.humidity}</h3>

            <button className="zip-button" onClick={props.history.goBack}>
                GO BACK
            </button>
        </div>
    )
}