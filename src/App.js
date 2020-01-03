import React, { useState } from 'react'
import { Switch, Route, useHistory, useLocation } from 'react-router-dom'
import Header from './header'
import Menu from './menu'
import Upane from './upane'
import Main from './main'
import UserSearch from './user-search'

const App = () => {
	const [selected, setSelected] = useState('')
	const [loading, setLoading] = useState(false)
	let history = useHistory()
	const loc = useLocation()
	const base = `/users/:userid`

	const handleSelection = selected => {
		setLoading(true)

		setTimeout(() => {
			setSelected(selected)
			setLoading(false)
			history.push(`${selected}`)
		}, 2000)
	}

	return (
		<div className="stui-core">
			<Menu />

			<div className="stui-core__base">
				<Header />

				<div className="stui-view">
					<Switch>
						<Route path={base}>
							<>
								<Upane handleSelection={handleSelection} setSelected={setSelected} />
								<Main
									base={base}
									loading={loading}
									selected={selected}
									setSelected={setSelected}
								/>
							</>
						</Route>

						<Route path="/" exact>
							<>
								<UserSearch setSelected={setSelected} />
								<div className="stui-main">
									<div className="stui-main__empty">
										<p>No user</p>
									</div>
								</div>
							</>
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	)
}

export default App
