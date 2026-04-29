import React from 'react'
import BrandLogoImage from '../../assets/images/logo/BrandLogo.png'
function BrandLogo({SquareSize = 120}) {
      return (
    <div
      className="bg-InkBlack flex justify-center items-center rounded-lg"
      style={{ width: SquareSize, height: SquareSize }}
    >
      <img className="w-full" src={BrandLogoImage} alt="Brand Logo" />
    </div>
  );
}

export default BrandLogo