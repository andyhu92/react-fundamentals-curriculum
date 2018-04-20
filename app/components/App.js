import React, { Component } from 'react';
import Header from './Header'
import ZipForm from './ZipForm'

export default class App extends Component{
    render(){
        return (
            <div className="container">
                <Header title="My Weather App">
                </Header>
                <div className="main-container" style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                    <h1>Enter a City and State</h1>
                    <ZipForm />
                </div>
            </div>
        )
    }
}