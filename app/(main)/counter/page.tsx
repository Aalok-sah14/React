'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Counter = () => {
  let [count, setCount] = useState(10)
  
   function decrement(){
    setCount(count - 1)
  }
  function increment(){
    setCount(count + 1)
  }
  return (
    <div>
        <Button onClick={decrement}>-</Button>
        
        {count}
        <Button onClick={increment}>+</Button>
    </div>
  )
}

export default Counter