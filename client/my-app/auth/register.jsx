import React ,{useState} from 'react'
import axios from 'axios'
import{useNavigate} from 'react-router-dom'


import Layout from '../src/components/layout/layOut'
import toast from 'react-hot-toast'

const Register = () => {

  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[phone,setPhone] = useState('');
  const[address,setAddress] = useState('');
  const[question,setQuestion] = useState('');
  const navigate = useNavigate();

  //form function
  const handleSubmit =async(e)=>{
        e.preventDefault();
        
        try {
          const res = await axios.post('http://localhost:8080/api/v1/auth/register',{name,email,password,phone,address,question});
          if(res&&res.data.success){
            toast.success(res&&res.data.message)
            
            navigate("/login")
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
<h1> Register page</h1>
<form   onSubmit={handleSubmit}>
  
  <div className="form-group">
  
    <input type="name" className="form-control"
    value={name || ''}
    onChange ={(e)=>setName(e.target.value)}
    required
    id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
    
  </div>

  <div className="form-group">
    
    <input type="address"
    value={address || ''}
    onChange={(e)=>setAddress(e.target.value)}
    required
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter address" />
    
  </div>

  <div className="form-group">
    
    <input type="phone"
    value={phone|| ''}
    onChange={(e)=>setPhone(e.target.value)}
    required
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phone number" />
    
  </div>

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

  <div className="form-group">
  
    <input type="text"
    value={question ||''}
    onChange={(e)=>setQuestion(e.target.value)}
    required
    className="form-control" id="exampleInputPassword1" placeholder="what is your  favourite sport" />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>



</>

    </Layout>
  )
}

export default Register
