import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { logout } from '../../features/user/authSlice'
import { logoutUser } from '../../services/userServices/authService'


function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  return (
     <div className='flex flex-col items-center'>
          <h1>Welcome to My App</h1>
          <p>This is a simple React app.</p>
          <button onClick={() => navigate('/login')}>Go to Login</button>
          <button onClick={() => {
            dispatch(logout());
            logoutUser();
          }}>
            logout
          </button>
     </div>
  )
}

export default Home