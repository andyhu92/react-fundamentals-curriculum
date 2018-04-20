import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/'
const API_KEY = '1d717eff7559e47df82ab982d5ff7ad7'
const PARAMS = `&APPID=${API_KEY}&cnt=5&units=imperial`

export function getWeatherByCity(city){
    return axios.get(`${BASE_URL}weather?q=${city}${PARAMS}`)
} 

export function getForcastByCity(city){
    return axios.get(`${BASE_URL}forecast/daily?q=${city}${PARAMS}`)
}