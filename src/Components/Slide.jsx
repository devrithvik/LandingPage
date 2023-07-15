 import React from 'react'
 
 export const Slide = ({slideInfo,type}) => {
     

    let bool = type == 'whoweare'
   
   return (
     <div  className={`flex min-w-full snap-center text-black ${ bool? 'text-left' : 'text-right'} `}> 
        <div className={`flex flex-col gap-y-2 max-w-[50%] ${ bool ? 'order-1' : 'order-2'}`}>
                <strong className={`text-6xl ${bool ? 'animate-top' : "opacity-0 top" }`}>{ bool ? "Who We Are" : "What We Do" }</strong>
                <span className={`text-xl indent-2 leading-7 font-light ${bool ? 'animate-top': "opacity-0 top"}`}>{slideInfo.heading}</span>
                
                 <svg
                 className={`'cover h-16 w-16 ml-1 mt-5   ${ bool ? 'self-start' : 'self-end'}`}
                 fill="#f2f2f2" width="137px" height="137px" viewBox="-2.08 -2.08 12.16 12.16" xmlns="http://www.w3.org/2000/svg" stroke="#f2f2f2" strokeWidth="0.00008" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#2563eb" strokeWidth="0.768"> <path d="M3 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1zm5 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1z" transform="translate(0 1)"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M3 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1zm5 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1z" transform="translate(0 1)"></path> </g></svg>
               
                <span className="bottom opacity-0 ml-2 ">{slideInfo.description}</span>
        </div>
        <div className={`${ bool ? 'order-2 animate-top' : 'order-1 opacity-0 top'} hover:scale-110 duration-500`}>
            <img src={slideInfo.image} alt="imagename" />
           
        </div>
     </div>
   )
 }
 