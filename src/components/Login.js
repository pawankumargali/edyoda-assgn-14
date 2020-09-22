import React, { useState } from 'react';

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
        history.push('/dashboard');
    }

    const handleCredentialChange = e => setCredentials({...credentials, [e.target.name]:e.target.value});

    return (
        <div class="container tm-mt-big tm-mb-big">
      <div class="row">
        <div class="col-12 mx-auto tm-login-col">
          <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
            <div class="row">
              <div class="col-12 text-center">
                <h2 class="tm-block-title mb-4">Welcome to Dashboard, Login</h2>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-12">
                <form action="index.html" method="post" class="tm-login-form">
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input
                      name="username"
                      type="text"
                      class="form-control validate"
                      id="username"
                      value={credentials.username || ''}
                      onChange={handleCredentialChange}
                      required
                    />
                  </div>
                  {usernameErr && <div style={{color:'red'}}>{usernameErr}</div>}

                  <div class="form-group mt-3">
                    <label for="password">Password</label>
                    <input
                      name="password"
                      type="password"
                      class="form-control validate"
                      id="password"
                      value={credentials.password || ''}
                      onChange={handleCredentialChange}
                      required
                    />
                  </div>
                  {pwdErr && <div style={{color:'red'}}>{pwdErr}</div>}
                  <div class="form-group mt-4">
                    <button
                      type="submit"
                      class="btn btn-primary btn-block text-uppercase"
                      onClick={initiateLogin}
                    >
                      Login
                    </button>
                  </div>
                  <button class="mt-5 btn btn-primary btn-block text-uppercase">
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