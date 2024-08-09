import React from 'react'

function Header() {
  return (
    <div className='flex space-x-2 mt-3 px-3'>
        <img src="/logo.svg" alt="" className='w-10 h-10'/>
        <h1 className=' font-bold text-3xl'>Journi</h1>
    </div>
  )
}

export default Header