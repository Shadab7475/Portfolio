import { Text, Timeline } from '@mantine/core'
import { IconDeviceLaptop, IconGitCommit } from '@tabler/icons-react'
import React from 'react'
import { ExperienceInfo } from './User'

const Experience = () => { 
  
  return (
    <div className='px-16 mx-20 max-md:px-6 max-sm:px-2 max-lg:mx-0 my-10 mb-28 font-mono' id='Experience'>
        <h1 className='text-4xl max-sm:text-3xl max-[475px]:text-2xl   mb-10 font-bold text-center text-white'><span className='text-primaryColor'>04&nbsp;</span>Projects Experience</h1>
        <Timeline data-aos="fade-up" data-aos-duration="800" color='#62ffda' active={5} bulletSize={30} lineWidth={2}>
      {

        ExperienceInfo.map((info,i)=>(
            <Timeline.Item className='!pt-12 mobile:!pt-11 !mb-2 max-sm:!p-1' key={i} bullet={<IconDeviceLaptop className='!text-bgColor' size={25} />} >
                <div className='border shadow-[0_0_10px_0_#64FFDA50] hover:-translate-y-2 transition transform duration-300 ease-in-out flex flex-col gap-2 border-primaryColor p-4 rounded-2xl max-sm:p-2'>
                    <div className='flex gap-2 items-center'>
                        <div className='flex flex-col gap-2'>
                            <div className='text-white text-2xl font-semibold max-sm:text-xl max-[475px]:text-lg max-[349px]:text-base'>{info.role}</div>
                            <div className='text-lg font-semibold text-textColor max-md:text-base max-sm:text-sm max-[475px]:text-xs'>{info.company} &#x2022; {info.date}</div>
                            <div className='text-textColor leading-6 text-justify max-md:text-sm max-[475px]:text-xs '>{info.desc}</div>
                            <div className='text-lg font-medium text-textColor max-md:text-base max-sm:text-sm max-[475px]:text-xs flex gap-1'><div className='text-white font-semibold'>Skills:</div>
                            <div className="flex gap-1 flex-wrap">
                            {
                                info.skills.map((skill,i)=>(
                                    <span key={i}> &#x2022; {skill} </span>
                                ))
                            }
                            </div>
                            
                    
                
                            </div>
                        </div>
                    </div>
                </div>
        
            </Timeline.Item>                        
        ))    
     }
       <Timeline.Item bullet={<IconDeviceLaptop size={25} className='!text-bgColor' />}>
       
      </Timeline.Item>

      

      
    </Timeline>
        
    </div>
  )
}

export default Experience