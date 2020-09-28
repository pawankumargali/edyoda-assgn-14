import React, {  useState  } from 'react';
import { setAuth } from '../utils/auth';

function Login({ history }) {
    const [credentials, setCredentials] = useState({username:'', password:''});
    const [usernameErr, setUsernameErr] = useState(false);
    const [pwdErr, setPwdErr] = useState(false);
  
    const initiateLogin = e =>  {
        e.preventDefault();
        const {username, password} = credentials
        if(!username)  {
            setUsernameErr('username is required');
            return;
        }
        if(!password) {
            setPwdErr('password is required')
            return;
        }
        if(password.length<6) {
            setPwdErr('Password should be greater than 5 characters');
            return;
        }
        setAuth(true);
        history.push('/');   
    }

    const handleCredentialChange = e => setCredentials({...credentials, [e.target.name]:e.target.value});

    return (
        <div className="container tm-mt-big tm-mb-big">
      <div className="row">
        <div className="col-12 mx-auto tm-login-col">
          <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="tm-block-title mb-4">Welcome to Dashboard, Login</h2>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <form action="index.html" method="post" className="tm-login-form">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      name="username"
                      type="text"
                      className="form-control validate"
                      id="username"
                      value={credentials.username || ''}
                      onChange={handleCredentialChange}
                      required
                    />
                  </div>
                  {usernameErr && <div style={{color:'red'}}>{usernameErr}</div>}

                  <div className="form-group mt-3">
                    <label htmlFor="password">Password</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control validate"
                      id="password"
                      value={credentials.password || ''}
                      onChange={handleCredentialChange}
                      required
                    />
                  </div>
                  {pwdErr && <div style={{color:'red'}}>{pwdErr}</div>}
                  <div className="form-group mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block text-uppercase"
                      onClick={initiateLogin}
                    >
                      Login
                    </button>
                  </div>
                  <button className="mt-5 btn btn-primary btn-block text-uppercase">
                    Forgot your password?
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Login;