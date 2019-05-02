import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './dogs.scss';

const dog1 = require ('../assets/img/dog1.jpg');
const dog2 = require ('../assets/img/dog2.jpg');
const dog3 = require('../assets/img/dog3.jpg');

export default class Dogs extends Component {
	constructor(props) {
		super(props);

		// Bind the this context to the handler function
		this.handler = this.handler.bind(this);

		// Set petting state
		this.state = {
			totalPets: 0,
		};
	}

	// This method will be sent to the child component
	handler() {
		this.setState((prevState, props) => ({
			totalPets: prevState.totalPets + 1
		}));
	}

	// Render the child component and set the action property with the handler as value
	render() {
		return (
			<div>
				<h1>This is the dog gallery!</h1>
				<div class="container">
					<h3>Total Pets: {this.state.totalPets}</h3>
					<DogGallery parentMethod={this.handler}/>
				</div>
				
			</div>
		);
	}
}

class DogGallery extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dog1Pets: 0,
			dog2Pets: 0,
			dog3Pets: 0
		}
	}

	handlePets (event, dogSelection) {
		this.callParent();
		if (dogSelection === 'dog1') {
			this.setState((prevState, props) => ({
				dog1Pets: prevState.dog1Pets + 1
			}));
		} else if (dogSelection === 'dog2') {
			this.setState((prevState, props) => ({
				dog2Pets: prevState.dog2Pets + 1
			}));
		} else if (dogSelection === 'dog3') {
			this.setState((prevState, props) => ({
				dog3Pets: prevState.dog3Pets + 1
			}));
		}
	}

	callParent = () => {
		this.props.parentMethod();
	}

	render() {
		return (
			<div class="row dog-pics">
				<div class="col">
					<img src={dog1} alt="dog1" onClick={(e) => this.handlePets(e,'dog1')}></img>
					<p>Number of pets: {this.state.dog1Pets}</p>
				</div>
				<div class="col">
					<img src={dog2}  alt="dog2" onClick={(e) => this.handlePets(e,'dog2')}></img>
					<p>Number of pets: {this.state.dog2Pets}</p>
				</div>
				<div class="col">
					<img src={dog3}  alt="dog3" onClick={(e) => this.handlePets(e, 'dog3')}></img>
					<p>Number of pets: {this.state.dog3Pets}</p>	
				</div>
			</div>
		);
	}
}
