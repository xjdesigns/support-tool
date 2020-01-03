import React from 'react'
import logo from './images/smartthings_sym.png'

const Menu = () => {
  return (
    <div className="stui-menu">
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
            my_location
          </i>
          {/* Locations */}
        </button>
      </div>
      <div className="stui-menu__pnl">
        <button className="stui-maction">
          <i className="material-icons">
            devices
          </i>
          {/* Devices */}
        </button>
      </div>
      <div className="stui-menu__pnl">
        <button className="stui-maction">
          <i className="material-icons">
            device_hub
          </i>
          {/* Hubs */}
        </button>
      </div>
      <div className="stui-menu__pnl">
        <button className="stui-maction">
          <i className="material-icons">
            widgets
          </i>
          {/* Installed Apps */}
        </button>
      </div>
      <div className="stui-menu__pnl">
        <button className="stui-maction">
          <i className="material-icons">
            cloud_done
          </i>
          {/* Automations */}
        </button>
      </div>
    </div>
  )
}

export default Menu
