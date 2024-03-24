import React from 'react'
import axios from 'axios'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useCallback, useState } from 'react';
import { SubmitHandler,useForm} from 'react-hook-form';
import UseRegisterModel from '../../hooks/UseRegisterModel';
import Models from './Models.jsx';
import Heading from '../Heading.jsx';
import Input from '../inputs/Input.jsx';
import Button from '../Button.jsx';


function RegisterModel() {
  const registerModel = UseRegisterModel();
  const [isLoading,setIsLoading]=useState(false);
  const {
    register,
    handleSubmit,
    formState:{ errors,}}=useForm(
    {
      defaultValues:{
        name:'',
        email:'',
        password:''
      }
    }
  );
  const onSubmit = (data)=>{
    setIsLoading(true);
    axios.post('/api/register',data)
    .then(()=>{
      registerModel.onClose();
    })
    .catch((error)=>{
      console.log(error);
    })
    .finally(()=>{
      setIsLoading(false);
    })
  }

  const bodycontent =(
    <div className='flex flex-col gap-4'> 
     <Heading title='welcome to carshare' 
              subtitle='create an account '
      />
      <Input
      id='email'
      label='Email'
      diabled={isLoading}
      register={register}
      errors={errors}
      required
      />
      <Input
      id='name'
      label='Name'
      diabled={isLoading}
      register={register}
      errors={errors}
      required
      />
      <Input
      id='password'
      label='password'
      diabled={isLoading}
      register={register}
      errors={errors}
      required
      />

    </div>
  );
const footercontent =(
<div className='flex flex-col gap-4 mt-3 '>
  <hr />
  <Button
  outline
  label='continuer avec Google'
  icon={FcGoogle}
  onClick={()=>{}}
  
  />


</div>
)
  return (
   
   <Models disabled={isLoading}
    isOpen={registerModel.isOpen}
    title="register"
    actionLabel="continue"
    onClose={registerModel.onClose}
    onSubmit={handleSubmit(onSubmit)}
    body={bodycontent}
    footer={footercontent}

    />

   

    
  )
}

export default RegisterModel