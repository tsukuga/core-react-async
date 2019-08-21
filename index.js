import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

export default class App extends Component {

  constructor() {
    super();

    this.state = {}

  }

  get(e){
    this.setState({result:e})
  }

  render(){

    return(
      
       <div>
        <Hello getResult={this.get.bind(this)}/>
       
        <button type="button" onClick={()=>(console.log(this.state.result))}>渡し確認</button>
      </div>
    )
  }


}

render(<App/>, document.getElementById('root'));

