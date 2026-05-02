import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../features/user/authSlice';
import { logoutUser } from '../../services/userServices/authService';


function FooterBase() {
  const dispatch = useDispatch();
  return (
    <div className="w-full bg-InkBlack text-White text-xs">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">

        {/* Left */}
        <p>
          © {new Date().getFullYear()} YourApp. All rights reserved.
        </p>
        <button className='cursor-pointer' onClick={() => {
          dispatch(logout());
          logoutUser();
        }}>
          logout
        </button>

        {/* Right */}
        <div className="flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>

      </div>
    </div>
  );
}


export default FooterBase