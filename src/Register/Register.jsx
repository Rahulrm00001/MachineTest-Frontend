import React, { useState } from 'react'
import axios from 'axios';
import './RegisterStyle.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {
 
  const [values, setValue] = useState()
  const navigates = useNavigate()

  const handleOnchange = (e)=>{
      const {name, value} = e.target
      setValue({
        ...values, [name] : value
      })
  }

  const handleonsubmit = async (e) =>{
    e.preventDefault()
    const reg = await axios.post('http://localhost:4000/register',values)
    if (reg) { 
        navigates('/questions')
        return
    }
    else{
        navigates('/')
    }
     
  }

    return (

        <form id="registrationForm" onSubmit={handleonsubmit}>
            <h2>Exam Registration</h2>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required onChange={handleOnchange}/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required  onChange={handleOnchange}/>
            <button type="submit">Start Exam</button>
        </form>
    )
}

export default Register
