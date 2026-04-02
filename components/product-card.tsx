'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const ProductCard = ({item}) => {
    const router = useRouter()
    const handleClick = () => {
        router.push('/product/' + item.id)
    };
  return (
        <div
        onClick={handleClick}
        className=" shadow-md h-72 w-72 p-2 m-4"
           key={item.id}>
                 <img src={item.images[0]}
              alt={item.title}
              width={200}
              height={200}
              />
            <h2 className="font-bold font-mono">{item.title}</h2>
            <div>
              <span className="font-bold text-4xl">
                Nrs. {item.price}</span>
            </div>
          </div>
  )
}

export default ProductCard