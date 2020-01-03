import React from 'react'
import { Switch, Route, useHistory, useParams } from 'react-router-dom'
import DisplayPane from './core/display-pane'
import DataTable from './core/data-table'
import Automations from './core/automations'

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
        <div className="stui-main__empty">
          <div className="spx-loading">
            <div className="spx-loading__dots"></div>
            <div className="spx-loading__dots"></div>
            <div className="spx-loading__dots"></div>
          </div>
        </div>
      )}

			<Switch>
				<Route path={`${base}/automations`}>
					<Automations />
				</Route>

				<Route path={`${base}/devices`}>
					<div className="stui-main__pnl">
						<DataTable />
					</div>
				</Route>

				<Route path={`${base}/users`}>
					<div className="stui-main__pnl">
						<button
							className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle"
							data-icon="close"
							onClick={handleBack}
						/>

						<div className="stui-mpnl">
							<DisplayPane />
						</div>
					</div>
				</Route>

				<Route path={`${base}`}>
					<div className="stui-main__empty">
						<p>Nothing selected</p>
					</div>
				</Route>
			</Switch>
    </main>
  )
}

export default Main
