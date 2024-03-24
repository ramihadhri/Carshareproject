'use client'
import { useEffect, useState } from 'react'

import React from 'react'

interface ClientonlyProps{
    children:React.ReactNode;
}

const  Clientonly: React.FC<ClientonlyProps>=({
    children
})=>
{ 
   
    const[hasMounted,sethasMounted]=useState(false);

    useEffect(()=>{
        sethasMounted(true);
    },[])
    if(!hasMounted){
        return null;
    }
  return (
    <div></div>
  )
}

export default Clientonly