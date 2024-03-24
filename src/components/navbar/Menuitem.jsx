'use client'
import React from 'react'


interface MenuitemProps {
onClick: ()=>void;
label : string  ;  

}
const Menuitem: React.FC<MenuitemProps> =({onClick,label}) => {
  return (
    <div onClick={onClick}
    className='
    text-gray-600
    px-4
    py-3
    hover:bg-mutual-100
    transition
    font-semibold'>
        {label}
    </div>
  )
}

export default Menuitem