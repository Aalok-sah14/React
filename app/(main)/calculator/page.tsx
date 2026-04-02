'use client'
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

const Calculator = () => {
   const [display, setDisplay] = useState('');    
   const symbolsOnly = ['/', '*', '-', '+', '%']
   const keys = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['C', '%', '00', '⌫']
   ]
   function handleClick(val){
    debugger;
    const lastChar = display[display.length - 1]
    if (symbolsOnly.includes(val) && (display === '' || symbolsOnly.includes(lastChar))){
        const replacedDisplay= display.slice(0, -1) + val
        setDisplay(replacedDisplay)
        return;
    }else if(val ==='.' && lastChar=== '.'){
        return;
    }else if(val === '.'){
      const individualChar = display.split('')
        const reversed = individualChar.reverse()
        let allowAdd = false
        debugger;
        if(reversed.length === 0) allowAdd= true
        for (const item of reversed) {
            if(symbolsOnly.includes(item)){
                allowAdd = true
                break;
            }else if(!symbolsOnly.includes(item) && item.includes('.')  ){
                allowAdd = false
                break;
            }else{
                allowAdd = true
            }
        }
        if(allowAdd === false) return;
    }
    switch(val){
        case '=':
            const output = eval(display)
            setDisplay(output.toString())
            break;
        case 'C':
            setDisplay('')
            break;
        case '⌫':
            setDisplay(display.slice(0, -1))
            break;
        case '%':
            const percentage = eval(display) / 100
            setDisplay(percentage.toString())
            break;
        case '00':
            setDisplay(display + '00')
            break;
        default:
            setDisplay(display + val)
    }
  
   }


  return (
    <div className='bg-black text-white w-72 h-auto m-10 p-4 rounded-lg'>
      <div className='border border-white m-2'>{display}</div>  
        <div>
          {keys.map((item,id)=>{
            return (
                <div className='flex' key={id}>
                    {item.map((val,idx)=>{
                        return (
                            <Button
                            onClick={()=>handleClick(val)}
                            className={symbolsOnly.includes(val) ?  'bg-orange-500 text-black m-4 w-8 rounded-full' :
                                'bg-gray-800 text-white m-4 w-8 rounded-full'
                             }key={idx}>
                                {val}
                                </Button>
                        )
                    })}
                    </div>
            )
          })}
        </div>
    </div>
  )
}

export default Calculator

