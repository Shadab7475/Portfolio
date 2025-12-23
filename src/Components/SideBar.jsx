import { useDisclosure } from '@mantine/hooks';
import { Drawer, DrawerHeader, Burger } from '@mantine/core';
import { IconHexagonLetterS, IconX } from '@tabler/icons-react';

function SideBar({links}) {
    
    
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      {/* <Drawer opened={opened} position='right' overlayProps={{backgroundOpacity:0.5,blur:4}} size="40vw" onClose={close} title="Authentication">
        <div className='bg-red-300 w-full dm-mono-regular items-center justify-center  flex'>
            <div className='flex flex-col gap-3'>
                {
                links.map((link,index)=>(
                     <a key={index} className=" text-textColor hover:text-primaryColor duration-200 transition " href={`#${link}`}><span className="text-primaryColor">0{index+1}. </span>{link}</a>
                ))
            }
            </div>
            
        </div>
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button> */}


      <Drawer.Root className='laptop:hidden -z-10'  position='right' opened={opened} onClose={toggle} size="50vw" >
        <Drawer.Overlay className='!-z-0 !backdrop-opacity-85 blur-sm'/>
        <Drawer.Content className='!-z-0'  bg={"#0a192f"}>
          
          <Drawer.Body className='mt-20 laptop:mt-24 items-center  flex flex-col gap-5' bg={"#0a192f"} >
            {
              links.map((link,index)=>(
                <>
                <span className="text-primaryColor">0{index+1}. </span>
                <a key={index} onClick={toggle} className=" text-textColor hover:text-primaryColor text-lg duration-200 transition " href={`#${link}`}>{link}</a>
                </>

              ))
            }
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
      
      <Burger lineSize={2} size="lg" className=" relative z-10" tabIndex={10} color='#64FFDA' opened={opened} onClick={toggle}  />;
    </>
  );
}


export default SideBar