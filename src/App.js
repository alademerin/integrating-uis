import {useState} from 'react'
import Dashboard from "./pages/Dashboard"
import './App.scss'
import { Loader } from "flexibull/build/Loader/Loader.components"

const App =()=>{
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
   setLoading(false) 
  }, 3000);
  return(
    <div>
        {loading?<Loader/>: <Dashboard/> }
    </div> 

  )
}
export default App
