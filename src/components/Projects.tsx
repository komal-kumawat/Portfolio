import React from 'react'
import ProjectComponent from './ProjectComponent'
import connectLiveImg from "../app/Images/connectLive-img.png"

const Projects = () => {
    return (
        <div className='grid md:grid-cols-3  items-center md:ml-20 md:mr-20'>
            <ProjectComponent
                projectName="ConnectLive"
                title="A video conferencing platform"
                backgroundImage={connectLiveImg.src} // <-- Use .src
                deployedLink="https://connect-live-theta.vercel.app/"
                githubLink="https://github.com/komal-kumawat/connectLive"
            />
            <ProjectComponent
                projectName="ConnectLive"
                title="A video conferencing platform"
                backgroundImage={connectLiveImg.src} // <-- Use .src
                deployedLink="https://connect-live-theta.vercel.app/"
                githubLink="https://github.com/komal-kumawat/connectLive"
            />
            <ProjectComponent
                projectName="ConnectLive"
                title="A video conferencing platform"
                backgroundImage={connectLiveImg.src} // <-- Use .src
                deployedLink="https://connect-live-theta.vercel.app/"
                githubLink="https://github.com/komal-kumawat/connectLive"
            />
                        <ProjectComponent
                projectName="ConnectLive"
                title="A video conferencing platform"
                backgroundImage={connectLiveImg.src} // <-- Use .src
                deployedLink="https://connect-live-theta.vercel.app/"
                githubLink="https://github.com/komal-kumawat/connectLive"
            />
            <ProjectComponent
                projectName="ConnectLive"
                title="A video conferencing platform"
                backgroundImage={connectLiveImg.src} // <-- Use .src
                deployedLink="https://connect-live-theta.vercel.app/"
                githubLink="https://github.com/komal-kumawat/connectLive"
            />
            <ProjectComponent
                projectName="ConnectLive"
                title="A video conferencing platform"
                backgroundImage={connectLiveImg.src} // <-- Use .src
                deployedLink="https://connect-live-theta.vercel.app/"
                githubLink="https://github.com/komal-kumawat/connectLive"
            />
        </div>
    )
}

export default Projects
