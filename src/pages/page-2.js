import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header'

const SecondPage = () => (
    <div>  
        <Header currPage="page-2"/>
        <div className="am-container">
            <h1>Hi from the second page</h1>
            <p>Welcome to page 2</p>
            <Link to="/">Go back to the homepage</Link>
        </div>
    </div>
    
)

export default SecondPage
