import React, { useState } from 'react'
import ReactTable from 'react-table-v6'
import ReactJson from 'react-json-view'
import { MOCK_TABLE_DATA } from '../mocks/mock-user-data'

const Devices = () => {
  const [isopen, toggleOpen] = useState(true)
  const [filterable, toggleFilter] = useState(false)

  const columns = [{
    Header: 'name',
    accessor: 'name'
  }, {
    Header: 'id',
    accessor: 'id'
  }, {
    Header: 'username',
    accessor: 'username'
  }, {
    Header: 'email',
    accessor: 'email'
  }, {
    Header: 'company',
    id: 'company',
    accessor: d => d.company.name
  }]

  return (
    <>
    <div className="stui-main__pnl">
      <div className="stui-mpanel">
        <div className="stui-mpanel__title">
          <h5>Devices</h5>
        </div>
      </div>
    </div>
    <div className="stui-main__pnl">
      <div className="stui-mpanel stui-mpanel--space">
        <div className="stui-mpanel__title">
          {/* // class is required to flex */}
          {/* <h5>Devices</h5> */}
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
            data={MOCK_TABLE_DATA}
            columns={columns}
            filterable={filterable}
            showPageSizeOptions={false}
            SubComponent={row => {
              return (
                <ReactJson
                  src={row.original}
                  theme="solarized"
                  enableClipboard={false}
                />
              )
            }}
          />
        </div>
      )}
    </div>
    </>
  )
}

export default Devices
