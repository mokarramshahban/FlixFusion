import React from 'react'
import LOGO from '../assets/images/logo.png'
const Header = () => {
  return (
    <div className='absolute z-9'>
      <img className='w-50 mx-10' src={LOGO} alt="" />
    </div>
  )
}

export default Header