import React from 'react'

function CourseBuyingCard(props) {
    return (
        <div className='flex flex-col md:flex-row p-5 justify-between items-center'>
            <div className='p-2 space-y-6 w-[60%] sm:w-[30%] md:w-[20%] flex flex-col justify-center shadow-lg shadow-gray-200'>
                <h1 className='text-3xl font-bold'>Course Name</h1>
                <div className='flex items-center justify-between'>
                    <h1 className=''>Course Duration</h1>
                    <h1 className=''>Number of Students</h1>
                </div>
                <div>
                    Here is the description
                </div>
                <div className='flex justify-center'>
                    <button className='text-white w-[80%] bg-violet-800 text-center p-2'>Add to Cart</button>
                </div>
            </div>
            <div className='w-[40%]'>
                <iframe className='w-[80%] h-[300px]'
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
            </div>
        </div>

    )
}

export default CourseBuyingCard