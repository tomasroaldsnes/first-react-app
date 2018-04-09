import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
   }
   componentDidMount(){
     try{
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        
        if(options){
            this.setState(() => ({options: options}));
        }
    }
    catch(e){
      //
    }
   }
   componentDidUpdate(prevProps, prevState) {
     if(prevState.options.length !== this.state.options.length){
       const json = JSON.stringify(this.state.options);
       localStorage.setItem('options', json);
     }

   }

  handlePick()  {
    const randomPick = Math.floor(Math.random() *this.state.options.length);
    const chosenOption = this.state.options[randomPick];
    alert(chosenOption);
  }

  handleDeleteOptions() {
     this.setState(() => ({ options: [] }));
     
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  
 }
  handleAddOption(option){
    if(!option){
      return 'Enter valid Value';
    }
    else if(this.state.options.indexOf(option) > -1){
      return 'This option already exist';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    

  }

  

  render() {
    const title = 'Indecision X';
    const subtitle = 'Indecision Sub';
    return <div>
    <Header title={title} subtitle={subtitle}/>
    <Action hasOptions={this.state.options.length > 0} handlePick = {this.handlePick}></Action>
    <Options 
      options = {this.state.options} 
      handleDeleteOptions = {this.handleDeleteOptions}
      handleDeleteOption = {this.handleDeleteOption}/>
    <AddOption handleAddOption = {this.handleAddOption}/>
    </div>
  }
}



const Header = (props) => {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
    </div>

};

// class Header extends React.Component {

//   render() {
//     return <div>
//       <h1>{this.props.title}</h1>
//       <h2>{this.props.subtitle}</h2>
//     </div>
//   }
// }

const Action = (props) => {
  return <div>
    <button 
      onClick={props.handlePick}
      disabled={!props.hasOptions}>
      
      What Should I do?
      
      </button>
    </div>
};

// class Action extends React.Component {
  
  
//   render() {
//     return <div>
//     <button 
//       onClick={this.props.handlePick}
//       disabled={!this.props.hasOptions}>
      
//       What Should I do?
      
//       </button>
//     </div>
//   }
// }

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option.</p>}
      {
        props.options.map((option) => <Option handleDeleteOption={props.handleDeleteOption} key={option} optionText={option} />)
      }
    </div>
  );
};

// class Options extends React.Component {
  
//   render() {
//     return <div>
//     <button onClick={this.props.handleDeleteOptions}>Remove All</button>
      
//     {
//         this.props.options.map((option) => {
//           return <Option key={option} optionText={option} />
//         })
//       }
    
    
//     </div>
//   }
// }

const Option = (props) => {
  return <div>
      {props.optionText}
      <button 
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}>
      Remove</button>
      
    </div>
}


// class Option extends React.Component {
//   render() {
//     return <div>
//       <p>{this.props.optionText}</p>
//     </div>
//   }
// }

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.state ={
      error: undefined
    }
  }
  handleAdd(input){
    input.preventDefault();
    const option = input.target.elements.option.value.trim();

    if (option){
      const error = this.props.handleAddOption(option);

      this.setState(() =>({error}));

      if(!error){
        input.target.elements.option.value = '';
      }
      
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



ReactDOM.render(<IndecisionApp/>, document.getElementById('root'));

registerServiceWorker();
