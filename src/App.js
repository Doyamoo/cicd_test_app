import React, { Component } from 'react';
import './App.css';

const MAX_LENGTH = 11

class App extends Component {
  input = ''
  user_name = ''

  constructor(props) {
    super(props)
    this.state  = {
      title: 'Input form',
      message: 'type your name.',
      word_len: 0
    }
    this.doChange = this.doChange.bind(this)
    this.doSubmit = this.doSubmit.bind(this)

  }

  doChange(event) {    
    this.input = event.target.value
    this.setState({
      word_len: event.target.value.length
    })
  }

  doSubmit(event) {

    if (this.input === "") {
      this.user_name = "名無し"
    } else if (this.input.length >= MAX_LENGTH) {
      this.user_name = "ERROR!!"
    } else {
      this.user_name = this.input
    }
  
    this.setState({
      title: 'Send form',
      message: 'こんにちは、' + this.user_name + ' さん!'
    })
    event.preventDefault()
  }

  render() {
    return <div>
      <h1 className='bg-primary text-white display-4'>React</h1>
      <div className='container'>
        <h4>{this.state.title}</h4>
        <p className='card h5 p-3'>{this.state.message}</p>
        <div className='alert alert-primary mt-3'>
          <form onSubmit={this.doSubmit}>
            <div className='form-group'>
              <label>Name: ({this.state.word_len}文字)</label>
              <input type="text" className='form-control' onChange={this.doChange} />
            </div>
            <input type="submit" className='btn btn-primary' value="Click" />
          </form>
        </div>
      </div>
    </div>
  }
}

export default App;
