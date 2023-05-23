import { TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CourseCard from '../Components/CourseCard'
function Courses() {
    return (
        <div className='mt-2 flex h-full w-full justify-center items-center'>
            <div className='w-[97%] bg-[#E8CDC9] h-full'>
                <div className=' border-b-2 border-gray-400 items-center justify-between flex w-full p-2'>
                    <div className='h-16 w-[200px] p-3 cursor-pointer text-2xl bg-white rounded-2xl text-gray-800 font-bold'>Courses</div>
                    <TextField placeholder="Search" className='text-center' InputProps={{
                        endAdornment: (
                            <SearchIcon />
                        ),
                    }}></TextField>
                </div>
                <div className='flex flex-wrap p-2 items-center justify-center space-x-8'>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
        </div>
    )
}

export default Courses