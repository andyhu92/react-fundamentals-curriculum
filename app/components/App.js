import React, { Component } from 'react';
import Header from './Header'
import Home from './Home'
import Forecast from './Forecast'
import { getWeatherByCity, getForcastByCity } from '../utils/api'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends Component{
    componentDidMount(){
        //getForcastByCity("arlington").then(console.log)
    }


    render(){
        return (
            <Router>
                <div className="container">
                    <Header title="My Weather App">
                    </Header>
                    <Route path="/" exact component={Home}/>
                    <Route path="/forecast" exact component={Forecast}/>
                </div>
            </Router>
            
        )
    }
}