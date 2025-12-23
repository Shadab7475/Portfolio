import { IconHexagonLetterS } from "@tabler/icons-react"
import SideBar from "./SideBar"
import { useEffect, useState } from "react"
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";



const HeaderPage = () => {
  const links = ["About","Projects", "Skills","Experience","Contact"]
  const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [shadow, setShadow] = useState(false);
  const controlNavbar = ()=>{
    if (window.scrollY>lastScrollY && window.scrollY>70) setShow(false)
    else setShow(true)
    if(window.scrollY>70)setShadow(true);
      else setShadow(false);
      setLastScrollY(window.scrollY)

     //          xsm  mobile  xs tablat  bs laptop     bs max-[899px]:   xs max-[475px]  xsm max-[349px]:
  }
 useEffect(()=>{
        window.addEventListener('scroll', controlNavbar);
        return ()=>window.removeEventListener('scroll', controlNavbar);
    })

  return (
    <nav className={`bg-bgColor ${show?"translate-y-0":"-translate-y-28"} ${shadow?"shadow-[0px_10px_30px_-10px_#020c1b]":""} fixed w-full top-0  h-20 laptop:h-28  z-10 flex justify-between dm-mono-regular items-center px-10 max-[475px]:px-4 max-[475px]:h-20`} >
      <IconHexagonLetterS size={isMobile?45:60} className="relative z-10" color="#64FFDA" stroke={1.6}/>
      <div className=" md:flex hidden gap-8">
        {
          links.map((link,index)=>(
            <a key={index} className=" text-textColor text-lg font-mono hover:text-primaryColor duration-200 transition " href={`#${link}`}><span className="text-primaryColor">0{index+1}. </span>{link}</a>
          ))
        }
      </div>
      <div className="laptop:flex gap-1 md:hidden ">
       <SideBar links={links} />
      </div>
      
    </nav>
  )
}

export default HeaderPage



