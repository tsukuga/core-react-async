import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

export default class Hello extends Component {

  constructor() {
    super();

    this.state = {}

  }

  get(e){
    setState({result:e})
  }


}

render(<Hello getresult={this.get} />, document.getElementById('root'));

