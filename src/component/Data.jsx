import React from 'react'

export default function Data() {
    const user = ['Nika','Thida','Nita','Raksmey']
  return (
    <> 
        {user.map((item , index)=> (
            <h1 className='text-3xl font-medium'>
                user{index+1} : {item}
            </h1>
        ))}
    </>
  )
}
