import React from 'react'

const Footer = () => {
    return (
        <div>
            <ul>
                <li onClick={(e) => { e.preventDefault(); window.location.href='https://www.facebook.com/gary.liggins.3/'; }} >Facebook</li>
                <li onClick={(e) => { e.preventDefault(); window.location.href='https://www.linkedin.com/in/garyliggins/'; }} >Linkedin</li>
               
                </ul>
        </div>
    )
}

export default Footer
