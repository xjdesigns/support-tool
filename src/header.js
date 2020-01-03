import React from 'react'
import logo from './images/logo.svg'

const Header = () => {
	return (
		<div className="stui-header">
			<div className="stui-header__img">
				<img src={logo} alt=""/>
			</div>
		</div>
	)
}

export default Header
