import React from 'react'
import NavBar from './NavBar'
import { Link, Outlet } from 'react-router-dom'

export const MainComponent = () => {
  return (
    <div>
        <NavBar/>
        <Outlet style={{'marginTop':'81px'}} />
    </div>
  )
}
