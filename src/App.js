import React from 'react'
import  './App.css'
import SideBar from './Component/SideBar/SideBar'
import MainDash from './Component/MainDash/MainDash'

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
          <SideBar/>
          <MainDash/>
          <div></div>
          <div></div>
      </div>
    </div>
  )
}

export default App

