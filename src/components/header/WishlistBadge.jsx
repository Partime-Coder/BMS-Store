import React from 'react'
import {GoHeart} from '../../assets/icons/icons.js'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function WishlistBadge() {
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state) => state.auth)
  return (
    <div
          className="relative cursor-pointer p-2"
          onClick={() => isAuthenticated?  navigate('/wishlist') : navigate('/login',{
            state: {
                        message: 'Please log in to view your wishlist',
                        redirectTo: '/wishlist'
    
                    }
          })}
        >
         <GoHeart className="text-white text-2xl" />
        </div>
  )
}

export default WishlistBadge