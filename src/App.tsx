import React, { Component } from 'react';
import logo from './logo.svg';
import { observable } from 'mobx';
import {observer} from 'mobx-react';
import {StateProp} from './state';
import './App.css';

@observer
class App extends Component<StateProp,{}> {
  render() {
    const store = this.props.state!;
    return (
      <div className="App">

        <input type='text' onChange={(newValue) => store.text = newValue.currentTarget.value} />
        {store.text}
      </div>
    );
  }
}

export default App;
