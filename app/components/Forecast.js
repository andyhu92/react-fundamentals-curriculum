import React, { Component } from 'react';
import Loading from './Loading'
import { getWeatherByCity, getForcastByCity } from '../utils/api'
import queryString from 'query-string'

export default class Forecast extends Component{
    state = {
        loading: true
    }

    async componentDidMount(){
        let city = queryString.parse(this.props.location.search).city;
        let res = await getForcastByCity(city);
        console.log(res);
        this.setState({loading: false})
    }

    render() {
        return (
           this.state.loading ? <Loading/> : <h1>Forecast</h1>
        )
    }
}