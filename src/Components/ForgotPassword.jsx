import React from 'react'
import { useState } from 'react'
import { TextField, Button } from '@mui/material'
function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [otp, setotp] = useState("");
    const [otpSent, setotpSent] = useState(false);
    const [password, setPassword] = useState("");
    const [confpassword, setconfpassword] = useState("");
    const [phone,setPhone] = useState("");

    const phoneChanger = (e) => {
        setPhone(e.target.value);
    }
    const passwordChanger = (e) => {
        setPassword(e.target.value);
    }
    const confpasswordChanger = (e) => {
        setconfpassword(e.target.value);
    }
    const emailChanger = (e) => {
        setEmail(e.target.value);
    }
    const otpChanger = (e) => {
        setotp(e.target.value);
    }
    const handleSendOtp = async () => {

    }

    const handleResetPassword = async () => {

    }

    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <div className='flex justify-between items-center p-5'>
                <div className='border-2 border-gray-500 p-5 rounded-lg space-y-5'>
                    <h1 className='text-2xl font-bold'>Forgot Password</h1>
                    <div>
                        <TextField disabled={otpSent} value={email} onChange={emailChanger} label="Email" variant="outlined" sx={{ width: 300 }} />
                    </div>
                    <p>OR</p>
                    <div>
                        <TextField disabled={otpSent} value={phone} onChange={phoneChanger} label="Phone" variant="outlined" sx={{ width: 300 }} />
                    </div>
                    <div>
                        <Button disabled={otpSent} onClick={handleSendOtp} variant="contained" sx={{ width: 300 }}>Send OTP</Button>
                    </div>
                    <div>
                        <TextField disabled={otpSent ? false : true} value={otp} onChange={otpChanger} label="OTP" variant="outlined" sx={{ width: 300 }} />
                    </div>
                    <div>
                        <TextField disabled={otpSent ? false : true} value={password} onChange={passwordChanger} type="password" label="Password" variant="outlined" sx={{ width: 300 }} />
                    </div>
                    <div>
                        <TextField disabled={otpSent ? false : true} value={confpassword} onChange={confpasswordChanger} type="password" label="Confirm Password" variant="outlined" sx={{ width: 300 }} />
                    </div>
                    <div>
                        <Button disabled={otpSent ? false : true} onClick={handleResetPassword} variant="contained" sx={{ width: 300 }}>Reset Password</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword