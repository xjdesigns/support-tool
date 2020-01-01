import React, { useState } from 'react'
import Menu from './menu'
import Upane from './upane'
import Main from './main'
import UserSearch from './user-search'

const App = () => {
  const [selected, setSelected] = useState('none')
  const [loading, setLoading] = useState(false)

  const handleSelection = selected => {
    setLoading(true)

    setTimeout(() => {
      setSelected(selected)
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="stui-core">
      <Menu />
      {selected === 'none' ? (
        <>
        <UserSearch setSelected={setSelected} />
        <div className="stui-main">
          <div className="stui-main__empty">
            <p>No user</p>
          </div>
        </div>
        </>
      ) : (
        <>
        <Upane handleSelection={handleSelection} setSelected={setSelected} />
        <Main loading={loading} selected={selected} setSelected={setSelected} />
        </>
      )}
    </div>
  )
}

export default App
