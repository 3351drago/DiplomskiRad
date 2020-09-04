import React, { Component } from 'react';
import BoxContainer from "./BoxContainer";
import mazeTiles from '../Data/mazeTiles';
import Swal from 'sweetalert2'
import "../App.css";

const boxArray_mockup =[1, 2, 3, 4, 5, 
                          6, 7, 8, 9 , 10, 
                          11, 12, 13, 14, 15, 
                          16, 17, 18, 19, 20, 
                          21, 22, 23, 24, 25].map(function(element){
   
    return <BoxContainer element={element}/>;
 
});

export class GameBoard extends Component {
    constructor() {
        super()
    
        this.state = {
             maze: [],
             questions: [],
             index: 1,
             movement: 1
        }
       // this.getFloor = this.getFloor.bind(this);
    }

    //  getFloor(type){
    //    this.setState({canMove: type})
    //  }

      componentDidUpdate(nextProps){
        const {movePlayer}= this.props
        const {countSteps}= this.props
        console.log(nextProps)
        if (nextProps.countSteps !== countSteps) {
          if(movePlayer=="moveRight()"){
              const properti = this.state.maze.filter(id => id._id == this.state.index+1).map(element=>element.type)
              const charOn = this.state.maze.filter(id => id._id == this.state.index+1).map(element=>element)
              if(properti[0]=="floor"){
                const question = this.state.questions.filter(id => id._id == charOn[0].number).map(element=>element)
                if(charOn[0].characterOn == true){
                  Swal.mixin({
                    confirmButtonText: 'Next &rarr;',
                    showCancelButton: true,
                    progressSteps: ['1', '2', '3']
                  }).queue([
                    {
                      title: question[0].title1,
                      text: question[0].text1
                    },
                    {
                      title: question[0].title2,
                      text: question[0].text2
                    },
                    {
                      input: 'text',
                      title: question[0].question1,
                      text: question[0].questionText
                    }
                  ]).then((result) => {
                    if (result.value) {
                      const answers = JSON.stringify(result.value[2])
                      if(answers==question[0].answer){
                      Swal.fire({
                        title: 'Your answer was RIGHT!',
                        html: `
                          Your answers:
                          <pre><code>${answers}</code></pre>
                        `,
                        confirmButtonText: 'Lovely!'
                      })
                      setTimeout(function(){
                        this.setState({ index: ++this.state.index });
                        this.setState({movement: 2});
                      }.bind(this), 1000)
                      }
                      else{
                        Swal.fire({
                        title: 'Try again!',
                        html: `
                          Your answer:
                          <pre><code>${answers}</code></pre>
                        `,
                        confirmButtonText: 'OK'
                      })
                      }
                    }
                  })
                }
                else{
                  setTimeout(function(){
                    this.setState({ index: ++this.state.index });
                    this.setState({movement: 2});
                  }.bind(this), 1000)
                  }
              }
              else{
                Swal.fire({
                  title: 'Oh, no',
                  text: 'You can not move right!',
                  imageUrl: 'https://raw.githubusercontent.com/3351drago/Graphic-design/master/Dipl-sprite-error.jpg',
                  imageWidth: 500,
                  imageHeight: 250,
                  imageAlt: 'Custom image',
                  confirmButtonText: 'OK'
                  })
              }
            }
          if(movePlayer=="moveUp()"){
            const properti = this.state.maze.filter(id => id._id == this.state.index-7).map(element=>element.type)
            const charOn = this.state.maze.filter(id => id._id == this.state.index-7).map(element=>element)
            console.log(properti[0])
            if(properti[0]=="floor"){
              const question = this.state.questions.filter(id => id._id == charOn[0].number).map(element=>element)
              if(charOn[0].characterOn == true){
                Swal.mixin({
                  confirmButtonText: 'Next &rarr;',
                  showCancelButton: true,
                  progressSteps: ['1', '2', '3']
                }).queue([
                  {
                    title: question[0].title1,
                    text: question[0].text1
                  },
                  {
                    title: question[0].title2,
                    text: question[0].text2
                  },
                  {
                    input: 'text',
                    title: question[0].question1,
                    text: question[0].questionText
                  }
                ]).then((result) => {
                  if (result.value) {
                    const answers = JSON.stringify(result.value[2])
                    if(result.value[2]==question[0].answer){
                      Swal.fire({
                        title: 'Your answer was RIGHT!',
                        html: `
                          Your answer:
                          <pre><code>${answers}</code></pre>
                        `,
                        confirmButtonText: 'Lovely!'
                      })
                      setTimeout(function(){
                        this.setState({ index: this.state.index - 7});
                        this.setState({movement: 3});
                      }.bind(this), 1000)
                    }
                    else{
                      Swal.fire({
                      title: 'Try again!',
                      html: `
                        Your answer:
                        <pre><code>${answers}</code></pre>
                      `,
                      confirmButtonText: 'OK'
                    })
                    }
                  }
                })
              }
              else{
                setTimeout(function(){
                  this.setState({ index: this.state.index - 7});
                  this.setState({movement: 3});
                }.bind(this), 1000)
                }
              }
              else{
                Swal.fire({
                  title: 'Oh, no',
                  text: 'You can not move up!',
                  imageUrl: 'https://raw.githubusercontent.com/3351drago/Graphic-design/master/Dipl-sprite-error.jpg',
                  imageWidth: 500,
                  imageHeight: 250,
                  imageAlt: 'Custom image',
                  confirmButtonText: 'OK'
                  })
              }
          }
          if(movePlayer=="moveDown()"){
            const properti = this.state.maze.filter(id => id._id == this.state.index+7).map(element=>element.type)
            const charOn = this.state.maze.filter(id => id._id == this.state.index+7).map(element=>element)
            console.log(properti[0])
            if(properti[0]=="floor"){
              const question = this.state.questions.filter(id => id._id == charOn[0].number).map(element=>element)
              if(charOn[0].characterOn == true){
                Swal.mixin({
                  confirmButtonText: 'Next &rarr;',
                  showCancelButton: true,
                  progressSteps: ['1', '2', '3']
                }).queue([
                  {
                    title: question[0].title1,
                    text: question[0].text1
                  },
                  {
                    title: question[0].title2,
                    text: question[0].text2
                  },
                  {
                    input: 'text',
                    title: question[0].question1,
                    text: question[0].questionText
                  }
                ]).then((result) => {
                  if (result.value) {
                    const answers = JSON.stringify(result.value[2])
                    if(result.value[2]==question[0].answer){
                      Swal.fire({
                        title: 'Your answer was RIGHT!',
                        html: `
                          Your answer:
                          <pre><code>${answers}</code></pre>
                        `,
                        confirmButtonText: 'Lovely!'
                      })
                      setTimeout(function(){
                        this.setState({ index: this.state.index + 7});
                        this.setState({movement: 4});
                      }.bind(this), 1000)
                    }
                    else{
                      Swal.fire({
                      title: 'Try again!',
                      html: `
                        Your answer:
                        <pre><code>${answers}</code></pre>
                      `,
                      confirmButtonText: 'OK'
                    })
                    }
                  }
                })
              }
              else{
                setTimeout(function(){
                  this.setState({ index: this.state.index + 7});
                  this.setState({movement: 4});
                }.bind(this), 1000)
                }
                }
            else{
              Swal.fire({
                title: 'Oh, no',
                text: 'You can not move down!',
                imageUrl: 'https://raw.githubusercontent.com/3351drago/Graphic-design/master/Dipl-sprite-error.jpg',
                imageWidth: 500,
                imageHeight: 250,
                imageAlt: 'Custom image',
                confirmButtonText: 'OK'
                })
              }
              }
          if(movePlayer=="moveLeft()"){
            const properti = this.state.maze.filter(id => id._id == this.state.index-1).map(element=>element.type)
            const charOn = this.state.maze.filter(id => id._id == this.state.index-1).map(element=>element)
            console.log(properti[0])
            if(properti[0]=="floor"){
              const question = this.state.questions.filter(id => id._id == charOn[0].number).map(element=>element)
              if(charOn[0].characterOn == true){
                Swal.mixin({
                  confirmButtonText: 'Next &rarr;',
                  showCancelButton: true,
                  progressSteps: ['1', '2', '3']
                }).queue([
                  {
                    title: question[0].title1,
                    text: question[0].text1
                  },
                  {
                    title: question[0].title2,
                    text: question[0].text2
                  },
                  {
                    input: 'text',
                    title: question[0].question1,
                    text: question[0].questionText
                  }
                ]).then((result) => {
                  if (result.value) {
                    const answers = JSON.stringify(result.value[2])
                    if(result.value[2]==question[0].answer){
                      Swal.fire({
                        title: 'Your answer was RIGHT!',
                        html: `
                          Your answer:
                          <pre><code>${answers}</code></pre>
                        `,
                        confirmButtonText: 'Lovely!'
                      })
                      setTimeout(function(){
                        this.setState({ index: --this.state.index});
                        this.setState({movement: 5});
                      }.bind(this), 1000)
                    }
                    else{
                      Swal.fire({
                      title: 'Try again!',
                      html: `
                        Your answer:
                        <pre><code>${answers}</code></pre>
                      `,
                      confirmButtonText: 'OK'
                    })
                    }
                  }
                })
              }
              else{
                setTimeout(function(){
                  this.setState({ index: --this.state.index});
                  this.setState({movement: 5});
                }.bind(this), 1000)
                }
              }
            else{
              Swal.fire({
                title: 'Oh, no',
                text: 'You can not move left!',
                imageUrl: 'https://raw.githubusercontent.com/3351drago/Graphic-design/master/Dipl-sprite-error.jpg',
                imageWidth: 500,
                imageHeight: 250,
                imageAlt: 'Custom image',
                confirmButtonText: 'OK'
                })
              }
            }
            if(movePlayer!="moveRight()" && movePlayer!="moveLeft()" && movePlayer!="moveUp()" && movePlayer!="moveDown()"){
              Swal.fire({
                title: 'Oh, no',
                text: 'You entered wrong function name!',
                imageUrl: 'https://raw.githubusercontent.com/3351drago/Graphic-design/master/Dipl-sprite-error.jpg',
                imageWidth: 500,
                imageHeight: 250,
                imageAlt: 'Custom image',
                confirmButtonText: 'OK'
                })
            }
        }
      }

      componentDidMount(){
        fetch('users/fetch')
          .then(response => response.json())
          .then(json => this.setState({maze: json}));

        fetch('questions/fetch')
          .then(res => res.json())
          .then(json1 => this.setState({questions: json1}));
      }
    
    render() {
        let isit= false     
        if(this.props.movePlayer=="moveRight()") {
          isit= true
        }
        const newMaze = this.state.maze.map(element => <BoxContainer key={element._id}  tile={element._id} tileType={element.type} getBox={element.characterOn} index={this.state.index} movement={this.state.movement} />) 
        const properti = this.state.maze.filter(id => id._id == this.state.index).map(element=>element.type)
        console.log(properti[0])
        return (
            <div className="GameBoard">
                {newMaze}
            </div>
        )
    }
}

export default GameBoard
