import React from 'react'

const Mail = () => {
  return (
    <div  className='flex max-md:hidden items-center text-textColor fixed -right-27 bottom-36  rotate-90  gap-5'>
        <a data-aos-duration="800" data-aos="fade-down-left" href='mailto:shadab@gmail.com' className='dm-mono-regular tracking-widest text-lg hover:text-primaryColor  hover:-translate-x-3 transition transform duration-300 ease-in-out'>shadab@gmail.com</a>
        <hr className='border-2 w-40 text-textColor  rounded-full bg-bgColor border-textColor' />
    </div>
  )
}

export default Mail