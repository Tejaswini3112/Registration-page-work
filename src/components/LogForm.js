
////----------------------THE LOGIN FORM I.E., CARD CONTAINING EMAIL, PASSWORD, FORGOT, SUBMIT, JOPIN WITH CODE AND SIGNUP---------------------



import React from 'react';

//------------------FUNCTION FOR LOFIN FORM/CARD-------------------
const LogForm = () =>
{
    
    return (

        <div className="container">
        <form>
            

             <h3>Welcome To The Login Page</h3 >
                <p>Sign In to your Account</p>
                
                <div>

                {/* ------------------------------------EMAIL FIELD --------------------------------------------*/}
                <div className="field">
                    <input type="email" placeholder="Email" name="email" id="email" />
                </div>
                
                {/* -------------------------------THE CODE BELOW CONTAINS PASSWORD AND FORGOT YOUR PASSWORD FIELDS---------------------------- */}
                <div className="field">
                    <input type="password" placeholder="Password" name="password" id="password"/>
                </div>
                <a href="#" className="forgot">Forgot your Password?</a>
                <br></br>
                <br></br>
                
               {/* ------------------JOIN WITH CODE AND SUBMIT BUTTONS BELOW =--------------------- */}
                <button className="button1">Sign In</button>
                    <p>OR</p>
                <button className="button2">Join With Code</button>

                {/* ------------------------SIGN UP LINK BELOW-------------------------------------- */}
                
               <span className='span'>Don't Have An Account? <a href="#" className='sign'>Sign up </a></span>
               
            </div>
        </form>
        </div>


    )
    

}

export default LogForm;