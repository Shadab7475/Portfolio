import React, { useState } from 'react'
import FlotingInput from './FlotingInput'
import { Button } from '@mantine/core'
import { IconArrowRight, IconTopologyStar3 } from '@tabler/icons-react'
import { validateForm } from './Validation'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../Firebase'
import toast from 'react-hot-toast'

const Contact = () => {
  const form ={
    name : "",
    email : "",
    phone : "",
    message : ""
  }
  // const [formData, setFormData] = useState(form)
  // const [formError, setFormError] = useState<{ [key: string]: string }>(form);
  // const handleChange = (id,value)=>{
  //   setFormData({...formData, [id]:value})
  //   setFormError({ ...formError, [id]: validateForm(id, value)})
  // }
  const [formData, setFormData] = useState(form);
const [formError, setFormError] = useState(form);

const handleChange = (id, value) => {
  setFormData({
    ...formData,
    [id]: value,
  });

  setFormError({
    ...formError,
    [id]: validateForm(id, value),
  });
};
 const handleSubmit = async () => {
  let valid = true;
  let newFormError = {};

  for (let key in formData) {
    const error = validateForm(key, formData[key]);

    if (error.length > 0) {
      newFormError[key] = error;
      valid = false;
    }
  }

  setFormError(newFormError);

  if (valid) {
    setFormData(form);
    toast.success("Submitted Successfully!", { duration: 4000 });
    await addDoc(collection(db, "portfolio"), formData);
  } else {
    toast.error("Some error occurred!", { duration: 4000 });
  }
};


 
  return (
    <div className='px-16 max-md:px-8 max-sm:px-4 mx-20 max-lg:mx-10 max-md:mx-0 my-10 dm-mono-regular ' id='Contact'>
        <h1 className='text-4xl  max-sm:text-3xl max-[475px]:text-2xl mb-10 font-bold text-center text-white'><span className='text-primaryColor'>05&nbsp;</span>Contact</h1>
        <div data-aos="flip-left" data-aos-duration="800" className='w-[70%] max-lg:w-full shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 border border-primaryColor p-8 rounded-3xl max-sm:p-4'>
          <div className='text-3xl flex gap-2 items-center text-white font-semibold max-sm:text-2xl max-[475px]:text-xl'>Let's Connect<IconTopologyStar3 className="w-10 text-primaryColor h-10 sm-mx:w-7 sm-mx:h-7" /></div>
          
            <FlotingInput id="name" name="Name" value={formData.name} handleChange={handleChange} formError={formError.name} />
            <FlotingInput id="email" name="Email" value={formData.email} handleChange={handleChange} formError={formError.email} />
            <FlotingInput id="phone" name="Phone Number" value={formData.phone} handleChange={handleChange} formError={formError.phone} />
            <FlotingInput id="message" name="Message" value={formData.message} handleChange={handleChange} formError={formError.message} />
      
            
           
            <Button onClick={handleSubmit} fullWidth  rightSection={<IconArrowRight size={20} />}
                className="!text-bgColor !font-bold " variant="filled"  radius="lg" color="#64FFDA">Send</Button>

            

        </div>

    </div>
  )
}

export default Contact