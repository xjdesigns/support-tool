import React, { useEffect, useState } from 'react';
import { MOCK_TABLE_DATA } from '../mocks/mock-user-data';

const DataTable = () => {
  const [thead, setThead] = useState([])
  const [tdata, setTdata] = useState(MOCK_TABLE_DATA)

  const createHead = () => {
    const len = MOCK_TABLE_DATA.length
    let heads = []

    const entries = Object.entries(MOCK_TABLE_DATA[0])
    for (let [key, value] of entries) {
      if (typeof value === 'string') {
        heads.push(key)
      }
    }

    setThead(heads)
  }

  const generateData = data => {
    if (thead.length) {
      let items = [];
      for (let [key, value] of Object.entries(data)) {
        if (thead.includes(key)) {
          items.push(<td key={key}>{value}</td>)
        }
      }
      return items
    }
  }

  const filterResults = ev => {
    const value = ev.target.value
    let filtered
    if (value.length === 0) {
      filtered = MOCK_TABLE_DATA
    } else {
      filtered = MOCK_TABLE_DATA.filter(data => {
        return data['name'].indexOf(value) > -1
      })
    }
    setTdata(filtered)
  }

  useEffect(() => {
    createHead()
  }, [])

  return (
    <>
    <div>
      <form className="spx-form">
        <div className="flex">
          <div className="flex__i--xs-12">
            <label className="spx-label">Filter by name</label>
            <div className="spx-search">
              <input
                className="spx-input"
                type="search"
                onKeyUp={filterResults}
              />
              <button className="spx-btn spx-btn--pr spx-btn--circle" data-icon="search" />
            </div>
          </div>
        </div>
      </form>
    </div>
    <div className="spx-mg-bt-12">
      <table className="stui-tdata">
        <thead>
          <tr>
            {thead.map(th => {
              return <th key={th}>{th}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {tdata.map((tdata, idx) => {
            return (
              <tr key={idx}>
                {generateData(tdata)}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    <div>
      <button className="spx-btn spx-btn--pr spx-btn--sm">
        See all data
      </button>
    </div>
    {/* <div className="stui-data-overlay">
      <pre>
        <code>
          {JSON.stringify(MOCK_TABLE_DATA, null, ' ')}
        </code>
      </pre>
    </div> */}
    </>
  )
}

export default DataTable
