import React, { Component } from 'react';
import Header from './Header'

export default class App extends Component{
    render(){
        return (
            <div className="container">
                <Header title="Main.js Header"/>
                <div className="main-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                    <h1>Enter a City and State</h1>
                    <input/>
                    <button>Get Weather</button>
                </div>
            </div>
        )
    }
}