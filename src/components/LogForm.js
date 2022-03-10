import React, {useState} from 'react';


const LogForm = () =>
{
    // const initialValues = {email:"", password:""};
    // const [formValues, setFormValues] = useState(initialValues);
    // const handleChange = (e) => {
    //     console.log(e.target);
    //     const { name , value } = e.target;

    // }
    //value={formValues.email} onChange={handleChange}
    // value={formValues.email} onChange={handleChange}
    return (

        <div className="container">
        <form>
            

             <h3>Welcome To The Login Page</h3 >
                <p>Sign In to your Account</p>
                <div className="ui divider"></div>
                <div className="ui form">
                <div className="field">
                    <input type="email" placeholder="Email" name="email" id="email" />
                </div>
                <div className="field">
                    <input type="password" placeholder="Password" name="password" id="password"/>
                </div>
                <a href="#" className="forgot">Forgot your Password?</a>
                <br></br>
                <br></br>
                
                
                <button className="button1">Sign In</button>
                    <p>OR</p>
                <button className="button2">Join With Code</button>
                
               <span className='span'>Don't Have An Account? <a href="#" className='sign'>Sign up </a></span>
               
               


            </div>
        </form>
        </div>


    )
    

}

export default LogForm;