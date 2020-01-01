import React, { useState } from 'react'

const UserSearch = ({ setSelected }) => {
  const [showList, setListVis] = useState(false)

  const isVisible = ev => {
    if (ev.target.value.length > 0) {
      setListVis(true)
    } else {
      setListVis(false)
    }
  }

  return (
    <div className="stui-upane">
      <div className="stui-search">
        <form className="spx-form">
          <div className="flex">
            <div className="flex__i--xs-12">
              <label className="spx-label">Search Users</label>
              <input
                className="spx-input"
                type="text"
                placeholder="Search by username, said, email"
                onKeyUp={isVisible}
              />
            </div>
          </div>
        </form>

        {showList && (
          <div className="stui-search-results">
            <p className="stui-search-results__label">results</p>
            <ul onClick={() => setSelected('empty')}>
              <li>Jason Jacobson</li>
            </ul>
          </div>
        )}
      </div>

      <div className="stui-smss">
        <div className="stui-smss__icon">
          <i className="material-icons">
            sms
          </i>
        </div>

        <div className="stui-smss__text">
          SMS Lookup
        </div>
      </div>
    </div>
  )
}

export default UserSearch
