import React from 'react';

import { Header } from './header.js';
import { Action } from './action.js';
import { Options } from './options.js';
import AddOption from './addOption.js';
import OptionModal from './OptionModal.js';


export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
      };
    
     componentDidMount = () => {
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
     componentDidUpdate = (prevProps, prevState) => {
       if(prevState.options.length !== this.state.options.length){
         const json = JSON.stringify(this.state.options);
         localStorage.setItem('options', json);
       }
  
     }

    
    handleClearOption = () => {
        this.setState(() => ({
         selectedOption: undefined
        }));
    }
  
    handlePick = () =>   {
      const randomPick = Math.floor(Math.random() *this.state.options.length);
      const chosenOption = this.state.options[randomPick];
      this.setState(() => ({selectedOption: chosenOption}));
    }
  
    handleDeleteOptions = () => {
       this.setState(() => ({ options: [] }));
       
    }
    handleDeleteOption = (optionToRemove) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => {
          return optionToRemove !== option;
        })
      }));
    
   }
    handleAddOption = (option) => {
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
      <OptionModal
        selectedOption={this.state.selectedOption} 
        handleClearOption = {this.handleClearOption}/>
      </div>
    }
  }
