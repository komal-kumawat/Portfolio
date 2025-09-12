import React from 'react'
import DropDownComponent from './DropDownComponent'
import { FaGraduationCap } from 'react-icons/fa'
const Education = () => {
    return (
        <div  className='flex flex-col items-center md:ml-20 md:mr-20'>
            <DropDownComponent title="NIMS UNIVERSITY" name="BTECH" startDate="2022" endDate="2026" location="Jaipur" icon={<FaGraduationCap />} details={<p>I’m a CS student at NIMS University, passionate about coding.</p>
            } />
            <DropDownComponent title="NIMS UNIVERSITY" name="BTECH" startDate="2022" endDate="2026" location="Jaipur" icon={<FaGraduationCap />} details={<p>I’m a CS student at NIMS University, passionate about coding.</p>
            } /><DropDownComponent title="NIMS UNIVERSITY" name="BTECH" startDate="2022" endDate="2026" location="Jaipur" icon={<FaGraduationCap />} details={<p>I’m a CS student at NIMS University, passionate about coding.</p>
            } />
        </div>
    )
}

export default Education
