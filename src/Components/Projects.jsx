import React from 'react'
import ProjectCard from './ProjectCard'
import { ProjectInfo } from "./User";





const Projects = () => {
   
       
      
  return (
    <div className='xl:px-16 xl:mx-20  my-10 dm-mono-regular md:px-6 xl:px-6 ' id='Projects'>
        <h1 className='text-4xl  max-[475px]:text-2xl text-center mb-10 font-bold text-white'><span className='text-primaryColor'>02&nbsp;</span>Projects</h1>
        <div className='flex flex-wrap  justify-around max-[475px]:h-full max-md:justify-between max-sm:justify-center gap-4 max-md:gap-2'>
            {
                ProjectInfo.map((info,i)=>(
                    <ProjectCard info={info} index={i} />
                    
                ))
            }
            
           
        </div>

    </div>
  )
}

export default Projects