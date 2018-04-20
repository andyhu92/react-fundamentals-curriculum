import React, { Component } from 'react';
import PropTypes from 'prop-types'

var styles = {
    content: {
        textAlign: 'center',
        fontSize:'35px'
    }
}

class Loading extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: props.text
        }
    }

    componentDidMount(){
        var stopper = this.props.text + "...";
        this.interval = setInterval(function(){
            this.setState(function(prevState){
                if(prevState.text === stopper){
                    return {
                        text: this.props.text
                    }
                }else{
                    return {
                        text: prevState.text + "."
                    }
                }
            })
        }.bind(this), this.props.speed);
    }

    componentWillUnmount(){
        window.clearInterval(this.interval);
    }
    
    render() {
        return (
            <p style={styles.content}>
                {this.state.text}
            </p>
        )
    }
}

Loading.propTypes = {
    text:PropTypes.string.isRequired,
    speed:PropTypes.number.isRequired
}

Loading.defaultProps = {
    text: 'Loading',
    speed:200
}

export default Loading;

