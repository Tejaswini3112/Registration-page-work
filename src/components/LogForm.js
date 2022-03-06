import React from 'react';


const LogForm = () =>
{
    return (
        <form>
            <div className="form-inner ">

                <h2>Welcome To The Login Page</h2>
                <p>Sign In to your Account</p>
                <br />
                <div className="form-group my-3">
                    <label htmlFor="email">Email:</label>
                    <input type='email' placeholder='Email' name='email' id='email'/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="password">Password:</label>
                    <input type='password' placeholder='Password' name='password' id='password'/>
                </div>
                <div >
                    <input type='submit' value='Sign In'/>
                </div>
                {/* OR */}
                <div>
                    <input type='submit' value='Join with Code'/>
                </div>
            </div>
        </form>
    )
    

}

export default LogForm;