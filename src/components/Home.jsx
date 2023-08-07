import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import Card from './Card';

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  
  
  useEffect(()=>{
    const apiUrl = process.env.REACT_APP_API_URL;
    const fetchProduct = async () =>{
      setLoading(true);
  
      const res = await fetch(apiUrl);
      const data = await res.json();
  
      setProducts(data)
      setLoading(false)
  
    }
    fetchProduct();
    
  },[])
  return (
    <section className='w-full h-full border  overflow-auto pt-[2rem] pb-[6rem]'>
      <div className='w-[90%] sm:w-[90%] lg:w-[90%] xl:w-[70%] m-auto '>
        {
          loading ? (<div className='w-full h-screen grid place-items-center'><Spinner/></div>)
          :
           (
            <div className='w-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-5'>
              {
                products.map(product => (<Card product= {product} key={product.id}/>))
              }
            </div>
          )
        }
      </div>
    </section>
  )
}
