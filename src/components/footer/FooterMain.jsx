import React from 'react'
import { Logo, BrandLogo } from '../index.js'
function FooterMain() {
    return (
        <div className='bg-PrussainBlue text-White px-4 py-10'>

            <div className='max-w-7xl mx-auto'>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>

                    {/* LOGO */}
                    <div className=' col-span-2 md:col-span-1 flex md:flex-col gap-4'>
                        <div className='p-6 flex justify-center'>
                            <Logo width={120}/>
                        </div>
                        <div className='p-6 flex justify-center'>
                            <BrandLogo SquareSize={100} />
                        </div>
                    </div>

                    {/* USER */}
                    <div className='col-span-2 md:col-span-1 flex md:flex-col gap-4 '>
                        <div className='w-1/2'>
                            <h3 className=' text-lg font-medium mb-2'>User</h3>
                            <ul className='space-y-1 '>
                                <li>Profile</li>
                                <li>Wishlist</li>
                                <li>Address</li>
                            </ul>
                        </div>
                        <div className='w-1/2'>
                        <h3 className=' text-lg font-medium mb-2'>Product</h3>
                        <ul className='space-y-1 text-sm'>
                            <li>Cart</li>
                            <li>Order</li>
                        </ul>
                        </div>

                    </div>

                    {/* CATEGORY */}
                    <div>
                        <h3 className=' text-lg font-medium mb-2'>Category</h3>
                        <ul className='space-y-1 text-sm'>
                            <li>Mobile</li>
                            <li>Laptop</li>
                            <li>Women</li>
                            <li>Men</li>
                            <li>Grocery</li>
                            <li>Furniture</li>
                        </ul>
                    </div>

                    {/* SUPPORT */}
                    <div>
                        <h3 className=' text-lg font-medium mb-2'>Support</h3>
                        <ul className='space-y-1 text-sm'>
                            <li>Contact Us</li>
                            <li>Help Support</li>
                            <li>More...</li>
                        </ul>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default FooterMain