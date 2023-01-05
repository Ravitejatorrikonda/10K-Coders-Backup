import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const { username, password } = data;

    const userOnchange = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] })
    }

    const submitDetails = (e) => {
        e.preventDefault()
        console.log("submitted details:")
        fetch("https://e-prathibha.com/apis/login")
            .then((response) => {
                console.log("console login details", response)
            })
            .catch((error) => {
                console.log("error", error)
            })
    }
    return (
        <div>
            <div>
                <h1>
                    Please Login here!
                </h1>
                <div>
                    <form
                        onSubmit={submitDetails}
                    >
                        <input type="email" name='username' placeholder='Please enter your email here' value={username} onChange={userOnchange} /><br />
                        <input type="password" name='password' placeholder='Please enter your password here' value={password} onChange={userOnchange} /><br />

                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
