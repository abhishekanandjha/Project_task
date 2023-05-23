import React from 'react'
import Corousel from './Corousel'
import Counselling from './Counselling'
import Courses from './Courses'
import GetInTouch from './GetInTouch'
function LandingPage() {
    const slides = [
        {
            id: 1,
            url: '4.png'
        },
        {
            id: 2,
            url: '10.png'
        },
        {
            id: 3,
            url: '11.png'
        }
    ]
    return (
        <React.Fragment>
            <Corousel images={slides}></Corousel>
            <Counselling />
            <Courses></Courses>
            <GetInTouch />
        </React.Fragment>
    )
}

export default LandingPage