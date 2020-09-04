import React, { Component } from 'react';
import Character from './Character'
import JsBox from './JsBox'
import "../App.css";


export class BoxContainer extends Component { 
    render(){
    return (
        <div className="BoxContainer">
            {this.props.index == this.props.tile ? <Character move={this.props.movement} /> : null}
            {this.props.getBox == true && this.props.index!=this.props.tile ? <JsBox /> : null}
        </div>
    ) 
    }
}

export default BoxContainer
