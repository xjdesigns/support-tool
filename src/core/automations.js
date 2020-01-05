import React, { useState } from 'react'

const Automations = () => {
  const [isopen, toggleOpen] = useState(true)

  return (
    <div className="stui-main__pnl">
      <div className="stui-mpanel">
        <div className="stui-mpanel__title">
          <h5>Automations</h5>
        </div>
        <div className="stui-mpanel__action">
          <button
            className="spx-btn spx-btn--pr--inverted spx-btn--circle spx-btn--sm"
            data-icon="keyboard_arrow_down"
            onClick={() => toggleOpen(!isopen)}
          />
        </div>
      </div>
      {isopen && (
        <div className="spx-mg-bt-12">
          <div className="stui-grid stui-grid--2">
            <div className="stui-tile">
              <h6>IF</h6>
              <p>Multipurpose Sensor</p>
              <p>Contact sensor: open</p>
            </div>

            <div className="stui-tile">
              <h6>THEN</h6>
              <p>Send text message</p>
              <p>sensor open</p>
              <p>Jason Jacobson</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Automations
