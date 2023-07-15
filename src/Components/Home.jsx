import React from 'react'
import { Navbar } from './Navbar'
import { Bluesection } from './Bluesection'
import { Whoweare } from './Whoweare'
import { Footerform } from './Footerform'
import { Footercomponent } from './Footercomponent'
export const Home = () => {


    const animate = async(direction) => {
      const viewHeight = window.innerHeight
      const elementsCollection = document.getElementsByClassName(direction)
      let elementsArray = [...elementsCollection] //converting the htmlcollection into array
      
      elementsArray = elementsArray.filter((item) => item.classList.contains('opacity-0')) //filtring the elements that are yet to animate
      // foreach loop only runs elementsArray.length  times as we are using filtered array
     await elementsArray.forEach((obj) => {
            if(viewHeight - obj.getBoundingClientRect().top > 50){
                console.log(direction)
                obj.classList.remove('opacity-0')
                obj.classList.add(`animate-${direction}`)
                
            }
       })

    }


    const revealOnScrollCallback = () => {

            animate("left")
            animate("right")
            animate("bottom")
            animate("top")
 
        /*  setTimeout(async() => {
          await animate("left")
          },0)
          setTimeout(async() => {
            await animate("bottom")
          },0)
          setTimeout(async() => {
            await animate("right")
          },0)
          setTimeout(async() => {
            await animate("top")
          },0)  */
    }

  window.addEventListener('scroll',revealOnScrollCallback)
  
  return (
    <>
      <Navbar />
      <Bluesection />
      <Whoweare/>
      <Footerform/>
      <Footercomponent />
    </>
  )
}
