import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
   let navigate=useNavigate()
  let[username,setUSerName]=useState()
  let[password,setPassword]=useState()
  

  let handleSubmit=(e)=>{
       e.preventDefault()
       localStorage.setItem(username,username)
       localStorage.setItem(password,password)
       navigate("/Login")
  }
  return (
    <div>SIGNUP PAGE
      <br />
      <input type="text" placeholder='username' id='username' onClick={(e)=>{
                    setUSerName(e.target.value)
      }} />
<br />
      <input type="password" placeholder='password' id='password' onClick={(e)=>{
        setPassword(e.target.value)
      }} />
<br />
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default Signup