import React from 'react'
import './registration.css'
import { ROUTES } from '../../utils/routes'
import { Link } from 'react-router-dom'
import FormInput from '../../components/inputs/formInput/formInput'
import Button from '../../components/button/button'
export default function Registration(){
    const handlePreventDefault = (e:React.FormEvent<HTMLElement>) =>{
        e.preventDefault()
    }
    return(
        <main className='registration-page'>
            <div className='registration'>
                <div className='registration-con'>
                    <div className='registration-text'>
                        <h2 className='registration-title'>Signup</h2>
                        <p className='redirect'>Already Have An Account, {<Link to={ROUTES.LOGIN} className='registration-login'>Login</Link>}.</p>
                    </div>
                    <form onSubmit={handlePreventDefault} className='registration-form'>
                        <div className='registration-inputs'>
                            <FormInput label='Full name' name='full-name' placeholder='Enter full name' type='text'/>
                            <FormInput label='Email' name='email' placeholder='Enter email' type='text'/>                           
                        </div>
                       <div className='registration-inputs'>
                            <FormInput label='Password' name='password' placeholder='Enter password' type='password'/>
                            <FormInput label='Confirm Password' name='c-password' placeholder='Confirm password' type='password'/>
                       </div>
                       <label className='registration-terms'>
                            <input type="checkbox" required/>
                             I have read and agreed to the Terms of Service and Privacy Policy
                       </label>
                       <Button  width='100%' padding='10px 0' borderRadius='30px' fontSize='20px' color='#fff'>Create Account</Button>
                    </form>
                </div>
                <div className='registration-img'>
                    <img className='reg-image' src="./images/registration-img.jpg" alt="" />
                </div>
            </div>
        </main>
    )
}