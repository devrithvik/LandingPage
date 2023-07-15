 import './App.css'
 import {Routes,Route} from 'react-router-dom'
 import {Home} from './Components/Home'
 function App() {
  return (
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
  )
}

export default App
 // if(window.innerHeight - a[i].getBoundingClientRect().top > 100)
 // a[i].classList.add("bg-teal-500") ;/*const revealIt = () => {
      /*const arr = document.querySelectorAll('.item')
      for(let i=0;i<arr.length;i++){
        console.log(arr[i])
      }
   
  }
  
  useEffect(() => {

    window.addEventListener('scroll', revealIt)
  },[])*/
     
      // if(window.innerHeight - a[i].getBoundingClientRect().top > 100)
      // a[i].classList.add("bg-teal-500") ;
  
    // console.log(window.innerHeight)
   