import React from 'react';
import logo from '../assets/logo.png';
import { NavLink, useLocation } from 'react-router-dom';
import { FaShoppingCart} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai'
import { useSelector } from 'react-redux';

export default function Navbar() {

  const location = useLocation();
  const path = location.pathname.split('/').at(-1);
  const totalItem = useSelector(state=> state.cart.length)
  return (
    <nav className='w-screen bg-black p-4'>
      <div className='w-[95%] xl:w-[70%] m-auto flex items-center justify-between'>
        
        <div className='w-[100px] md:w-[140px]'>
          <NavLink to={'/'}>
            <img src={logo} alt=""  loading='lazy' className='w-full'/>
          </NavLink>
        </div>

        <div className='h-full flex gap-4 text-white items-center '>

          
          {
            !path ?
            (
              
              <NavLink to={'/cart'} className='relative'>
                <button className='text-[1.3rem] md:text-[1.7rem] hover:text-[#ecd310]'><FaShoppingCart/></button>
                {
                  totalItem ?
                  <span className='flex justify-center items-center w-[16px] md:w-[20px] h-[16px] md:h-[20px] absolute  bg-yellow-400 rounded-full right-[-20%] top-[-10%] animate-bounce text-[.7rem]'>
                  {totalItem}
                  </span> : ''
                }
              </NavLink>
              
              
            )
            :
            (
              <NavLink to={'/'}>
                <button className='text-[1.3rem] md:text-[1.7rem] hover:text-[#ecd310]'><AiFillHome/></button>
              </NavLink>
            )
          }
          

          
        </div>

      </div>
    </nav>
  )
}
