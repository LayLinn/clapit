import React, { Component } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

class ClapGenerator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputText: '',
			outputText: ''
		};
	}

	onInputChange = (event) => {
		console.log(this.state.inputText);
		this.setState({ inputText: event.target.value });
    };
    
    onSubmitInput = (event) => {
        var submittedInput = this.state.inputText.trim().split(' ');
        submittedInput[submittedInput.length -1] += '👏';
        var processedInput = submittedInput.join('👏');
        this.setState({outputText : processedInput});
    }

	render() {
		return (
			<TextArea rows={4}/>
			// <Form>
			// 	<Form.Group controlId="InputText.ControlTextarea">
			// 		<Form.Label />
			// 		<Form.Control as="textarea" rows="5" onChange={this.onInputChange} id='input-text' placeholder='Put your text here!'/>
			// 	</Form.Group>
			// 	<Button variant="primary" onClick={this.onSubmitInput}>
			// 		CLAP<span role='img' aria-label='clap'>👏</span>IT<span role='img' aria-label='clap'>👏</span>
			// 	</Button>
            //     <Form.Control as="textarea" rows="5" id='output-text' placeholder='Output' value={this.state.outputText}/>
			// </Form>
		);
	}
}

export default ClapGenerator;
