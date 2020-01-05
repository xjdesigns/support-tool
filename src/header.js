import React from 'react'
import logo from './images/logo.svg'

const Header = () => {
	return (
		<div className="stui-header">
			<div className="stui-header__img">
				<img src={logo} alt=""/>
			</div>

      <div className="stui-header__actions">
        <div className="stui-header-username">
          <p>Jason Jacobson: L2 agent</p>
        </div>
        <div className="stui-header-usericon">
          <i className="material-icons">
            person
          </i>
        </div>
      </div>
		</div>
	)
}

export default Header
