// import { info } from 'autoprefixer'
import React from 'react'

export const Navsinglecomponent = ({infoArray,title}) => {
  return (
    <div>
         <span className=' p-1 rounded-md hover:bg-black hover:text-white' >{title.slice(0,1).toUpperCase() + title.slice(1)}<svg className='h-5 w-5 inline ml-1 animate-bounce ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16L6 10H18L12 16Z"></path></svg></span>
         <ul className='bg-slate-100 absolute backdrop-blur-lg bg-opacity-50 translate-y-4 w-[50vw] left-[30%] hidden grid-cols-2 grid-rows-2 group-hover:animate-top group-hover:grid gap-x-5 gap-y-5 p-5 text-left shadow-lg rounded-md'>
            {
                infoArray.map((obj,index) => (
                    <li key={index}>
                        <div>
                            <img className='h-10 w-10 inline mr-2'  src={obj.logo} alt="img" />
                            <strong>{obj.heading}</strong>
                        </div>
                        <div className= 'text-black/70 font-light'>{obj.description}</div>
                    </li>
                ))
            }
        </ul> 
    </div>
  )
}
