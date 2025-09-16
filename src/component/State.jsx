import React from 'react'
import { useState } from 'react'

export default function State() {
    const [Number , setNumber] = useState(10)
  return (
    <div className='text-center'>
        <h1 className='text-3xl'>{Number}</h1>
        <button onClick={()=> setNumber(Number+1)} className='text-5xl bg-green-500  m-3'>+1</button > <br/>
        <button onClick={()=> setNumber(Number-1)} className='text-5xl bg-red-500 '>-1</button>
    </div>
  )
}
