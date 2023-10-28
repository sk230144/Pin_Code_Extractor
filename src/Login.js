import React, { useState } from 'react'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <label for="username">Login Id:</label>
                <input type="text" id="username" name="username" placeholder='Enter Login Id' required />
                <label for="password">Password:</label>
                <div className="password-container">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button className='toggle-password-button' onClick={togglePasswordVisibility}>
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
                <div className='inputs'>
                <input type="checkbox" id="remember-me" name="remember-me" value="remember-me" />
                <label for="remember-me">Remember me</label>
                <input type="checkbox" id="term" name="term" value="term" />
                <label for="remember-me">Conditions</label>
                <a href='#'>Change Password</a>
                <input type='submit' name="submit" value="submit" />
                </div>
            </form>
        </div>
    )
}

export default Login
