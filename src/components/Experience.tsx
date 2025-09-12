import React from 'react'
import DropDownComponent from './DropDownComponent'
import { FaBuilding } from 'react-icons/fa'

const Experience = () => {
    return (
        <div className='flex flex-col items-center md:ml-20 md:mr-20 mb-20'>
            <DropDownComponent
                title="IBM INTERNSHIP"
                name="Web Development Intern"
                startDate="June 2024"
                endDate="August 2024"
                location="Remote"
                icon={<FaBuilding />}
                details={
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Worked on building scalable web applications using <b>React.js</b>, <b>Node.js</b>, and <b>MongoDB</b>.</li>
                        <li>Gained hands-on experience in full-stack development and collaborated with a team on real-world projects.</li>
                    </ul>
                }
            />
        </div>
    )
}

export default Experience
