import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const appRoot = document.getElementById('app');

  app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of the computer',
    options: []
  };

  addToForm = (input) => {
    input.preventDefault();
    const option = input.target.elements.option.value;

    if (option){
      this.app.options.push(option);
      input.target.elements.option.value = '';
      
      
    }
  }

  const template2 = (
    <div>
    <h1>{this.app.title}</h1>
    {this.app.subtitle && <p>{this.app.subtitle}</p>}
    <p>{this.app.subtitle.length > 0 ? 'Here are your options:' : 'No Options'} </p>
    <p>{this.app.options.length}</p>
    <ol>
    <li>{this.app.options[0]}</li>
    <li>{this.app.options[1]}</li>
    </ol>
    <form onSubmit={this.addToForm}>
    <input type="text" name="option"/>
    <button>Add</button>
    </form>
     </div>
   
  );


  ReactDOM.render(template2, appRoot);
  ReactDOM.unmountComponentAtNode(div);
});
