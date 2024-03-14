import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Register from './Register/Register'
import Questions from './Questions'

const Router = () => {
  return (
    <Routes>
       <Route path='/' element={<Register/>}/>
       <Route path='/questions' element={<Questions/>}/>
       
    </Routes>
  )
}

export default Router
