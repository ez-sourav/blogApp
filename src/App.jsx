import { useDispatch } from 'react-redux'
import React, { useState,useEffect } from 'react'
import authService from './appwrite/auth' 

const App = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch() 
  return (
    <div className='bg-red-400 '>
      react-hook-form
    </div>
  )
}

export default App