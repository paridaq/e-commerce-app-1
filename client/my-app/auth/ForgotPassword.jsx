import React ,{useState} from 'react'
import axios from 'axios'
import{useNavigate,} from 'react-router-dom'
import Layout from '../src/components/layout/layOut'
import toast from 'react-hot-toast'
import { useAuth } from '../src/context/auth'


const ForgotPassword = () => {
  

  
  const[email,setEmail] = useState('');
  const[newPassword,setNewPassword] = useState('');
  const[question,setQuestion] = useState('');
  
  
  const navigate = useNavigate();
  

  //form function
  const handleSubmit =async(e)=>{
        e.preventDefault();
        
        try {
          const res = await axios.post('http://localhost:8080/api/v1/auth/forgot-password',{email,newPassword,question});
          if(res&&res.data.success){
            toast.success(res&&res.data.message)
         
       
            navigate( '/login' )
            
            
            
          }else{
            toast.error(res.data.message)
          }
          
        } catch (error) {
          console.log('error')
          toast.error('something went bad')
        }
        
  }


  return (
    <Layout>
<>
<h1> Password reset page</h1>
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
    value={newPassword ||''}
    onChange={(e)=>setNewPassword(e.target.value)}
    required
    className="form-control" id="exampleInputPassword1" placeholder=" new Password" />
  </div>
  <div className="form-group">
  
    <input type="text"
    value={question ||''}
    onChange={(e)=>setQuestion(e.target.value)}
    required
    className="form-control" id="exampleInputPassword1" placeholder="your favourite sports" />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    
  </div>
  
  <button type="submit" className="btn btn-primary" >Reset</button>
</form>



</>

    </Layout>
  )
}

export default ForgotPassword
