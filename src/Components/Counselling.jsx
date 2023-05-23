import React from 'react'

function Counselling() {
    return (
        <div className='px-5 py-3'>
            <div style={{ backgroundImage: `url(${require('../LandingPageImages/CounsellingImg.png')})` }} className='flex flex-col h-full w-full py-10 px-5 bg-cover bg-center bg-gray-800'>
                <div className='text-center space-y-4 h-[40%]'>
                    <h1 className='text-3xl md:text-6xl font-bold tracking-wider text-[#134682]'>Get the Edge you need to Succeed after </h1>
                    <h1 className='text-3xl md:text-6xl font-bold tracking-wider text-[#ff6a00]'>12th</h1>
                    <h1 className='text-3xl md:text-6xl font-bold tracking-wider text-[#134682]'>with our counselling services</h1>
                </div>
                <div className='md:flex items-center px-10 justify-between w-full'>
                    <div className='w-full md:w-[40%] space-y-8'>
                        <input type="text" placeholder="Search for information on 150+ carrer options" className='w-full text-xl border-2 border-gray-400 bg-gray-100 p-2 text-gray-600 h-12 rounded-2xl shadow-md shadow-gray-200' />
                        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 h-20 w-[200px] text-white text-2xl font-bold text-center rounded-2xl'>
                            Enroll Now
                        </button>
                        <h1 className='text-3xl font-bold text-[#ff6a00]'>Helpline Number +910000000000</h1>
                        <h1 className='text-2xl font-bold text-[#134682]'>What's After the 12th?</h1>
                    </div>
                    <div className='w-full md:w-[40%] space-y-8 flex flex-col items-center justify-center '>
                        <iframe className='w-full h-[300px]'
                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                        <img src={require('../LandingPageImages/26.png')} className='h-50 w-[400px] cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counselling