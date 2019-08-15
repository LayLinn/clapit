import React, { Component, ReactDOM, mountNode } from 'react';
import ClapGenerator from './components/ClapGenerator/ClapGenerator';
import Button from 'antd/es/button';
import './App.css';
import 'antd/dist/antd.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}
	render() {
		return (
			<div id="main">
				{/* <Button type="primary">Button</Button> */}
				<ClapGenerator />
			</div>
		);
	}
}

export default App;
