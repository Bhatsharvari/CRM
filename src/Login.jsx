import React,{useState}from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate=useNavigate()
  let[username,setUsername]=useState("")
  let[password,setPassword]=useState("")

  let handleSubmit=(e)=>{
    e.preventDefault()
    let user=localStorage.getItem("username")
    let pass=localStorage.getItem("password")
    if(username===user && password===pass)
    {
      navigate("/Home")
    }
    else{
      navigate("/Login")
    }

  }
  return (
    
    <div className='background'>
      <h2>Login Form</h2>
        <br />
        <label htmlFor="username">User Name</label><br />
      <input type="text"  id='username' onChange={(e)=>{
            setUsername(e.target.value)
      }} />
      <br />
      <label htmlFor="password">Password</label><br />
      <input type="password"  id='password' onChange={(e)=>{
        setPassword(e.target.value)
      }} />
      <br />
      <button onClick={handleSubmit}>LOGIN</button>
    </div>
  )
}

export default Login