import React from 'react'
import { SkillInfo } from './User'
import SkillsCard from './SkillsCard'

const Skills = () => {
  
  return (
    <div className='px-16 max-md:px-6 my-10 dm-mono-regular ' id='Skills'>
        <h1 className='text-4xl max-sm:text-3xl max-[475px]:text-2xl mb-10 font-bold text-center text-white'><span className='text-primaryColor'>03&nbsp;</span>Skills</h1>
        <div className='flex flex-wrap justify-around max-md:justify-between max-sm:justify-center gap-4 max-md:gap-2'>
        {
            SkillInfo.map((info, i)=>(
                <SkillsCard  info={info} index={i} />
                

            ))
        }  
        </div>
    </div>
  )
}

export default Skills