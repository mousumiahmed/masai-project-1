import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Facebook from './Components/Facebook.js';


ReactDOM.render((
	<BrowserRouter>
		<Facebook />
	</BrowserRouter>
	),document.getElementById('root'));