import React, { useState } from 'react';

export default function Login() {
    const [user, setUser] = useState('');
    const [pass, setPassword] = useState('');
    const [display,setDisplay]= useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if(user=="user" && pass=="password")
        {
            setDisplay('Welcome, user');
        }
        else
        {
            setDisplay('Invalid username or password');
        }
        console.log('Username:', user);
        console.log('Password:', pass);
        // Here you can handle your login logic, e.g., API call
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type='text'
                    value={user}
                    onChange={(e) => setUser(e.target.value)} // Update user state
                    required
                />
                <br />
                <label>Password</label>
                <input
                    type='password' // Changed to 'password' type
                    value={pass}
                    onChange={(e) => setPassword(e.target.value)} // Update pass state
                    required
                />
                <br />
                <button type='submit'>Submit</button> {/* Button type changed to 'submit' */}
            </form>
            <div>{display}</div>
        </div>
    );
}
