import React from 'react'
import { Switch, Route, useHistory, useParams } from 'react-router-dom'
import DisplayPane from './core/display-pane'
import Automations from './core/automations'
import Devices from './core/devices'
import Locations from './core/users'
import Logo from './core/logo'

const Main = ({ base, loading, setSelected }) => {
	const basePath = `/users`
	let history = useHistory()
	const { userid } = useParams()

	const handleBack = () => {
		const r = `${basePath}/${userid}`
		history.push(r)
	}

  return (
    <main className="stui-main">
			{/* // Move this to the component as it would live
			// with the Query graphql component */}
      {loading && (
        <>
          <div className="stui-main__empty">
            {/* <div className="spx-loading">
              <div className="spx-loading__dots"></div>
              <div className="spx-loading__dots"></div>
              <div className="spx-loading__dots"></div>
            </div> */}
            <div className="stui-logo-svg">
              <Logo />
            </div>
          </div>
          <div className="stui-main__overlay" />
        </>
      )}

			<Switch>
				<Route path={`${base}/automations`}>
					<Automations />
				</Route>

				<Route path={`${base}/devices`}>
					<Devices />
				</Route>

				<Route path={`${base}/users`}>
					<Locations />
				</Route>

				<Route path={`${base}`}>
					{!loading && (
            <div className="stui-main__empty">
  						<p>Nothing selected</p>
  					</div>
          )}
				</Route>
			</Switch>
    </main>
  )
}

export default Main
