import { Avatar } from '@mantine/core'
import React from 'react'

const SkillsCard = ({info,index}) => {

    
    
    
  return (
    <div data-aos="fade-up" data-aos-duration="800" key={index} className='w-[47%] shadow-[0_0_10px_0_#64FFDA50] rounded-3xl  mb-3 border border-primaryColor p-5 max-[899px]:p-3 max-sm:w-full'>
        <div className='text-3xl mb-4 text-white text-center max-sm:text-2xl max-[475px]:text-xal font-bold'>{info.title}
        </div>
        <div className='flex gap-3 max-[899px]:gap-2 justify-center flex-wrap'>
            {
                info.skills.map((skill,i)=>(
                    <div key={i} className='flex gap-2 border border-textColor rounded-2xl items-center py-2 px-3 max-[899px]:py-0 max-[899px]:px-1.5 max-[899px]:gap-1 mb-1'>
                    <Avatar className='w-[48px] max-[899px]:w-[36px] max-[349px]:w-[28px] !p-1' variant="transparent" radius="xs" src={`/icon/${skill}.png`} />
                    <div className='text-textColor text-xl font-medium max-sm:text-lg max-[475px]:text-sm '>{skill}</div>
                    </div>
                    
                    

                ))
            }
        </div>

    </div>
  )
}

export default SkillsCard