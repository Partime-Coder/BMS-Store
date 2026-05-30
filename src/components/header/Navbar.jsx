import React from 'react'
import { Logo, SearchInput, CartButton, ProfileButton
 } from '../index.js'
import { Link } from 'react-router'
Link
function Navbar() {
  return (
    <div className='w-full  bg-InkBlack text-white'>
      <div className='px-2'>

        <div className='h-16 flex items-center gap-4'>

          {/* LEFT 60% */}
          <div className='flex items-center gap-4 flex-[0.6]'>

            <Logo />
            <div className='flex-1 md:block hidden'>
              <SearchInput />
            </div>

          </div>

          {/* RIGHT 40% */}
          <div className='flex items-center justify-end gap-6 flex-[0.4]'>
            <ProfileButton />
            <Link to="/cart">
              <span>Cart</span>
            </Link>
            <span>Wishlist</span>
          </div>

        </div>
        <div className='md:hidden pb-3'>
          <SearchInput />
        </div>

      </div>
    </div>
  )
}

export default Navbar