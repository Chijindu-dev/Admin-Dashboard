import React from 'react'
import  './App.css'
import SideBar from './Component/SideBar/SideBar'
import MainDash from './Component/MainDash/MainDash'
import RightSide from './Component/RightSide/RightSide'

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
          <SideBar/>
          <MainDash/>
          <RightSide/>
      </div>
    </div>
  )
}

export default App

