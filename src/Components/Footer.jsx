import React from 'react'
import { info, socialLinks } from './User'

const Footer = () => {
  const socialIcon = socialLinks.map((sociallink,index)=>{
      return <a data-aos-duration="800" key={index} href={`${sociallink.link}`} className='dm-mono-regular text-lg hover:text-primaryColor hover:-translate-x-3 transition transform duration-300 ease-in-out'>
            <sociallink.icon stroke={1.5}  size={30}/>
            </a>
    })
  
  

    
    
  
  return (
    <div className="mt-20 mb-10 font-mono flex flex-col gap-2 items-center">
        <div className="text-3xl max-md:text-2xl text-primaryColor font-semibold">{info.name}</div>
        <div className="max-md:flex hidden text-textColor gap-8 sm-mx:gap-6">{socialIcon}</div>
        <div className="text-textColor text-xl max-md:text-lg max-sm:text-base max-[475px]:text-sm mobile:text-[14px] max-[475px]:flex flex-col items-center">{new Date().getFullYear()} {info.name} <span className="max-[475px]:hidden"></span> <span>All Rights Reserved</span></div>
    </div>
  )
}
 
export default Footer 