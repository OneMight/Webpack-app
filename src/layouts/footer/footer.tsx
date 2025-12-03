import React from 'react'
import './footer.css'
export default function Footer(){
    const handlePrevent = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
    }
    return(
        <footer className='footer'>
            <div className='footer-describe'>
                <img src="./images/logo-70-white.svg" alt="logo-white" />
                <h2 className='footer-title'>Subscribe To Your Newsletter to Stay Updated About Discounts</h2>
                <form onSubmit={(e) => handlePrevent(e)} className='footer-form'>
                    <input type="text" name='email-subscription' placeholder='example@email.com' className='email-subscription'/>
                    <button type="button" name='submit-button' className='submit-button'>{'>'}</button>
                </form>
                
            </div>
            <div className='sub-footer'>
                <p className='sub-footer_copyright'>Copyright © 2023 Renew Bariatrics, Inc</p>
            </div>
        </footer>
    )
}