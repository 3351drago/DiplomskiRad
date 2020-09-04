import React, { Component } from 'react'
import '../App.css'

export default class FunctionBoard extends Component {
    render() {
        return (
            <div className="function-board">
                <h3>Functions:</h3>
                <ul>
                    <li>moveRight()</li>
                    <li>moveLeft()</li>
                    <li>moveUp()</li>
                    <li>moveDown()</li>
                </ul>
            </div>
        )
    }
}
