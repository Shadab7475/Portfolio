import React from "react";
import { info } from "./User";
import profileImg from "../assets/profileImage.jpg";

import Typewriter from "typewriter-effect";
import { Button } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import ResumeViewer from "./ResumeViewer";
import { IconDownload } from '@tabler/icons-react';
import Particles from "../Components/magicUi/Particles";
import NeonGradientCard from "./magicUi/Neongradient";

const About = () => {
  const [opened, { open, close }] = useDisclosure(false);
    

  return (
    <>
    <div 
    data-aos="fade-up" data-aos-duration="800"
    id="About"
     
      className="mt-20  flex relative overflow-hidden justify-around items-center font-mono px-10 py-10 max-sm:px-4 max-[475px]:px-2 max-[475px]:py-10 h-fit max-lg:justify-between max-[899px]:flex-wrap max-[899px]:flex-col-reverse max-[899px]:!overflow-visible max-[899px]:gap-6 max-md:px-6"
    >
      <Particles
        className="absolute !-z-20 inset-0"
        quantity={1000}
        ease={80}
        vx={.1}
        vy={.1}
        color="#64ffda"
        refresh
   
      />
    
      <div className="laptop:ml-10 laptop:w-3/5 flex flex-col max-lg:gap-3  max-[899px]:items-center">
        <div className="text-primaryColor text-3xl max-lg:text-2xl max-[475px]:text-xl max-[349px]:text-lg">Hi, I am</div>

        <div className="text-white text-[4.25rem] font-extrabold max-lg:text-5xl max-sm:text-4xl max-[475px]:text-3xl max-[349px]:text-[27px]">
          {info.name}
        </div>

        <div className="text-white text-4xl flex font-semibold max-lg:text-[27px] max-sm:text-2xl max-[475px]:text-xl max-[349px]:text-lg">
          I'm a&nbsp;
          <span className="text-primaryColor">
            <Typewriter
              options={{
                strings: info.stack,
                autoStart: true,
                loop: true,
                   
              }}
            />
          </span>
        </div>

        <div className="text-textColor text-xl w-[90%] text-justify my-8 max-lg:my-0 font-semibold max-lg:text-base max-sm:text-sm max-[475px]:text-xs">
          {info.bio}
        </div>

       <div className="max-[475px]::w-[90%] flex gap-5 max-[475px]:justify-between">
  <Button
    onClick={open}
    size="lg"
    className="
      focus-visible:!outline-none
      !text-bgColor
      !w-fit
      max-[475px]:!text-sm
      max-[475px]:!py-2
      max-[475px]:!px-10
      max-[475px]:!h-[36px]
      max-[475px]:!w-[50%]
    "
    variant="filled"
    color="#64FFDA"
  >
    CheckResume
  </Button>

  <Button
    component="a"
    href="/icon/Resume.pdf"
    download={info.name}
    size="lg"
    className="
      focus-visible:!outline-none
      !w-fit

      max-[475px]:!text-sm
      max-[475px]:!py-2
      max-[475px]:!px-10
      max-[475px]:!h-[36px]
      max-[475px]:!w-[50%]
    "
    variant="outline"
    color="#64ffda"
    rightSection={<IconDownload size={16} />}
  >
    Download
  </Button>
</div>


       
      </div>
     

    
      <div 
     
      className="h-fit flex justify-center bg-amber-300 items-center rounded-full laptop:mr-10 w-fit">
        
        <NeonGradientCard className="w-[325px] h-[325px] max-lg:w-64 max-lg:h-64 max-[349px]:w-56 max-[349px]:h-56 items-center justify-center text-center">
        <img src={profileImg}  className=" w-full h-full object-cover bject-center rounded-full" alt="image" />
        </NeonGradientCard>
      </div>
      
    </div>
    <ResumeViewer opened={opened} close={close} />
    </>
  );
};

export default About;
