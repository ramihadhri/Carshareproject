
import React from 'react'
import Container from './Container'
import Search from './Search.jsx'
import UserMenu from './UserMenu.jsx'
import Logo from '../Logo.jsx'
function Navbar() {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
        <div className='py-4 border-b-[1px]'>
    <Container>
<div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
  
  <Search/>
  <UserMenu/>
</div>
    </Container>
        </div>
    </div>
  )
}

export default Navbar