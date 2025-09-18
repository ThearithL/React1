import React from 'react'

export default function Ui({name,gender,status,image}) {
  return (
    <div>
        <div className='w-full h-full gird grid-cols-1 md:grid-cols-2 lg:gird-cols-5 gap-5 p-5'>
            <div className='aspect-[10/12] shadow-lg rounded-2xl flex justify-center p-5 flex-wrap'>
                <div className='w-[100px] h-[100px] rounded-[50%] overflow-hidden '>
                    <img src={image} alt="" />
                </div> 

                <div className='w-full p-3'>
                    <h1>Username : {name}</h1>
                    <h1>Gender : {gender}</h1>
                    <h1>Status : <b> {status ? 'Active' : 'Inactive'}</b> </h1>

                </div>
            
            </div>
            
        </div>
    </div>
  )
}
