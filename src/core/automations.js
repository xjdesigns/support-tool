import React from 'react'

const Automations = () => {
  return (
    <div className="stui-main__pnl">
      <h4>Automations</h4>
      <div className="spx-mg-bt-12">
        <div className="stui-grid stui-grid--2">
          <div className="stui-tile">
            <h5>IF</h5>
            <p>Multipurpose Sensor</p>
            <p>Contact sensor: open</p>
          </div>

          <div className="stui-tile">
            <h5>THEN</h5>
            <p>Send text message</p>
            <p>sensor open</p>
            <p>Jason Jacobson</p>
          </div>
        </div>
      </div>

      <div>
        <button className="spx-btn spx-btn--pr spx-btn--sm">
          See all data
        </button>
      </div>
    </div>
  )
}

export default Automations
