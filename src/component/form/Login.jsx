import React from 'react'
import './form.css'

const Login = () => {
  return (
    <div className='login-container'>
        <div className='login-box '>
            <a href='#login' className='login-btn button1' >Login</a>
        </div>

        <div className='overlay' id='login'>
            <div className='login-wrapper'>
            <h2>LOGIN FORM</h2>
            <a href='#' className='close'>&times;</a>
            <div className='login-content'>
                <div className='login-cont'>
                    <form className='login-form'>
                        <label>Username</label>
                        <input type="text" placeholder='Masukkan Username' required/>
                        <label>E-mail</label>
                        <input type="email" placeholder='Masukkan Email' required/>
                        <label>Password</label>
                        <input type="password" placeholder='Masukkan Password' required/>
                        <input type="submit" value="LOGIN" className='login-submit'/> 
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Login