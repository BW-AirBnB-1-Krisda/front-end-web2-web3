import React from 'react';

function UserLogin() {
    return (
        <form>

            <label>Username:</label>
                <input
                minLength='8'
                placeholder='username'
                id='username'
                name="username"
                type='text'
                />

            <label>Password:</label>
                <input
                placeholder='password'
                id='password'
                name='password'
                type='text'
                />

            <div>
            <button>LOGIN</button>
            </div>
            <div>

            <button>FORGOT PASSWORD</button>
            </div>
            
            <a>Don't have an account?</a>
            
            <button>Create account</button>

        </form>
    )
}

export default UserLogin