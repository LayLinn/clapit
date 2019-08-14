import React, { Component } from 'react';
import ClapGenerator from './components/ClapGenerator/ClapGenerator';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}
	render() {
		return (
      <div id='main'>
        <ClapGenerator />
      </div>
		);
	}
}

export default App;
