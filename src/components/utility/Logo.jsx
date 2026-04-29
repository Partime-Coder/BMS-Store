import React from 'react'
import MainLogo from '../../assets/images/logo/MainLogo.png'
import { Link } from 'react-router'

function Logo({ width = 150 }) {
  return (
    <Link to="/">
      <img
        src={MainLogo}
        alt="Main Logo"
        width={width}
      />
    </Link>
  )
}

export default Logo