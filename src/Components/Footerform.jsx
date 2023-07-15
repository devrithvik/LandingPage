import React from 'react'
export const Footerform = () => {


    const submitHandler = () => [
         console.log("submitted!")
    ]
return ( 
    <div className='flex items-center justify-between px-20 py-10 bg-blue-700 contrast-150 text-left text-white'> 
        <div className='opacity-0 top font-bold'>
            <span className='text-5xl scale-y-110 block mb-3'>Are you a life-long learner?</span> 
            <span className='text-4xl text-slate-400/60'>{'Let’s dialogue!'}</span>
        </div>
        <div className='flex flex-col gap-y-8'>
            <input className='opacity-0 right duration-1000 border-none hover:scale-x-110 bg-slate-300/10 px-4 py-3 rounded-lg focus:outline-white focus:outline-none focus:outline-1 ' 
                type="text"  placeholder='Name'/>  
            <input className='opacity-0 right duration-1000 border-none hover:scale-x-110 bg-slate-300/10 px-4 py-3 rounded-lg focus:outline-white focus:outline-none focus:outline-1 ' 
                type='text' placeholder='Contact Number'/>
            <input className='opacity-0 right duration-1000 border-none hover:scale-x-110 bg-slate-300/10 px-4 py-3 rounded-lg focus:outline-white focus:outline-none focus:outline-1' 
                type="mail" placeholder='Sample@gmail.com'/>
            <button onClick={submitHandler} className='opacity-0 right duration-1000 hover:scale-x-110 bg-white font-medium text-lg text-black px-4 py-3 rounded-lg'>
                {'Join The Dt Learning Community '} 
             </button>
        </div>
    </div>
)
  } 
