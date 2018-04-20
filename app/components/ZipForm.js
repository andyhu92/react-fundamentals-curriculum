import React, { Component } from 'react';

export default class ZipForm extends Component{
    render(){
        return (
            <div>
                <input type='text'
                        placeholder='Arlington, VA'
                        className='zip-input'/>
                <button className='zip-button'>Get Weather</button>
            </div>
        )
    }
}