import React, { Component } from 'react';
import ZipForm from './ZipForm'

export default class Home extends Component{
    getWeather = (city) => {
        this.props.history.push({
            pathname:'/forecast',
            search:'city=' + city
        })
    }

    render(){
        return (
            <div className="main-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                <h1>Enter a City (and Country Code)</h1>
                <ZipForm onClick={this.getWeather}/>
            </div>
        )
    }
}