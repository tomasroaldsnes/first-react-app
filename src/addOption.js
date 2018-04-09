import React from 'react';

export default class AddOption extends React.Component {
    state ={
        error: undefined
      }
    
    handleAdd = (input) => {
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