import React, { useState } from 'react'
import ReactTable from 'react-table-v6'
import ReactJson from 'react-json-view'
import { LOCATON_DATA } from '../mocks/mock-location-data'

const Locations = () => {
  const [isopen, toggleOpen] = useState(true)
  const [filterable, toggleFilter] = useState(false)

  const columns = [{
    Header: 'name',
    accessor: 'name'
  }, {
    Header: 'id',
    accessor: 'id'
  }, {
    Header: 'hub id',
    accessor: 'hubid'
  }]

  return (
    <div className="stui-main__pnl">
      <div className="stui-mpanel">
        <div className="stui-mpanel__title">
          <h5>Locations</h5>
        </div>
        <div className="stui-mpanel__action">
          <button
            className="spx-btn spx-btn--pr--inverted spx-btn--circle spx-btn--sm"
            data-icon="filter_list"
            onClick={() => toggleFilter(!filterable)}
          />
          <button
            className="spx-btn spx-btn--pr--inverted spx-btn--circle spx-btn--sm"
            data-icon="keyboard_arrow_down"
            onClick={() => toggleOpen(!isopen)}
          />
        </div>
      </div>
      {isopen && (
        <div className="stui-dtable">
          <ReactTable
            className="-striped"
            data={LOCATON_DATA}
            columns={columns}
            filterable={filterable}
            SubComponent={row => {
              return (
                <ReactJson
                  src={row}
                  theme="solarized"
                  enableClipboard={false}
                />
              )
            }}
          />
        </div>
      )}
    </div>
  )
}

export default Locations
