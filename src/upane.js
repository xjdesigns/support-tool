import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Dialog from './core/dialog'

const Upane = ({ handleSelection, setSelected }) => {
  const [dialogOpen, toggleDialog] = useState(false)
  const [moreInfo, toggleMoreInfo] = useState(false)
	const base = `/users`
	let history = useHistory()
	const { userid } = useParams()

	const handleLogout = () => {
		history.push('/')
		setSelected('')
	}

	const handleRoute = route => {
		const r = `${base}/${userid}/${route}`
		handleSelection(r)
	}

  const confirmAction = () => {
    handleLogout()
    toggleDialog(false)
  }

  const cancelAction = () => {
    toggleDialog(false)
  }

  return (
    <div className="stui-upane">
      <div className="stui-upane__header">
        <div className="stui-uheader">
          <div className="stui-uheader__title">
            <h6>User Information</h6>
          </div>

          <div className="stui-uheader__actions">
            <button
              className="spx-btn spx-btn--pr spx-btn--sm spx-btn--circle"
              data-icon="exit_to_app"
              onClick={() => toggleDialog(true)}
            />
          </div>
        </div>
      </div>

      <div className="stui-upane__details">
        <div className="stui-udetail">
          <div className="stui-udetail__label"><strong>Username</strong></div>
          <div className="stui-udetail__desc">jason.jacobson</div>
        </div>
        <div className="stui-udetail">
          <div className="stui-udetail__label"><strong>UUID</strong></div>
          <div className="stui-udetail__desc">784ij8-ewpoitcd-2012shikd</div>
        </div>
        <div className="stui-udetail">
          <div className="stui-udetail__label"><strong>Email</strong></div>
          <div className="stui-udetail__desc">jason.jacobson@smartthings.com</div>
        </div>
        <div className="stui-udetail">
          <div className="stui-udetail__label"><strong>SAID</strong></div>
          <div className="stui-udetail__desc">32oij8-ewpodpmos-3487shikd</div>
        </div>

        {moreInfo && (
          <>
          <div className="stui-udetail">
            <div className="stui-udetail__label"><strong>Date added</strong></div>
            <div className="stui-udetail__desc">11/12/2019</div>
          </div>
          <div className="stui-udetail">
            <div className="stui-udetail__label"><strong>Last updated</strong></div>
            <div className="stui-udetail__desc">1/2/2020</div>
          </div>
          </>
        )}

        <button
          className="spx-btn spx-btn--pr--inverted spx-btn--sm"
          onClick={() => toggleMoreInfo(!moreInfo)}
        >
          {moreInfo ? 'show less' : 'show more'}
        </button>
      </div>


      <div className="stui-upane__info">
        <div className="spx-apanel">
          <div className="spx-apanel__title">Locations (4)</div>

          <div className="spx-apanel__actions">
            <div className="spx-panel-actions">
              <div className="spx-apanel__core">
                <button
                  className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle"
                  data-icon="keyboard_arrow_right"
                  onClick={() => handleRoute('users')}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="spx-apanel">
          <div className="spx-apanel__title">Automations (2)</div>

          <div className="spx-apanel__actions">
            <div className="spx-panel-actions">
              <div className="spx-apanel__core">
                <button
                  className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle"
                  data-icon="keyboard_arrow_right"
                  onClick={() => handleRoute('automations')}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="spx-apanel">
          <div className="spx-apanel__title">Devices(121)</div>

          <div className="spx-apanel__actions">
            <div className="spx-panel-actions">
              <div className="spx-apanel__core">
                <button
                  className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle"
                  data-icon="keyboard_arrow_right"
                  onClick={() => handleRoute('devices')}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="spx-apanel">
          <div className="spx-apanel__title">Events(11)</div>

          <div className="spx-apanel__actions">
            <div className="spx-panel-actions">
              <div className="spx-apanel__core">
                <button
                  className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle"
                  data-icon="keyboard_arrow_right"
                  onClick={() => handleRoute('devices')}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="spx-apanel">
          <div className="spx-apanel__title">Notifications(14)</div>

          <div className="spx-apanel__actions">
            <div className="spx-panel-actions">
              <div className="spx-apanel__core">
                <button
                  className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle"
                  data-icon="keyboard_arrow_right"
                  onClick={() => handleRoute('devices')}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="spx-apanel">
          <div className="spx-apanel__title">Hub migration tool</div>

          <div className="spx-apanel__actions">
            <div className="spx-panel-actions">
              <div className="spx-apanel__core">
                <button
                  className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle"
                  data-icon="keyboard_arrow_right"
                  onClick={() => handleSelection('devices')}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="spx-apanel">
          <div className="spx-apanel__title">IDE tool (legacy)</div>

          <div className="spx-apanel__actions">
            <div className="spx-panel-actions">
              <div className="spx-apanel__core">
                <button
                  className="spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle"
                  data-icon="keyboard_arrow_right"
                  onClick={() => handleSelection('devices')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {dialogOpen && (
        <Dialog
          cancelAction={cancelAction}
          confirmAction={confirmAction}
        >
          <p>Are you sure you want to leave impersonation?</p>
        </Dialog>
      )}
    </div>
  )
}

export default Upane
