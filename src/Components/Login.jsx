import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton, TextField,Button,Checkbox,FormControlLabel } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {useState} from 'react'
import { NavLink } from 'react-router-dom';
function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const emailUpdater = (e) => {
        setEmail(e.target.value);
    }
    const passwordUpdater = (e) => {
        setPassword(e.target.value);
    }
  return (
    <div className='flex md:flex-row flex-col h-full items-center justify-center w-full md:h-screen p-5 shadow-sm shadow-gray-800'>
        <div className='w-full md:w-[65%] space-y-2 flex flex-col items-center justify-center'>
            <h1 className='text-7xl text-center font-bold'>Login To Your Account</h1>
            <h1 className='text-xl text-gray-500'>Login Using Social networks</h1>
            <div className='flex items-center justify-center space-x-2'>
                <IconButton color="primary">
                    <FacebookIcon className='rounded-full w-[50px] h-[50px]'/>
                </IconButton>
                <IconButton color="error">
                    <GoogleIcon></GoogleIcon>
                </IconButton>
                <IconButton color="primary">
                    <LinkedInIcon></LinkedInIcon>
                </IconButton>
            </div>
            <form className='border-t-2 border-gray-400 pt-5 w-full p-5 space-y-8 flex flex-col justify-center items-center'>
                <TextField value = {email} onChange={emailUpdater} className='w-full' variant='outlined' label = 'Email'></TextField>
                <TextField value = {password} onChange={passwordUpdater} className='w-full' variant='outlined' label='Password' type='password'></TextField>
                <div className='flex text-blue w-full justify-between uppercase'>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
                    <NavLink to = '/forgotpassword'><Button>Forgot Password</Button></NavLink>
                </div>
                <button className = 'w-[40%] w-[250px] h-[70px]  rounded-2xl bg-teal-500 text-xl text-white font-bold '>Sign In</button>
            </form>
        </div>
        <div className='w-full py-5 md:w-[35%] space-y-8 text-white bg-gray-700 h-[85%] flex flex-col items-center justify-center '>
            <h1 className='text-7xl font-bold'>New Here?</h1>
            <div className='text-xl'>
                <p>Sign Up and discover a great</p>
                <p>ammount of new Oppotunities!</p>
            </div>
            <button className = 'w-[200px] h-[70px] text-gray-800 hover:bg-gray-200 text-xl rounded-2xl bg-white text-center'>Sign up</button>
        </div>
    </div>
  )
}

export default Login