import React from 'react'

function Footer() {
  return (
    <div className='flex items-center justify-center w-full mt-2 mb-2'>
        <div className='w-[97%] bg-[#0693e3] space-y-8 text-white pt-8'>
            <ul className='flex items-center justify-center space-x-8 text-xl font-bold [&>*]:cursor-pointer'>
                <li>About us</li>
                <li>Features</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
            <div className='text-center font-bold text-xl'>
                &#169;2023 - RbGo - Free URL Shortener - All copyright are reserved
            </div>
        </div>
    </div>
  )
}

export default Footer