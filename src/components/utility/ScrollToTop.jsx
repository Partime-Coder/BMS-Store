import React from 'react'
import { Button } from "../index.js";

function ScrollToTop() {

     const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
     <div className="w-full bg-DuskBlue ">
      <Button
        onClick={handleScrollTop}
        className="w-full py-3 flex justify-center items-center  "
      >
        Back to top
      </Button>
    </div>
  )
}

export default ScrollToTop