import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class IndecisionApp extends React.Component {
  
  render() {
    const title = 'Indecision X';
    const subtitle = 'Indecision Sub';
    const options = ['1', '2', '3'];
    return <div>
    <Header title={title} subtitle={subtitle}/>
    <Action/>
    <Options options = {options}/>
    <AddOption option = {options}/>
    </div>
  }
}

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleAdd(){
    alert('+1');
  }

  handleRemove(){
    alert('-1');
  }

  handleReset(){
    alert('reset');
  }
  render() {

    return <div>
    <h1>Count: </h1>
    <button onClick={this.handleAdd}>+1</button>
    <button onClick={this.handleRemove}>-1</button>
    <button onClick={this.handleReset}>Reset</button>
    </div>
  }
}

class Header extends React.Component {
  render() {
    return <div>
    <h1>{this.props.title}</h1>
    <h2>{this.props.subtitle}</h2>
    </div>
  }
}

class Action extends React.Component {
  handleClick()  {
    //
  }
  render() {
    return <div>
    <button onClick={this.handleClick}>What Should I do?</button>
    </div>
  }
}

class Options extends React.Component {
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll(){
    //this.props.options = [];
    console.log(this.props.options);
  }

  render() {
    return <div>
    <ol>
      {
        this.props.options.map((option) => {
          return <li key={option}>{option}</li>
        })
      }
    </ol>
    <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
    </div>
  }
}

class Option extends React.Component {
  render() {
    return <div>
      <p>{this.props.length}</p>
    </div>
  }
}

class AddOption extends React.Component {
  handleAdd(input){
    input.preventDefault();
    const option = input.target.elements.option.value;

    if (option){
      this.props.options.push(option);
      input.target.elements.option.value = '';
      
    }
  }
  
  render() {
    return <div>
    <form onSubmit={this.handleAdd}>
    <input type="text" name="option"/>
    <button>Add Option</button>
    </form>
    </div>
  }
}



ReactDOM.render(<Counter/>, document.getElementById('root'));

registerServiceWorker();
