import React from 'react'
import DropDownComponent from './DropDownComponent'
import { FaGraduationCap } from 'react-icons/fa'
const Education = () => {
    return (
        <div className='flex flex-col items-center md:ml-20 md:mr-20 mb-20'>
            <DropDownComponent title="NIMS UNIVERSITY" name="BTECH" startDate="2022" endDate="2026" location="Jaipur" icon={<FaGraduationCap />} details={<ul className="list-disc pl-5 space-y-2">
                <li>I am a passionate computer science student </li>
                <li>CGPA: 8.9</li>
                <li>Participated in coding competitions and hackathon</li>
            </ul>
            } />
            

        </div>
    )
}

export default Education
