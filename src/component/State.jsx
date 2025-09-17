import React from 'react'
import { useState } from 'react'

export default function State() {
    const [Number , setNumber] = useState(10)
  return (
    <div className='w-full h-100vh'>
        <div>
          <h1 className='text-3xl'>{Number}</h1>
        </div>
      <div>
                <button onClick={()=> setNumber(Number+1)} className='text-5xl bg-green-500  m-3'>+1</button >
        <button onClick={()=> setNumber(Number-1)} className='text-5xl bg-red-500 '>-1</button>
      </div>
    </div>
  )
}
