import React from 'react'
import Corousel from './Corousel'
import CourseCounselling from './CourseCounselling'
import CourseBuyingCard from './CourseBuyingCard'
function CoursePage(props) {
  return (
    <div>
        <Corousel images = {props.images}/>
        <CourseCounselling courseName = {props.courseName} desc={props.desc}/>
        <CourseBuyingCard/>
    </div>
  )
}

export default CoursePage