import React from 'react'
import { BsPerson } from '../../assets/icons/icons.js'
import { useSelector } from 'react-redux'

function ProfileButton() {
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth)

  return (
    <div className="flex items-center justify-center gap-0.5 px-3 py-2 cursor-pointer w-full md:w-auto">

      {/* 🔹 LEFT (text) */}
      <div className="flex flex-col leading-tight text-left">

        {/* Mobile → ONLY name */}
        <span className="text-sm text-white md:hidden">
          {isAuthenticated ? currentUser.firstName : "Guest"}
        </span>

        {/* Desktop → full text */}
        <span className="hidden md:block text-xs text-gray-300">
          {isAuthenticated ? `Hello, ${currentUser.firstName}` : "Hello, Guest"}
        </span>

        <span className="hidden md:flex text-sm font-semibold text-white items-center gap-1">
          Account & Lists
        </span>
      </div>

      {/* 🔹 Icon */}
      <BsPerson
        size={24}
        className="text-white md:order-first md:mr-2"
      />

    </div>
  )
}

export default ProfileButton