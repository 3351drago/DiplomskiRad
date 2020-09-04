import React, { Component } from 'react'
import {UnControlled as CodeMirror} from 'react-codemirror2'
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');


export class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
          runCode: false,
          outputText: 'console.log("Hello World")',
        }
      }
      runCode = () => {
        this.setState({runCode: true})
      }

    render() {
        return (
            <div className="codemirror">
                <CodeMirror
                    className="cdmrr"
                    value='<h1>write your code here</h1>'
                    options={{
                        mode: 'xml',
                        theme: 'xq-light',
                        lineNumbers: true
                    }}
                    onChange={(editor, data, value) => {
                        this.setState({
                            runCode: false,
                            outputText: value,
                          })
                    }}
                />
                <button className="runButton" onClick={() => this.props.getWord(this.state.outputText)}>run code</button>
            </div>
        )
    }
}

export default Editor
