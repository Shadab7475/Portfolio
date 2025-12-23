import { Badge, Button, Group, Image, Indicator, Modal, ScrollArea, Text } from '@mantine/core'
import React from 'react'
import { useMediaQuery } from "@mantine/hooks";


const FullProjectModel = ({opened,close,info}) => {
  const isMobile = useMediaQuery("(max-width: 640px)");


   //          xsm  mobile  xs tablat  bs laptop     bs max-[899px]:   xs max-[475px]: xsm max-[349px]:
 
  
  return (
    <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="auto" className='!bg-amber-200  dm-mono-regular' opened={opened} onClose={close}>
        <Modal.Overlay className="!backdrop-opacity-85 blur-sm" />
        <Modal.Content className='!rounded-3xl '>
          <Modal.Header className='!bg-bgColor max-[475px]:!p-2  !border-primaryColor  !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl'>
            <Modal.Title  data-autofocus className='!text-4xl max-sm:!text-3xl max-[475px]:!text-2xl max-[349px]:!text-xl text-white flex gap-3 max-[475px]:gap-1 items-center !font-bold'>{info.title}{info.live && <Badge size='xl' variant="outline" className='!flex  !gap-2 !flex !items-center !justify-center' rightSection={<Indicator color="red" position="middle-end" size={10}  processing></Indicator>} color="red" >LIVE</Badge>}</Modal.Title>
            <Modal.CloseButton size="md" iconSize="30px" className='!bg-bgColor !text-red-500' /> 
          </Modal.Header>
          <Modal.Body className='!bg-bgColor max-[475px]:!p-2 !pt-2 !border-primaryColor  !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl'>
            <Image className={`!shadow-[0_0_5px_0_#64ffda] !rounded-xl !flex-wrap`}
                    src={info.image}
                    
                    />
                <div className="flex flex-wrap gap-3 max-[475px]:gap-2 my-3">
                    {
                      info.technologies.map((tech )=>(  
                        <Badge variant="light" color="#64FFDA" size={isMobile ? "md" : "lg"}>{tech}</Badge>
                      ))
                    }
                   </div>
               <Text className='!text-justify lg:!text-lg max-sm:!text-base max-[475px]:!text-xs mobile:!text-[11px]'  size="lg" c="dimmed">
                      {info.desc}
                </Text>
                <Group justify='space-between' mb="md"  >
                    <a href={info.github} className='!w-[48%] max-sm:!w-[46%]' target='blank' ><Button color='#64ffda' variant='outline' fullWidth mt="md" radius="md">
                            View Code
                          </Button></a>
                    <a href={info.link} className='!w-[48%] ' target='blank'><Button  className='!bg-primaryColor !text-bgColor' fullWidth mt="md" radius="md">
                            View Live App
                          </Button></a>
              </Group>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
  ) 
}

export default FullProjectModel