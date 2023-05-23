import React from 'react'

function Counselling(props) {
    return (
        <div className='px-5 py-3'>
            <div style={{ backgroundImage: `url(${require('../LandingPageImages/CounsellingImg.png')})` }} className='flex flex-col h-full w-full py-10 px-5 bg-cover bg-center bg-gray-800'>
                <div className='md:flex items-center px-10 justify-between w-full'>
                    <div className='w-full md:w-[40%] space-y-8'>
                        <h1 className='text-6xl text-[#4D64DE] font-bold'>{props.courseName}</h1>
                        <h1 className = 'text-2xl '>{props.desc}</h1>
                    </div>
                    <div className='w-full md:w-[40%] space-y-8 flex flex-col items-center justify-center '>
                        <div className='text-3xl font-bold'>
                            Helpline Number +910000000000
                        </div>
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