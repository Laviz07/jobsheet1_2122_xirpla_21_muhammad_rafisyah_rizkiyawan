import React from 'react'
import './form.css'
import Login from './Login'

const Request = () => {
  return (
    <div className='form-container container'>
        {/* <Login/> */}
    <div className='req-container' id='req'>
        <div style={{marginTop:"1rem"}}>
            <h2>Kritik & Saran</h2>
            <form>
                <fieldset>
                    <div className='form-content'>
                        <label>Username</label><br/>
                        <input type="text" required placeholder='Masukkan Username Anda'/>
                    </div>
                    <div className='form-content'>
                        <label>Email</label><br/>
                        <input type="email" required placeholder='Masukkan Email Anda'/>
                    </div>
                    <div className='form-content'>
                        <label>Komentar</label><br/>
                        <textarea required placeholder='Masukkan Komentar Anda' rows="5" cols="110"> </textarea>
                    </div>
                    <div className='form-content good' style={{textAlign:"center"}}>
                        <input type="checkbox" id='good'/>
                        <label for="good">Saya puas dengan pelayanannya</label>
                    </div>
                    <div style={{textAlign:"center", marginTop:"-1rem"}}>
                        <input type="submit" value="Submit"/>
                    </div>
                </fieldset>
            </form>
        </div>
        </div>
        </div>
  )
}

export default Request