import './auth.css'
import '../registration/registration.css'
import Button from '../../components/button/button'
import FormInput from '../../components/inputs/formInput/formInput'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
export default function Auth(){
    return(
        <main className='auth-page'>
            <div className='auth'>
                <section className='auth-con'>
                    <div className='auth-text'>
                        <h2 className='auth-title'>Login</h2>
                        <p className='redirect'>Do not have an account,<Link className='registration-login' to={ROUTES.REGISTER}>create a new one</Link>.</p>
                    </div>
                    <form className='auth-inputs'>
                        <FormInput label='Enter Your Email' name='email' placeholder='Enter email' type='text' width='95%'/>
                        <FormInput label='Enter Your Password' name='password' placeholder='Enter password' type='password' width='95%'/>
                        <Button  width='100%' padding='10px 0' borderRadius='30px' fontSize='20px' color='#fff'>Create Account</Button>
                    </form>
                </section>
                <div className='img'>
                    <img className='image' src="./images/registration-img.jpg" alt="auth-image" />
                </div>
            </div>
        </main>
    )
}