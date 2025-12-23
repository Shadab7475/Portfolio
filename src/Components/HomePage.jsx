// import React, { useEffect, useState } from 'react'
import HeaderPage from './HeaderPage'
import Mail from './Mail'
import Social from './Social'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'
import Footer from './Footer'
import { Loader } from './Loader'
import { useEffect, useState } from 'react'
import Projects from './Projects'
import { Toaster } from 'react-hot-toast'




const HomePage = () => {
  const [loading, setLoging] = useState(true)
  useEffect(() => {
    setTimeout(()=>{
      setLoging(false)

    }, 5000)
   
  }, [])
  
  return (
   <div className={`focus-visible:[&_button]:!outline-none min-h-[100dvh] ${loading?"flex":""} items-center overflow-hidden justify-center`}>
    {
      loading !== true ? <>   
      <Toaster/>
      <HeaderPage />
    <About/>
    <Projects/>
    <Skills/>
    <Experience/>
    <Contact/>
    <Footer/>
    <Mail/>
    <Social/>
      
      </> : <Loader/>
    }
    




    
   </div>
  )
}

export default HomePage