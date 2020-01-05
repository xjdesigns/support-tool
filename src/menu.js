import React from 'react'

const Menu = () => {
  return (
    <div className="stui-menu">
      <div className="stui-menu__pnl">
        <button className="stui-maction">
          <i className="material-icons">
            menu
          </i>
          {/* Menu */}
        </button>
      </div>
      <div className="stui-menu__pnl">
        <button className="stui-maction">
          <i className="material-icons">
            verified_user
          </i>
          {/* User */}
        </button>
      </div>
      <div className="stui-menu__pnl">
        <button className="stui-maction">
          <i className="material-icons">
            sms
          </i>
          {/* SMS lookup */}
        </button>
      </div>
      <div className="stui-menu__pnl">
        <button className="stui-maction">
          <i className="material-icons">
            cake
          </i>
          {/* Cake */}
        </button>
      </div>
    </div>
  )
}

export default Menu
