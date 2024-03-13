import React from 'react';
import useForm from '../hooks/useForm';
import validation from '../utils/validation';
import "./Form.css";

const FormSignup = () => {

  const{handleChange, values, handleSubmit, errors} = useForm(validation);

  return (
    <div className="form-content container-fluid">
      <form className="form form-horizontal" onSubmit={handleSubmit}>
        <h1>Get started with us today! Create your account</h1>
        
        <div className="form-group form-inputs">
          <label htmlFor="username" className="control-label col-sm-2 form-lable">UserName</label>
          <div className='col-sm-10'>
            <input id="username" type="text" name="username" className="form-control form-input" placeholder="Enter your Username" value={values.username} onChange={handleChange} />
          </div>
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form-group form-inputs">
          <label htmlFor="email" className="control-label col-sm-2 form-lable">Email</label>
          <div className='col-sm-10'>
            <input id="email" type="email" name="email" className="form-control form-input" placeholder="Enter your Email" value={values.email} onChange={handleChange} />
          </div>
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-group form-inputs">
          <label htmlFor="password" className="control-label col-sm-2 form-lable">Password</label>
          <div className='col-sm-10'>
            <input id="password" type="password" name="password" className="form-control form-input" placeholder="Enter your Password" value={values.password} onChange={handleChange} />
          </div>
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form-group form-inputs">
          <label htmlFor="password1" className="control-label col-sm-2 form-lable">Confirm Password</label>
          <div className='col-sm-10'>
            <input id="password1" type="password" name="password1" className=" form-control form-input" placeholder="Enter your Confirm password" value={values.password1} onChange={handleChange} />
          </div>
          {errors.password1 && <p>{errors.password1}</p>}
        </div>

        <button className="btn btn-default form-btn" type="submit">Sign in</button>

        <div>Already have an account? Login <a href="#">here</a></div>
      </form>
    </div>
  )
}

export default FormSignup