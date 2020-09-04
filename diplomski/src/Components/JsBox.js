import React, { Component } from 'react'
import Spritesheet from 'react-responsive-spritesheet';

export default class JsBox extends Component {
    render() {
        return (
            <div>
                <Spritesheet
                    className={`my-element__class--style`}
                    image={`https://raw.githubusercontent.com/3351drago/Graphic-design/master/Dipl-sprite-box.png`}
                    widthFrame={500}
                    heightFrame={500}
                    steps={3}
                    fps={5}
                    autoplay={true}
                    loop={true}
                /> 
            </div>
        )
    }
}
