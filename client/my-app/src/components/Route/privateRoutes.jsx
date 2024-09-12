import {useState,useEffect} from 'react'
import { useAuth } from '../../context/auth'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../spinner'

export const PrivateRoute = ()=>{
    const[ok,setOk] = useState(false)

    const[auth,setAuth] = useAuth()

    //default axios
    axios.defaults.headers.common['Authorization'] = auth?.token

    useEffect(()=>{
       const authCheck = async()=>{
        const res = await axios.get('http://localhost:8080/api/v1/auth/user-auth')
        if(res.data.ok){
            setOk(true)
        }else{
            false
        }
       } 
       if(auth?.token)authCheck()
    },[auth?.token]);
    return ok    ?<Outlet/>:<Spinner/>
}