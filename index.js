import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from './Form';
import './style.css';

const data = []
class App extends Component {

  render() {
    return (
      <div>
      <h1> Todo List with Hooks</h1>
        <Form tasks={data}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
