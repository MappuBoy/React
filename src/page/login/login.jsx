import React from 'react'
import './login.css'
const  Loginform = () => {
  return (
   <div className='panel'>
    <div className='form'>
      <div id='blable'>
        <h2>Login</h2>
      </div>
      <div id='bform'>
        <input type='text' name='username' placeholder='username'/>
        <input type='password' name='password' placeholder='Password'/>
      </div>
      <div id='buttom'>
        <div id='lblogin'><a id='logincolour' href='/singup'>login</a></div>
        <h5>Create new user account ? <a href='/singup'>click here</a></h5>
      </div>
    </div>
   </div>
  )
}

export default Loginform;