import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

function Login() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()
        //firebase login
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault()
        //firebase register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {

                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }


    return (
        <div className="login">
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'></img>
            </Link>

            <div className='login__container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input
                        type='text'
                        value={email}
                        onChange={e => setEmail(e.target.value)}>

                    </input>

                    <h5>Password</h5>
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}>

                    </input>

                    <button type='submit' onClick={signIn} className='login__signInButton'>Continue</button>
                </form>
                <p>By continuing, you agree to Amazon's (Clone FAKE) Conditions of Use and Privacy Notice.</p>


            </div>
            <h6 className='new__amazon'>New to Amazon?</h6>
            <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
        </div>
    )
}

export default Login
