import React,{useRef} from 'react'
import { Slide } from './Slide'
import whatwedo1 from './multimedia/whatwedo1.png'
import whatwedo2 from './multimedia/whatwedo2.png'
import whatwedo3 from './multimedia/whatwedo3.png'
import whatwedo4 from './multimedia/whatwedo4.png'
import whoweare1 from './multimedia/whoweare1.png'
import whoweare2 from './multimedia/whoweare2.png'
import whoweare3 from './multimedia/whoweare3.png'

export const Whoweare = () => {
   

    const whoweareSlide = [

        {
            heading: "Mentors of Product Thinkers",
            description: "We groom youngsters to be able to contribute to disruptive product startups and thus fuel socio-economic impact",
            image: whoweare1 //"https://cms.deepthought.education:5055/img/file-1658476902082.png"
        },
        {
            heading: "Educators with a disruptive vision",
            description: "We are bootstrapping a new approach to education. Startups sponsor the DT education so beginners can get up to speed and drive their growth",
            image: whoweare2
        },
        {
            heading: "PedaTech Innovators",
            description: "Our Technology vision is to empower every school/college to become an MIT/Harvard/IISER style research institution by 2030, so every human becomes a researcher and socio-economic value contributor.",
            image: whoweare3
        },
        {
            heading: "Community of Life-long learners",
            description:  "We help our learners reflect over little things in their garden, discuss big ideas, go to the roots of knowledge, and network with thinkers across the world. Our Technology has three components of learning- self, social and growth learning. ",
            image: whoweare1
        },
    
     ]
    const whatwedoSlide = [

        {
            heading: "Build Product Startup Teams",
            description: "We groom youngsters with Product Thinking, Socratic Thinking, and the DT Education Model so they can contribute to the growth of disruptive product startups. We are not a recruitment agency or a Finishing school, but a growth agency for startups- we bring in people, processes, and systems. "  ,
            image: whatwedo1
        },
        {
            heading: "DT GrowthTeams",
            description: "We hire, train, and manage youngsters for diverse roles like software development, community management, technical product management, technical copywriting, and technical project management. Our classes are aligned with the client's operational needs. " ,
            image: whatwedo1, 
        },
        {
            heading: "DT Learning Model",
            description: "We groom youngsters around Learnability, Project Execution, BizTech Acumen, Behavioral Intelligence and Values-centered decision making. This allows them to see the big picture and contribute to the organization's growth." ,
            image: whatwedo1
        },
        {
            heading: "Internal Organization Building",
            description:  "A disruptive startup has a unique brand and creative approach. Freelancers may not align with the vision, we build an internal Tech Organization or Creatives Organization- basically any function that the startup requires through people, processes and systems.",
            image: whatwedo1
        },
    
     ]
     const whoweareRow = useRef(); 
     const whatwedo = useRef(); 
     
     const moveWhoweareRow = (e) => {
         e.preventDefault();
        if(e.target.id == 'left'){
            whoweareRow.current.scrollLeft =   whoweareRow.current.scrollLeft - (whoweareRow.current.getBoundingClientRect().width+40) ;
        }else{
            whoweareRow.current.scrollLeft =  whoweareRow.current.scrollLeft +  (whoweareRow.current.getBoundingClientRect().width+40);
        }
     }
     const moveWhatwedoRow = (e) => {
         e.preventDefault();
        if(e.target.id == 'left'){
            whatwedo.current.scrollLeft =   whatwedo.current.scrollLeft - (whatwedo.current.getBoundingClientRect().width+40) ;
        }else{
            whatwedo.current.scrollLeft =  whatwedo.current.scrollLeft +  (whatwedo.current.getBoundingClientRect().width+40);
        }
     }
     
     return (
         <>
    <div className='bg-white relative px-16 py-16 w-full'> 
        <div ref={whoweareRow} className='whoweareRow flex gap-10 overflow-auto scrollbar-hide '>

        {
            whoweareSlide.map((slide,index) => (   <Slide key={index} slideInfo={slide} type={"whoweare"} />   ))
        }
        </div>
       <div className='opacity-0 top flex gap-2'>
        <button id={'left'} onClick={moveWhoweareRow} className='w-7 h-9 bg-blue-700 contrast-150'>{"<"}</button>
        <button id={'right'} onClick={moveWhoweareRow} className='w-7 h-9 bg-blue-700 contrast-150 '>{">"}</button>
       </div>
    </div>
    <div className='bg-white relative flex flex-col px-16 py-16 w-full '> 
        <div ref={whatwedo} className='whoweareRow flex gap-10 overflow-auto scrollbar-hide  '>

        {
            whatwedoSlide.map((slide,index) => (   <Slide key={index} slideInfo={slide} type={"whatwedo"} />   ))
        }
        </div>
       <div className='opacity-0 top flex gap-2 self-end'>
        <button id={'left'} onClick={moveWhatwedoRow} className='w-7 h-9 bg-blue-700 contrast-150'>{"<"}</button>
        <button id={'right'} onClick={moveWhatwedoRow} className='w-7 h-9 bg-blue-700 contrast-150 '>{">"}</button>
       </div>
    </div>
    </>
  )
}

/*  useEffect(()=>{

    whoweareRow.current.addEventListener("mouseup",dragStop)
     whoweareRow.current.addEventListener("mousedown",dragStart)
     whoweareRow.current.addEventListener("mousemove",move)
     
    return () => {
         whoweareRow.current.removeEventListener("mouseup",dragStop)
         whoweareRow.current.removeEventListener("mousedown",dragStart)
         whoweareRow.current.removeEventListener("mousemove",move)
     } 

 },[]) */