import React, { useState } from 'react'

const Accordion = ({ title, secondary, children, open = false, error }) => {
  const [isActive, toggleActive] = useState(open)

  return (
    <div className={`spx-ac ${isActive ? 'is-active' : ''} ${error ? 'is-error' : ''}`}>
      <div className="spx-ac__pane">
        <div className="spx-ac-title">
          <strong>{title}</strong>
        </div>
        <div className="spx-ac-secondary">
          {secondary}
        </div>
        <div className="spx-ac-action">
          <button
            className="spx-btn"
            data-icon="keyboard_arrow_down"
            onClick={() => toggleActive(!isActive)}
          />
        </div>
      </div>
      <div className="spx-ac__content">
        {children}
      </div>
    </div>
  )
}

export default Accordion
