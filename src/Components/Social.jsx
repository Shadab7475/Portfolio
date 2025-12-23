import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import React from 'react'
import { socialLinks } from './User'

const Social = () => {
  

  const socialIcon = socialLinks.map((sociallink,index)=>{
    return <a data-aos="fade-up-left" data-aos-duration="800" key={index} href={`${sociallink.link}`} className='dm-mono-regular text-lg hover:text-primaryColor hover:-translate-x-3 transition transform duration-1000 ease-in-out'>
          <sociallink.icon className='-rotate-90' size={35}/>
          </a>
  })

  return (
     <div  className='flex max-md:hidden  items-center text-textColor fixed -left-18 bottom-30  rotate-90  gap-8'>
        {socialIcon}
          
        <hr className='border-2 w-40 text-textColor hover:text-primaryColor rounded-full bg-bgColor border-textColor' />
    </div>
  )
}

export default Social