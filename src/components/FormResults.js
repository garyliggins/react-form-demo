import React from 'react'

const FormResults = ({firstName, lastName, email, password}) => {
    return (
        <div className="results">
            <p>Name: {firstName} {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </div>
    )
}

export default FormResults
