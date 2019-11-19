import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

class Task extends Component {

    styleCompleted(){
        return {
            fontSize: '18px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' :'none'
        }
    }
    render() {
        // Propiedad Destructuting de Javascript para extraer datos de una propiedad props
        const {task} = this.props;

        //Stylus
        //const background = {background:'#b9b9b9'}

        return <p className="" style={this.styleCompleted()} >
            {task.title} -- 
            {task.description} -- 
            {task.done} --  
            {task.id}
            <input type="checkbox"></input>
            <button style={btnDelete} >x</button>
        </p>
    }    
}

Task.propTypes = {
    task:PropTypes.object.isRequired
}


const btnDelete = {
    fontSize : '18px',
    background: 'red',
    color:'#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;