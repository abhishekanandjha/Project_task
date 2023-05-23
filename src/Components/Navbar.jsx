import { TextField, IconButton, Hidden } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { HideImage } from '@mui/icons-material';
function Navbar() {
    const [isHidden, setIsHidden] = useState(true);
    const handleClick = () => {
        setIsHidden(!isHidden);
    }
    return (
        <div className='flex md:flex-row flex-col justify-between w-full bg-gray-100 p-2 border-b-2 border-gray-400 '>
            <div className='flex bg-gray-100 pt-2 justify-between h-full'>
                <div>
                    <img className='h-12 w-14' src="https://i.pinimg.com/originals/16/e8/f9/16e8f9e635ea6890583ccb7075eede4f.jpg" />
                </div>

                <div className='md:hidden'>
                    <IconButton onClick={handleClick}><MenuIcon /></IconButton>
                </div>
            </div>
            <ul className={`${isHidden ? 'hidden' : 'flex-col'} md:flex md:items-center 
                           justify-between space-x-4 font-bold font-saas 
                           [&>*]:cursor-pointer [&>*]:text-gray-600 [&>*]:py-2 
                            md:[&>*]:py-0 pt-2`}>
                <li>
                    Categories
                </li>
                <li>
                    <TextField placeholder="Search" className='text-center' InputProps={{
                        endAdornment: (
                            <SearchIcon />
                        ),
                    }}></TextField>
                </li>
                <NavLink to='/home'>
                    <li>
                        Home
                    </li>
                </NavLink>
                <NavLink to='/courses'><li>Courses</li></NavLink>
                <NavLink to='/contact'>
                    <li>Contact Us</li>
                </NavLink>
                <NavLink to='/cart'>
                    <li>
                        <IconButton>
                            <ShoppingCartIcon />
                        </IconButton>
                    </li>
                </NavLink>
                <li>
                    <div className='flex space-x-4 justify-between'>
                        <NavLink to='/login'><button className='bg-white text-black hover:bg-gray-200 shadow-lg shadow-gray-800 p-2 rounded-2xl'>Login</button></NavLink>
                        <NavLink to='/signup'><button className='bg-sky-700 text-white hover:bg-sky-800 shadow-lg shadow-gray-800 p-2 rounded-2xl'>Sign up</button></NavLink>
                    </div>
                </li>
                <li>
                    <IconButton>
                        <LanguageIcon />
                    </IconButton>
                </li>
            </ul>
        </div>
    )
}

export default Navbar