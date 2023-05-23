import React from 'react'

function CourseCard() {
    return (
        <div className='mb-2 w-[300px] h-[240px]'>
            <img src='https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' className='w-[300px] h-[200px] rounded-2xl border-4 border-sky-600 hover:border-sky-700' />
            <h1 className='text-center text-2xl font-bold cursor-pointer'>Here is The Description</h1>
        </div>
    )
}

export default CourseCard