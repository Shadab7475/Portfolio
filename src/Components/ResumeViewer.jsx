import { ActionIcon, Modal, ScrollArea, Tooltip } from '@mantine/core'
import { IconArrowBigDownLineFilled } from '@tabler/icons-react'
import React from 'react'
import { Document, Page } from 'react-pdf'
import { info } from './User'


const ResumeViewer = (props) => {
  //          xsm  mobile  xs tablat  bs laptop     bs max-[899px]:   xs max-[475px]  xsm max-[349px]:
   
  return (
    <Modal.Root scrollAreaComponent={ScrollArea.Autosize}  size="auto" className='dm-mono-regular' opened={props.opened} onClose={props.close}>
            <Modal.Overlay className='!backdrop-opacity-85 !blur-sm ' />
            <Modal.Content className='!rounded-3xl'>
              <Modal.Header className='!bg-bgColor relative max-[475px]!p-2 !border-primaryColor max-[475px]!border  !border-2 max-[475px]!border-b-0 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl'>
                <Modal.Title  data-autofocus className='!text-4xl max-[475px]!text-2xl text-white flex gap-3 items-center !font-bold'>Resume 
                    <Tooltip label="Download" position='right' color='#64ffda' offset={5} className='!text-bgColor' >
                    <ActionIcon className="!text-primaryColor" component='a' href='/icon/Resume.pdf' download={info.name} color='#64ffda' variant="outline" aria-label="Settings">
                        <IconArrowBigDownLineFilled className='max-[475px]!w-[16px] max-[475px]:!h-'  />
                    </ActionIcon>
                    </Tooltip>
                </Modal.Title>
                <Modal.CloseButton size="md" iconSize="30px" className='!bg-bgColor !text-red-500' /> 
              </Modal.Header>
              <Modal.Body className='!bg-bgColor max-[475px]!p-2 !pt-2 !border-primaryColor  !border-2 max-[475px]!border max-[475px]!border-t-0 !border-t-0 !rounded-bl-3xl !rounded-br-3xl'>
                <Document file="/icon/Resume.pdf" className='w-full !rounded-2xl !overflow-hidden !min-w-40 !min-h-14'>
                <Page pageNumber={1} className='w-full !min-w-40 !min-h-14 max-md:[&>.react-pdf\_\_Page\_\_canvas]:!w-full max-md:[&>.react-pdf\_\_Page\_\_canvas]:!h-auto' renderTextLayer={false} renderAnnotationLayer={false} />
                </Document>
                
              </Modal.Body>
            </Modal.Content>
          </Modal.Root>
  )
}

export default ResumeViewer