import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Dialog from './core/dialog'

const UserSearch = ({ setSelected }) => {
  const [showList, setListVis] = useState(false)
  const [showDialog, toggleDialog] = useState(false)
	let history = useHistory()

  const isVisible = ev => {
    if (ev.target.value.length > 0) {
      setListVis(true)
    } else {
      setListVis(false)
    }
  }

	const handleUser = () => {
		history.push('/users/784ij8-ewpoitcd-2012shikd')
		setSelected('users')
	}

  return (
    <div className="stui-upane">
      <div className="stui-search">
        <form className="spx-form">
          <div className="flex">
            <div className="flex__i--xs-12">
              <label className="spx-label">User lookup</label>
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
            <ul onClick={() => toggleDialog(true)}>
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

      {showDialog && (
        <Dialog
          cancelAction={() => toggleDialog(false)}
          confirmAction={handleUser}
        >
          <div className="stui-search-dialog">
            <form className="spx-form">
              <div className="flex">
                <div className="flex__i--xs-12">
                  <label className="spx-label">Reason</label>
                  <div className="spx-select">
                    <select>
                      <option value="value">Ticket</option>
                      <option value="value">Testing</option>
                    </select>
                  </div>
                </div>

                <div className="flex__i--xs-12">
                  <label className="spx-label">Reason description</label>
                  <textarea className="spx-textarea" cols="30" rows="10" />
                </div>
              </div>
            </form>
          </div>
        </Dialog>
      )}
    </div>
  )
}

export default UserSearch
