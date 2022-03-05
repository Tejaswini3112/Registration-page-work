import React from 'react';


const LogForm = () =>
{
    return (
        <div className="container">
        <form>
            

             <h2>Welcome To The Login Page</h2>
                <p>Sign In to your Account</p>
                <div className="ui divider"></div>
                <div className="ui form">
                <div className="field">
                    <input type="email" placeholder="Email" name="email" id="email"/>
                </div>
                <div className="field">
                    <input type="password" placeholder="Password" name="password" id="password"/>
                </div>
                <a href="#" className="forgot">Forgot your Password? </a>
                
                
                <button className="ui button">Sign In</button>
                    <p>OR</p>
                <button className="fluid ui button blue">Join With Code</button>

               <span>Don't Have An Account? <a href="#" className='sign'>Sign up </a></span>
               


            </div>
        </form>
        </div>


    )
    

}

export default LogForm;