import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/cartItem';
import { toast } from 'react-hot-toast';

export default function Card({product}) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart)
    const removeHandeler = ()=>{
        dispatch(removeItem(product.id))
        toast.error('Item removed');
    }
    const addHandeler = ()=>{
        dispatch(addItem(product))
        toast.success('item added')
    }
    return (
        <div className='bg-white p-4 rounded-xl w-full h-[360px] flex flex-col items-center justify-between shadow-lg hover:scale-[1.03] transition-all'>
            <div className='text-center w-full'>
                <span className='font-bold text-[#4a4a4a] '>{product.title.slice(0, 25)}...</span>

                <p className='bg-[#d5d5d53b] h-[40px] w-full  text-[.75rem] rounded-md mt-3 p-1 text-[#959595] '>{product.description.slice(0, 50)}...</p>
            </div>
            <div className='w-[120px]'>
                <img src={product.image}
                alt=""
                loading='lazy'
                className='h-full w-full object-contain'
                />
            </div>

            <div className='w-full flex justify-between items-end'>
                <span className='font-bold text-[#00a63a]'>${product.price}</span>
                {
                    cart.some((item)=> item.id ===product.id)
                    ?
                    (<button className='border-2 border-black px-2 rounded-full bg-black text-white hover:bg-white hover:text-black' onClick={()=> removeHandeler()}>Remove Item</button>)
                    :
                    (<button className='border-2 border-black px-2 rounded-full hover:bg-black hover:text-white hover:border-transparent transition-all'
                        onClick={()=> addHandeler()}
                        >Add to cart</button>)
                }
            </div>
        </div>
    )
}
