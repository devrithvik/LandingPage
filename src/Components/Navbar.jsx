import React from 'react'
import { navHeadings } from './Navbarhelper'
import { Navsinglecomponent } from './Navsinglecomponent'
import dtLogo from './multimedia/dt.png'
export const Navbar = () => {
  

  const headings = ["people","client","investor","Aboutus","partner",]
  return (
    <nav className="fixed top-0 w-full z-10 animate-top bg-white">
          <div className='relative w-full flex justify-between items-center py-5 px-20 '> 

               <img 
                className=' bg-white max-w-40 max-h-10 scale-150 cover p-3 border border-black border-solid rounded-tl-xl rounded-br-xl'
                src={dtLogo} alt="deepthought" /> 

              
                <ul className='flex gap-10 text-black '>
                      {
                        headings.map((heading,index) => (
                          <li key={index} className='group'>
                            <Navsinglecomponent infoArray={navHeadings[heading]} title={heading} />
                          </li>
                        ))
                      }
                </ul>
              
              <button className='px-5 py-2 text-xl font-semibold text-blue-700 bg-white contrast-150 border border-black border-solid rounded-tl-xl rounded-br-xl hover:bg-black' >Login</button>
          </div>
    </nav>
  )
}














 