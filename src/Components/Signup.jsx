import { TextField, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { NavLink } from 'react-router-dom';
function Signup() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [whatsapp, setWhatsApp] = useState("");

    const firstUpdater = (e) => {
        setFirst(e.target.value);
    }
    const secondUpdater = (e) => {
        setSecond(e.target.value);
    }
    const emailUpdater = (e) => {
        setEmail(e.target.value);
    }
    const passwordUpdater = (e) => {
        setPassword(e.target.value)
    }
    const confirmPasswordUpdater = (e) => {
        setConfirmPassword(e.target.value);
    }
    const phoneUpdater = (e) => {
        setPhone(e.target.value);
    }
    const WhatsappUpdater = (e) => {
        setWhatsApp(e.target.value);
    }

    const handleSignup = () => {

    }

    return (
        <div className='flex w-full h-full md:h-screen justify-center items-center'>
            <div className='bg-teal-400 rounded-lg border-2 w-full md:w-[50%] px-[60px] py-[40px] flex flex-col items-center justify-center space-y-4'>
                <form className='bg-[white] space-y-4 border-gray-400 rounded-lg  p-5'>
                    <h1 className='font-bold text-3xl text-blue-500'>Signup</h1>
                    <div className='flex space-x-5'>
                        <TextField value={first} onChange={firstUpdater} className='w-[50%] rounded-lg' variant="outlined" label="First Name"></TextField>
                        <TextField value={second} onChange={secondUpdater} className='w-[50%]' variant="outlined" label="Last Name"></TextField>
                    </div>
                    <div>
                        <TextField value={email} onChange={emailUpdater} className='w-full' variant="outlined" label="Email"></TextField>
                    </div>
                    <div>
                        <TextField value={password} onChange={passwordUpdater} className='w-full' variant="outlined" type="Password" label="Password"></TextField>
                    </div>
                    <div>
                        <TextField value={confirmPassword} onChange={confirmPasswordUpdater} className='w-full' variant="outlined" type="password" label="Confirm Password"></TextField>
                    </div>
                    <div>
                        <TextField InputProps={{
                            startAdornment: (
                                <LocalPhoneIcon color='primary' className = 'mr-2'></LocalPhoneIcon>
                            ),
                        }} value={phone} onChange={phoneUpdater} className='w-full' variant="outlined" maxLength={10} label="Phone Number"></TextField>
                    </div>

                    <div>
                        <TextField InputProps={{
                            startAdornment: (
                                <WhatsAppIcon color='primary' className='mr-2'></WhatsAppIcon>
                            ),}} value={whatsapp} onChange={WhatsappUpdater} className='w-full' variant="outlined" maxLength={10} label="Whatsapp Number"></TextField>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <NavLink to = '/login'><Button>Login</Button></NavLink>
                        <NavLink to = '/forgotpassword'><Button>Forgot Password</Button></NavLink>
                    </div>
                    <Button onClick={handleSignup} className='w-full' variant='contained' size="large">Signup</Button>
                </form>
            </div>
        </div>
    )
}

export default Signup