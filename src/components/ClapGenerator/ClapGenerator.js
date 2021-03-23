import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const ClapGenerator = (props) => {
	const [ inputText, setInputText ] = useState('');
	const [ outputText, setOutputText ] = useState('');

	useEffect(() => {
		console.log('[INPUT]',inputText)
	},[inputText])

	useEffect(() => {
		console.log('[OUTPUT]',outputText)
	},[outputText])

	const onInputChange = (event) => {
		setInputText(event.target.value);
	};

	const onSubmitInput = () => {
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
					controlId="input-text"
					placeholder="Put your text here!"
				/>
			</Form.Group>
			<Button variant="primary" onClick={onSubmitInput} value={inputText}>
				CLAP<span role="img" aria-label="clap">
					👏
				</span>IT<span role="img" aria-label="clap">
					👏
				</span>
			</Button>
			<Form.Control as="textarea" rows="5" controlId="output-text" placeholder="Output" value={outputText} />
		</Form>
	);
};

export default ClapGenerator;
