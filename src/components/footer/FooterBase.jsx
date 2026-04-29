import React from 'react'

function FooterBase() {
   return (
    <div className="w-full bg-InkBlack text-White text-xs">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        
        {/* Left */}
        <p>
          © {new Date().getFullYear()} YourApp. All rights reserved.
        </p>

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