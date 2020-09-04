import React, { Component } from 'react'
import Spritesheet from 'react-responsive-spritesheet';
import "../App.css";

export class Character extends Component {
    render() {
        console.log("move", this.props.move);
        switch(this.props.move){
            case 1:
                return(<Spritesheet
                    className={`my-element__class--style`}
                    image={`https://raw.githubusercontent.com/3351drago/Graphic-design/master/Dipl-sprite-standing.png`}
                    widthFrame={500}
                    heightFrame={500}
                    steps={5}
                    fps={10}
                    autoplay={true}
                    loop={true}
                /> )
            case 2:
                return(
                <Spritesheet
                    style={{animation: "moveleft 1s"}}
                    className={`my-element__class--style`}
                    image={`https://raw.githubusercontent.com/3351drago/Graphic-design/master/Dipl-sprite-right.png`}
                    widthFrame={500}
                    heightFrame={500}
                    steps={7}
                    fps={10}
                    autoplay={true}
                    loop={false}
                />)
            case 3:
                return(<Spritesheet
                    style={{animation: "moveup 1s"}}
                    className={`my-element__class--style`}
                    image={`https://raw.githubusercontent.com/3351drago/Graphic-design/master/Dipl-sprite-up.png`}
                    widthFrame={500}
                    heightFrame={500}
                    steps={7}
                    fps={10}
                    autoplay={true}
                    loop={false}
                />)
            case 4:
                return(<Spritesheet
                    style={{animation: "movedown 1s"}}
                    className={`my-element__class--style`}
                    image={`https://raw.githubusercontent.com/3351drago/Graphic-design/master/Dipl-sprite-down.png`}
                    widthFrame={500}
                    heightFrame={500}
                    steps={7}
                    fps={10}
                    autoplay={true}
                    loop={false}
                />)
            case 5:
                return(
                <Spritesheet
                    style={{animation: "moveright 1s"}}
                    className={`my-element__class--style`}
                    image={`https://raw.githubusercontent.com/3351drago/Graphic-design/master/Dipl-sprite-left.png`}
                    widthFrame={500}
                    heightFrame={500}
                    steps={7}
                    fps={10}
                    autoplay={true}
                    loop={false}
                />)
            default:
                return(<Spritesheet
                    className={`my-element__class--style`}
                    image={`https://raw.githubusercontent.com/3351drago/Graphic-design/master/Dipl-sprite.png`}
                    widthFrame={500}
                    heightFrame={500}
                    steps={7}
                    fps={10}
                    autoplay={false}
                    loop={true}
                /> )
        }
    }
}

export default Character
