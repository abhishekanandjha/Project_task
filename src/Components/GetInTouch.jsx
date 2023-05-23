import { IconButton } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailIcon from '@mui/icons-material/Mail';
function GetInTouch() {
    return (
        <div className='w-[full] h-full flex items-center justify-center mt-2'>
            <div className='w-[97%] text-white flex flex-col bg-gradient-to-r from-[#20A0E9] from-10% via-[#1EA48B] via-30% to-[#0D36BD] to-100%'>
                <h1 className='text-center text-2xl text-white'>Get in Touch</h1>
                <div className='md:flex items-center justify-between p-2'>
                    <div className='space-x-2'>
                        <IconButton color="inherit">
                            <TwitterIcon/>
                        </IconButton>
                        <IconButton href="https://www.instagram.com/collegejaankaar" color="inherit">
                            <InstagramIcon/>
                        </IconButton>
                        <IconButton href = "https://www.youtube.com/@collegejaankaarofficial" color="inherit">
                            <YouTubeIcon/>
                        </IconButton>
                    </div>
                    <div className='flex space-x-4'>
                        <div><span><WhatsAppIcon/></span>+918209441938</div>
                        <div><span><PhoneInTalkIcon/></span>+918209441938</div>
                        <div><span><MailIcon/></span><a href="mailto:support@collegejaankaar.com">support@collegejaankaar.com</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch