const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of the computer',
    options: []
  };

  const resetArray = () => {
    app.options = [];
    render();
  }

  const makeDecision = () => {
    const rnd = Math.floor(Math.random() * app.options.length);
    const option = app.options[rnd];
    alert(option);
  }

  const addToForm = (input) => {
    input.preventDefault();
    const option = input.target.elements.option.value;

    if (option){
      app.options.push(option);
      input.target.elements.option.value = '';
      render();
    }
  }

  

  const render = () => {
  const template2 = (
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.subtitle.length > 0 ? 'Here are your options:' : 'No Options'} </p>
    <button disabled={app.options.length < 1} onClick={makeDecision}>Make Decision</button>
    <ol>
      {
        app.options.map((option) => {
          return <li key={option}>{option}</li>
        })
      }
    </ol>
    <form onSubmit={addToForm}>
    <input type="text" name="option"/>
    <button>Add</button>
    <button onClick={resetArray}>Reset</button>
    
    </form>
     </div>
   );

   ReactDOM.render(template2, document.getElementById('root'));

  };

render();
registerServiceWorker();