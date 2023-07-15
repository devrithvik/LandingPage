 import React from 'react'
 import footerBg from './multimedia/dtFooter.jpeg'
 import {FaInstagram,FaWhatsapp,FaFacebookF,FaLinkedinIn} from 'react-icons/Fa'
 export const Footercomponent = () => {

    const footerClass = 'text-xl border border-white border-solid brightness-150 bg-slate-700/30 rounded-full p-4 hover:scale-125 duration-500';
    const iconClass = 'h-4 w-4 ';

   return (
     <div className='relative bg-black flex justify-between '> {/* //main */}
      <img 
          className='w-full h-full absolute opacity-20 bg-cover z-5 '
          src={footerBg} alt="" />
        
        
       <div className='flex h-full relative pl-20  py-10 mr-14 flex-col z-10 text-white flex-1  brightness-90 '>
            <div className='flex  justify-between mb-10  '>
              <span className='text-xl text-slate-200/80'> <strong className='text-5xl mr-1 text-white'>DEEP THOUGHT</strong> Worldwide</span>
              <span>+91 7207001400</span>
            </div>

            <div className='flex justify-between mb-20 text-xl font-thin '>
                  <span>Contact Us</span>
                  <span>Privacy Policy</span>
                  <span>Returns Policy</span>
                  <span>Terms of Service</span>
                  <span>Careers</span>
            </div>

            <div className='flex justify-between  relative'>
              <span className='text-lg font-thin'>© Copyright 2021. All Rights Reserved.</span>
            </div>
        </div>
        <div className='flex flex-col gap-y-5 mr-5 my-auto'>
            <span className={footerClass}> <FaWhatsapp className={iconClass}/></span>
            <span className={footerClass}> <FaInstagram className={iconClass}/></span>
            <span className={footerClass}> <FaFacebookF className={iconClass}/></span>
            <span className={footerClass}> <FaLinkedinIn className={iconClass}/></span>
        </div>
     </div>
   )
 }
 