import React from 'react'
import ZipForm from './ZipForm'
import { Link, withRouter } from 'react-router-dom' 

const styles = {
    titleDiv:{
        width:'70%'
    },
    formDiv:{
        width:'30%',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end'
    }
}

function Header({ title, history }) {
    function getWeather(city){
        history.push({
            pathname:'/forecast',
            search:'city=' + city
        })
    }

    return (
        <header>
            <div style={styles.titleDiv}>
                <Link to='/' style={{textDecoration:'none', color:'white'}}>
                    <h1>{title}</h1>
                </Link>
            </div>
            <div style={styles.formDiv}>
                <ZipForm onClick={getWeather}/>
            </div>
        </header>
    )
}

export default withRouter(Header)