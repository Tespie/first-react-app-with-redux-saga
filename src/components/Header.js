import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {

    const result = useSelector((state) => state.cartData)
    console.warn('Header cartData = ', result)

    return (
        <div className='header'>
            <Link to="/"><h1 className='logo'>E-Comm</h1></Link>
            <Link to="/cart">
                <div className='cart-div'>
                    <span>{result.length}</span>
                    <img src='https://cdn2.vectorstock.com/i/1000x1000/06/01/black-shopping-cart-icon-on-transparent-background-vector-22510601.jpg' alt=''></img>
                </div>
            </Link>
            Learn Redux in React
        </div>
    )
}
