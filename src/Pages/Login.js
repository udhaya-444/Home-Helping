import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import '@mui/material';

function Login() {
  return (
    <div className="App">
      <form action="">
        <h3>LOGIN</h3>
        <br></br>
        <div className="input-box">
          <label>Username : </label>
          <br></br>
        <TextField className="inbox" variant="outlined" label="Enter Username" type="email" required/>
        </div>
        <br></br>
        <div className="input-box">
            <label>Password : </label>
            <br></br>
       <TextField className="inbox" variant="outlined" label="Password" type="password" required/>
       <br></br>
        </div>
        <br></br>
        <button type="submit"><Link to="/Home">Login</Link></button>
      </form>
          <p>Don't have an account ? </p>
          <Link to="/Signup">Signup</Link>
    </div>
  );
}

export default Login;