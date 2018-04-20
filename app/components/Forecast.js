import React, { Component } from 'react';
import Loading from './Loading'
import { getWeatherByCity, getForcastByCity } from '../utils/api'
import queryString from 'query-string'

function WeatherInfo({ icon, date, onClick }){
    return (
        <div style={{cursor:'pointer'}} onClick={onClick}>
            <img src={`/app/images/weather-icons/${icon}.svg`} style={{width:50, height:50}}/>
            <p>{date.toDateString()}</p>
        </div>
    )
}

function WeatherInfoContainer({ children }){
    let style = {
        display:'flex',
        justifyContent:'space-around',
        marginTop:50,
    }
    return (
        <section style={style}>
            { children }
        </section>
    )
}

export default class Forecast extends Component{
    state = {
        loading: true,
        city:"",
        error:"",
        weathers:[]
    }

    async componentDidMount(){
        let city = queryString.parse(this.props.location.search).city;
        try{
            let res = await getForcastByCity(city).then(res => res.data);
            this.setState(
                {
                    loading: false, 
                    city: res.city.name + "," + res.city.country,
                    weathers: res.list})
        }catch(e){
            this.setState({
                error:"City not found!",
                loading:false
            })
        }
    }

    goToWeatherDetails = (weather) => {
        console.log(weather)
        let city = queryString.parse(this.props.location.search).city;
        this.props.history.push({
            pathname:"/details/" + city,
            state:{
                weather
            }
        })
    }

    render() {
        let { loading, city, weathers, error } = this.state;
        if(error) return <div className="text-center"><h1>{error}</h1></div>
        return (
           loading ? <Loading/> : (
               <div className="text-center">
                    <h1>{ city }</h1>
                    <WeatherInfoContainer>
                        {weathers.map((weather,i) => <WeatherInfo 
                        key={i}
                        onClick={(e) => this.goToWeatherDetails(weather)}
                        date={new Date(weather.dt*1000)}  
                        icon={weather.weather[0].icon}/>)}
                    </WeatherInfoContainer>
               </div>
           )
        )
    }
}