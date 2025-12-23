import React from 'react'
import { Card, Image, Text, Badge, Button, Group, Indicator } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FullProjectModel from './FullProjectModel';

const ProjectCard = ({info}) => {
  const [opened, { open, close }] = useDisclosure(false);
    

    
    
  return (
    <div className='w-[32%] max-lg:w-[46%] max-md:w-[48%] max-sm:w-[90%] max-[475px]:w-full' data-aos="fade-up" data-aos-duration="800">
    <Card onClick={open}  className='!bg-bgColor xl:!w-[450px] !w-full cursor-pointer transition-transform duration-300 ease-in-out hover:!scale-[1.02] mb-5 hover:!shadow-[0_0_10px_1px_#64FFDA80] max-[475px]::!shadow-[0_0_10px_1px_#64FFDA80] !border-primaryColor border-2'  shadow="lg"  radius="lg" withBorder>
      <Card.Section className="!p-3">
        <Image className={` !flex-wrap  !shadow-[0_0_5px_0_#64ffda]  !h-[260px]  !rounded-xl `}
        src={info.image}
        alt={info.image}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs ">
         <div className="!text-2xl gap-2 !font-bold !text-white flex items-center max-sm:!text-xl" >{info.title}{info.live === true && <Badge className="!px-1" variant="outline" color="red" rightSection={<Indicator className="!mr-0.5 !z-0" color="red" position="middle-end" size={7} processing></Indicator>} >Live</Badge>}</div>
        
      </Group>
       <Group  className="!gap-2 !mb-2 !mt-1 ">
        {
          info.technologies.map((tech,index )=>(
            
            index <3 && <Badge variant="light"  mt={4} color="#64FFDA" size="lg">{tech}</Badge>

          ))
        }
        
        
      </Group>

      <Text className='!text-justify !text-sm max-[475px]:!text-xs' lineClamp={5} size="sm" c="dimmed">
        {info.desc}
      </Text>

      <Button onClick={open} className='!bg-primaryColor !text-bgColor' fullWidth mt="md" radius="md">
        Show More
      </Button>
    </Card>
    <FullProjectModel opened={opened} close={close} info={info}/>
    </div>
  )
}

export default ProjectCard