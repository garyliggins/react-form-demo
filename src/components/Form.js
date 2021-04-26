import React, {useState} from 'react'

const Form = ({setEmail, setFirstName, setLastName, setPassword}) => {

    return (
        <form>
            
            <div className="input">
                <label>First Name</label>
                <input onChange={(e)=> setFirstName(e.target.value)} type="text" placeholder="First Name"/>
            </div>
            <div className="input">
                <label>Last Name</label>
                <input onChange={(e)=> setLastName(e.target.value)} type="text" placeholder="Last Name" />
            </div>
            <div className="input">
                <label>Email</label>
                <input onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Email" />
            </div>
            <div className="input">
                <label>Password</label>
                <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
            </div>
        </form>
    )
}

export default Form
