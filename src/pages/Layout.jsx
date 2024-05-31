import React from 'react'
import { Outlet, Link } from "react-router-dom";

import R002MyNavbar from '../components/R002MyNavbar'
import R100Footer from '../components/R100Footer'

function Layout() {
  return (
    <div>
      <R002MyNavbar></R002MyNavbar>
      <Outlet />
      <R100Footer></R100Footer>
    </div>
  )
}

export default Layout