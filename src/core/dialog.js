import React from 'react'

const Dialog = ({ text, cancelAction, confirmAction, children }) => {
  return (
    <>
      <div className="stui-dialog">
        <div className="stui-dialog__content">
          {children}
        </div>

        <div className="stui-dialog__actions">
          <button
            className="spx-btn spx-btn--pr"
            onClick={cancelAction}
          >
            Cancel
          </button>

          <button
            className="spx-btn spx-btn--pr"
            onClick={confirmAction}
          >
            Confirm
          </button>
        </div>
      </div>
      <div className="stui-doverlay" />
    </>
  )
}

export default Dialog
