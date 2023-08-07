import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';

export default function Cart() {

  
  const cart = useSelector(state => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  
  
  useEffect(()=>{
    setTotalAmount(cart.reduce((accu, curr)=> accu + curr.price , 0));
  }, [cart])
  return (
    <div className='flex w-full h-full pb-[9rem] md:pb-[4rem]'>
        {
          !cart.length ? (
            <div className='flex w-full items-center justify-center bg-white flex-col gap-4'>
                <span className='text-[1.1rem]'>Your cart is empty</span>
                <NavLink to={'/'}>
                  <button className='bg-yellow-300 rounded-md p-2'>Shop Now</button>
                </NavLink>
            </div>
          )
          : 
          (
            
            <div className='w-[100%] md:w-[95%] lg:w-[90%] xl:w-[70%] mx-auto flex min-h-full flex-col relative md:grid md:grid-cols-[65%_35%] lg:grid-cols-[70%_30%] lg:gap-x-4 overflow-hidden'>
              <section className='overflow-y-auto px-4 lg:px-[0]'>
                {
                  cart.map(item => <CartItem item={item} key={item.id}/>)
                }
              </section>
            

            
              <section className='w-screen md:w-full fixed md:relative bottom-0  bg-white mx-auto p-4 flex flex-col shadow-md md:shadow-none'>
                <span className='text-[.9rem] md:text-[1.5rem] lg:text-[1.7rem] font-bold'>Your Cart</span>
                <span className='hidden md:block md:text-[2.8rem] font-bold lg:text-[3rem]'>SUMMARY</span>
                <span className='text-[.7rem] md:text-[1.4rem] lg:text-[1.6rem]'>Items : {cart.length}</span>
                <span className='md:text-[1.5rem]'>Total : <span className='text-[#00a63a] font-bold md:text-[1.5rem]'>${totalAmount.toFixed(2)}</span></span>
                <button className='absolute right-4 bottom-4 border md:hover:bg-[#facc35] p-2 rounded-full md:relative md:bottom-0 md:left-0 md:mt-[3rem] md:rounded-lg md:text-[1.3rem] bg-[#fcc318] md:text-white font-bold '>Checkout</button>
              </section>

            </div>
            
          )
        }
        

      
    </div>
  )
}
