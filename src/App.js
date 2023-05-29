// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({userInput : event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput:  updatedText})
  }

  render (){
    // map is use to give new list which is present in charList
    let charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index}
      clicked = {() => this.deleteCharHandler(index)} />;
    });

  return (
    <div className="App">
      <h1>Assignment 2</h1>
      <p>1. Create an input (in App Component) with change listener which outputs length of the text</p>
      <p>2. Create a new component which recieves the text length as a prop</p>
      <p>3. In the new component if length is greater than 5 print too long string otherwise too short</p>
      <p> 4. Create another new component and styling it</p>
      <p>5. Render a list of text for spiliting every char</p>
      <p>6. when you click any char it will remove</p>
      <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput} />
      <p>{this.state.userInput}</p>
      <Validation inputLength={this.state.userInput.length} />
      {charList}

    </div>
  );
}
}

export default App;
