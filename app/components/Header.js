import React from 'react'
import ZipForm from './ZipForm'

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

export default function Header({ title }) {
    return (
        <header>
            <div style={styles.titleDiv}>
                <h1>{title}</h1>
            </div>
            <div style={styles.formDiv}>
                <ZipForm/>
            </div>
        </header>
    )
}