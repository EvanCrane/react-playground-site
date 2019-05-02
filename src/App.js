import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import Dogs from './components/dogs';

export default class App extends Component {
        render() {
            return (
                <div className="App">
                	<header className="App-header">
                		<h1 className="App-title">Dog React Site</h1>
                	</header>
					<main>
						<Dogs/>
					</main>
				</div>
			);
	}
}

