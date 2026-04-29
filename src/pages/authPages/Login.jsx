import React from 'react'
import {Logo, LoginForm} from '../../components/index.js'
import { useNavigate } from 'react-router'

function Login() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-InkBlack" >
      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-sm">
 
          {/* Logo */}
          <div className="flex flex-col items-center gap-1 mb-6">
            <Logo />
            <p className="text-xs text-slate-400 tracking-widest uppercase">Your everyday store</p>
          </div>
 
          {/* Card */}
          <LoginForm />
 
          {/* Footer */}
          <div className="mt-6 flex justify-center gap-5 text-xs text-slate-400">
            <a href="#" className="hover:text-slate-600 transition">Conditions of Use</a>
            <a href="#" className="hover:text-slate-600 transition">Privacy Notice</a>
            <a href="#" className="hover:text-slate-600 transition">Help</a>
          </div>
          <p className="text-center text-xs text-slate-300 mt-2">© 2025 Shopnest. All rights reserved.</p>
 
        </div>
      </div>
    </div>
  )
}

export default Login