import React, { Component } from 'react'
import './Tour.scss'
export default class Tour extends Component {
    render() {
        return (
            <article className='tour'>
                <div className="img-container">
                    <img width='200px' src='/logo512.png' alt=""/>
                    <span className="close-btn">
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>city</h3>
                    <h3>name</h3>
                    <h5>info <span> <i className="fas fa-caret-square-down"></i> </span></h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, laboriosam?</p>
                </div>
            </article>
        )
    }
}
