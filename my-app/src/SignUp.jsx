import React,{useState} from 'react';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

function SignUp(){
  const navigate = useNavigate()
  const [name,setName] = useState()
  const[email,setEmail] = useState()
  const[password,setPassword] = useState()
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password:password})
    .then(result=> {console.log(result)
      navigate('./login')
  })
    .catch(err=> console.log(err))

  }
    return (


                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                  <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                      <input type="text" id="form3Example1c" className="form-control"
                         onChange={(e) => setName(e.target.value)}/>


                      <input type="email" id="form3Example3c" className="form-control"  onChange ={(e)=>setEmail(e.targetvalue)} />
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>

                      <input type="password" id="form3Example4c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4c">Password</label>

                      <input type="password" id="form3Example4cd" className="form-control"  onChange ={(e)=>setPassword(e.targetvalue)} />
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>

                    <button type="submit" className="btn btn-primary">Register</button>

                    <Link to="/login" className="btn btn-primary">Login</Link>

                </form>


)
 }
export default SignUp;