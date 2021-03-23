import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ClapGenerator = (props) => {
	const [ inputText, setInputText ] = useState('');
	const [ outputText, setOutputText ] = useState('');

	const onInputChange = (event) => {
		console.log(inputText);
		setInputText(event.target.value);
	};

	const onSubmitInput = (event) => {
		var submittedInput = inputText.trim().split(' ');
		submittedInput[submittedInput.length - 1] += '👏';
		var processedInput = submittedInput.join('👏');
		setOutputText(processedInput);
	};

	return (
		<Form>
			<Form.Group controlId="InputText.ControlTextarea">
				<Form.Label />
				<Form.Control
					as="textarea"
					rows="5"
					onChange={onInputChange}
					id="input-text"
					placeholder="Put your text here!"
				/>
			</Form.Group>
			<Button variant="primary" onClick={onSubmitInput}>
				CLAP<span role="img" aria-label="clap">
					👏
				</span>IT<span role="img" aria-label="clap">
					👏
				</span>
			</Button>
			<Form.Control as="textarea" rows="5" id="output-text" placeholder="Output" value={outputText} />
		</Form>
	);
};

export default ClapGenerator;
