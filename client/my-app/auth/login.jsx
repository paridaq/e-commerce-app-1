import React ,{useState} from 'react'
import axios from 'axios'
import{useNavigate,useLocation} from 'react-router-dom'
import Layout from '../src/components/layout/layOut'
import toast from 'react-hot-toast'
import { useAuth } from '../src/context/auth'
import Spinner from '../src/components/spinner'

const Login = () => {
  const [auth,setAuth]= useAuth();

  
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  
  
  const navigate = useNavigate();
  const location = useLocation();

  //form function
  const handleSubmit =async(e)=>{
        e.preventDefault();
        
        try {
          const res = await axios.post('http://localhost:8080/api/v1/auth/login',{email,password});
          if(res&&res.data.success){
            toast.success(res&&res.data.message)
            setAuth({
              ...auth,
              user:res.data.user,
              token:res.data.token
            });
            localStorage.setItem('auth',JSON.stringify(res.data));
            navigate(location.state || '/' )
            
            
            
          }else{
            toast.error(res.data.message)
          }
          
        } catch (error) {
          console.log('error')
          toast.error('something went wrong')
        }
        
  }


  return (
    <Layout>
<>
<h1> Login page</h1>
<form   onSubmit={handleSubmit}>
  
  
  <div className="form-group">
    
    <input type="email"
    value={email||''}
    onChange={(e)=>setEmail(e.target.value)}
    required
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    
  </div>

  <div className="form-group">
  
    <input type="password"
    value={password ||''}
    onChange={(e)=>setPassword(e.target.value)}
    required
    className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    
  </div>
  <button type="button" className="btn btn-primary"onClick={()=>{navigate('/forgot-password')}}>Forgot Password</button>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>



</>

    </Layout>
  )
}

export default Login
