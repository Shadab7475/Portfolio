
import HomePage from './Components/HomePage'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])

   
  
  return (
    <div>
      <HomePage/>
      </div>
    
  )
}

export default App