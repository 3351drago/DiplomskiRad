import React from 'react';
import Editor from "./Components/CodeMirror/Editor";
import GameBoard from "./Components/GameBoard";
import Loader from './Components/Loader/Loader';
import FunctionBoard from './Components/FunctionBoard';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       moveWord: "Drago",
       loading: true,
       countSteps: 1
    }
    this.getWord = this.getWord.bind(this);
  }

  getWord= (word) =>{
    this.setState({moveWord: word,countSteps: this.state.countSteps+1});
    
  }

  componentDidMount(){
    setTimeout(function(){
      this.setState({ loading: !this.state.loading});
    }.bind(this), 3000)
  }
  
  render(){
    console.log(this.state.moveWord)

    if(this.state.loading == true){
      return(
      <Loader/>
      );
    }

    return (
      <div className="App">
        <div className="boards">
        <GameBoard movePlayer={this.state.moveWord} countSteps={this.state.countSteps}/>
        <FunctionBoard />
        </div>
        <Editor getWord={this.getWord}/>
      </div>
    );
  }
}

export default App;
