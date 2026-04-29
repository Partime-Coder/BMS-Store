import React from 'react'
import {Navbar, SecondaryNav  } from '../index.js'
function Header() {
  return (
    <header className='w-full'>
      <Navbar />
      <SecondaryNav />
    </header>
  )
}

export default Header