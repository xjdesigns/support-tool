import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './styles/scss/em-reset.scss'
import './styles/scss/style.scss'
import 'react-table-v6/react-table.css'

ReactDOM.render(
	<Router>
		<App />
	</Router>,
  document.getElementById('root')
)
