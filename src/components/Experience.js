import { useState } from 'react'
import '../App.css'

export default function Experience() {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)

    return (

        <div class='grid grid-cols-1 gap-3 ml-8 '>
            <div >
                <span class="text-5xl font-light text-red-500 ">Software Developer</span><br />
                <span class="text-3xl"> Samarth Solutions</span>
                <span class='grid grid-cols-1'>
                    {show1 ?
                        <>
                            <span><i class="uil uil-angle-right"></i>Implemented a web application for the company that successfully addressed the issue of waiting till a room is available for use.</span>
                            <span><i class="uil uil-angle-right"></i>Integrated third-party programs and software components and upgrade the existing software.</span>
                            <span><i class="uil uil-angle-right"></i>worked with a group of programmers to create flowcharts and algorithms to address specific issues.</span>
                            <span><i class="uil uil-angle-right"></i>Deployed projects using Ansible and have a basic knowledge of Terraform.</span>
                        </>

                        : ""}
                    <button class='text-left' className='show1' onClick={() => setShow1(!show1)}>
                        {show1 ? <i class="uil uil-times text-2xl"></i> : <i class="uil uil-plus text-2xl"></i>}

                    </button>

                </span>
                <br />

                <span class="text-5xl font-light text-red-500 ">Software QA Engineer/ QA Analyst</span><br />
                <span class="text-3xl">  Supreme Tech Pvt. Ltd.</span>
                <span class='grid grid-cols-1'>
                    {show2 ?
                        <>
                            <span><i class="uil uil-angle-right"></i>Pioneered testing using agile methodologies which increase productivity by from 5% to 30%.</span>
                            <span><i class="uil uil-angle-right"></i>52% Cut down on paperwork by implementing testing tools like Selenium, Appium, and BlazeMeter.</span>
                            <span><i class="uil uil-angle-right"></i>Scale down the user errors and drop-offs to 0.2% from 8% following SDLC.</span>
                            <span><i class="uil uil-angle-right"></i>Hands-on experience in using version control systems like GIT to test softwares as a team.</span>
                            <span><i class="uil uil-angle-right"></i>Creator of automated test scripts which leads to 78% raise in test coverage.</span>
                            <span><i class="uil uil-angle-right"></i>Assisted in gathering requirements, making test cases, software quality tests, and software demonstrations.</span>
                        </>
                        : ""}
                    <button class='text-left' className='show2' onClick={() => setShow2(!show2)} >
                        {show2 ? <i class="uil uil-times text-2xl"></i> : <i class="uil uil-plus text-2xl"></i>}
                    </button>

                </span >
                <br />

                <span class="text-5xl font-light text-red-500 " >IT Support Specialist</span><br />
                <span class="text-3xl">  West India Equipments Pvt. Ltd.</span>
                <span class='grid grid-cols-1'>
                    {show3 ?
                        <>
                            <span><i class="uil uil-angle-right"></i>Implemented a web application for the company that successfully addressed the issue of waiting till a room is available for use.</span>
                            <span><i class="uil uil-angle-right"></i>Integrated third-party programs and software components and upgrade the existing software.</span>
                            <span><i class="uil uil-angle-right"></i>worked with a group of programmers to create flowcharts and algorithms to address specific issues.</span>
                            <span><i class="uil uil-angle-right"></i>Deployed projects using Ansible and have a basic knowledge of Terraform.</span>
                        </>
                        : ""}
                    <button class='text-left' className='show3' onClick={() => setShow3(!show3)}>
                        {show3 ? <i class="uil uil-times text-2xl"></i> : <i class="uil uil-plus text-2xl"></i>}
                    </button>
                </span>
            </div>
        </div >
    )
}
