import React from 'react'
import DisplayPane from './core/display-pane'
import DataTable from './core/data-table'
import Automations from './core/automations'

const Main = ({ loading, selected, setSelected }) => {
  return (
    <main className="stui-main">
      {loading && (
        <div className="stui-main__empty">
          <div className="spx-loading">
            <div className="spx-loading__dots"></div>
            <div className="spx-loading__dots"></div>
            <div className="spx-loading__dots"></div>
          </div>
        </div>
      )}

      {!loading && selected === 'empty' && (
        <div className="stui-main__empty">
          <p>Nothing selected</p>
        </div>
      )}

      {!loading && selected === 'automations' && (
        <>
        <Automations />
        </>
      )}

      {!loading && selected === 'devices' && (
        <>
        <div className="stui-main__pnl">
          <DataTable />
        </div>
        </>
      )}

      {!loading && selected === 'users' && (
        <div className="stui-main__pnl">
          <button
            className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle"
            data-icon="close"
            onClick={() => setSelected('empty')}
          />

          <div className="stui-mpnl">
            <DisplayPane />
          </div>
        </div>
      )}
    </main>
  )
}

export default Main
