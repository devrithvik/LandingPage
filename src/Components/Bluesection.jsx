import React,{useRef} from 'react'
import meeting from './multimedia/meeting.avif'
const images = [1,2,3]

export const Bluesection = () => {

    const scrollableDiv = useRef()

    const scrollVideo = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if(e.target.id == 'left'){
            scrollableDiv.scrollLeft = scrollableDiv.scrollLeft - 500;    
        }else{
            scrollableDiv.scrollLeft = scrollableDiv.scrollLeft + 500;
            
        }
    }

  return (
    <div className='relative bg-blue-700 contrast-150 py-24 pl-20 flex top-[85px] mb-28'> 
       
        <div className='flex flex-col gap-10 px-10 text-left min-w-[50%]'>
            <div className='text-6xl font-extrabold tracking-wider animate-bottom'>DT GrowthTeams</div>
            <div className='leading-8 tracking-wider text-xl font-thin animate-top'>DT powers the teams of futuristic startups. Young contributors unlearn, relearn with us,
                 to create socio-economic value. DT repositions
                  the education industry, DT is India's answer to Tesla</div>
        </div>
        
        <div className='relative max-w-[40%] flex items-center mr-8 duration-500'>
                 
                <button  
                 onClick={scrollVideo}
                 id={'left'}
                 className=' animate-bottom h-10 absolute w-10 left-0 hover:scale-150 '><span  id={'left'} class="material-symbols-outlined">
                 arrow_back
                 </span></button>


                                <div ref={scrollableDiv} className=' flex mx-auto max-w-[80%] h-auto overflow-auto scrollbar-hide animate-right hover:scale-110 duration-500'>
                                    {images.map((image,index) => (    <img key={index} src={meeting} alt="imagename" />   ))}
                                </div>


                <button  
                onClick={scrollVideo}
                id={'right'}
                className='animate-bottom h-10 absolute w-10 right-0 hover:scale-150 '><span  id={'right'} class="material-symbols-outlined">
                arrow_forward
                </span></button>

        </div>
    </div>
  )
}
