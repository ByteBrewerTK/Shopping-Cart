import {React, useEffect, useState} from 'react'
import { FiTrash } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { removeItem } from '../redux/cartItem';
import { toast } from 'react-hot-toast';

export default function CartItem({item}) {
    const dispatch = useDispatch();
    const [isDesktop , setIsDesktop] = useState(window.innerWidth > 768);
    const description = `${isDesktop ? item.description.slice(0,180): item.description.slice(0,100)}...`;

    const title = isDesktop ? item.title : `${item.title.slice(0, 30)}...`

    const updateMedia = ()=>{
        setIsDesktop(window.innerWidth > 768);
    }
    useEffect(()=>{
        
        window.addEventListener('resize', updateMedia)

        return () => window.removeEventListener('resize',updateMedia)
    })
    return (
        <div className='flex bg-white my-[1rem] w-full h-[16.87rem] sm:h-[10.87rem] md:h-[16rem] flex-col p-4 rounded border-b-4 border-slate-500 justify-around sm:grid sm:grid-cols-[30%_70%] sm:gap-4 shadow-lg'>

            <div className='h-[6rem] sm:h-full sm:w-full overflow-hidden'>
                <img src={item.image} alt="" loading='lazy' className='h-full mx-auto object-contain'/>
            </div>

            <div className='mt-2 flex flex-col justify-between md:block relative'>
                <span className=' font-bold overflow-ellipsis w-full h-[1rem] md:text-[1rem] lg:[text-[1.25rem]] xs:text-[.8rem]'>{title}</span>

                <p className='text-[.8rem] mt-4 md:text-[.8rem] lg:text-[1rem] xs:text-[.6rem]'>{description}</p>
                <div className='flex justify-between mt-4 md:absolute md:bottom-0 md:w-full' >

                    <span className='font-bold text-[#00a63a] lg:text-[1.2rem] xs:text-[.8rem]'>${item.price}</span>
                    <button className='text-red-500 lg:text-[1.2rem]'
                    onClick={()=>{

                        dispatch(removeItem(item.id))
                        toast.error('Item removed')

                        }}>
                    <FiTrash/>
                    </button>

                </div>
            </div>

        </div>
    )
}
