import React from 'react'
import FormSignup from './FormSignup';
import "./Form.css";

const Form = () => {
  return (
    <>
    <div className='form-container'>
      <span className='close-btn'>X</span>
      <FormSignup />
    </div>
        
    </>
  )
}

export default Form