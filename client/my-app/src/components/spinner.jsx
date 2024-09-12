import React, { useEffect } from 'react'
import {useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

const Spinner = ({path='login'}) => {
     const[count,setCount] = useState(5);
     
     const navigate = useNavigate();
     const location = useLocation();
     

     useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prevValue)=>--prevValue)
        },1000);
        count === 0 && navigate(`${path}`,{
            state:location.pathname
        });
            return ()=> clearInterval(interval);
     },[count,navigate,location,path])
  return (
    <>
  <div className="text-center  " >
    <h1> redirecting to you in {count} second</h1>
  <div className="spinner-border" role="status">
    <span className="sr-only"></span>
  </div>
</div>

      
    </>
  )
}

export default Spinner
