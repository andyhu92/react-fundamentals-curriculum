import React, { Component } from 'react';

export default class ZipForm extends Component{
    state = {
        city:""
    }

    handleChange = (e) => {
        let city = e.target.value;
        this.setState({
            city
        })
    }

    handleClick = () => {
        this.props.onClick(this.state.city);
    }

    render(){
        return (
            <div>
                <input type='text'
                        placeholder='Arlington, US'
                        className='zip-input'
                        value={this.state.city}
                        onChange={this.handleChange}
                        />
                <button className='zip-button'
                    onClick={this.handleClick}
                >Get Weather</button>
            </div>
        )
    }
}