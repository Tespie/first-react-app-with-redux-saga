import React from 'react'
import { useSelector } from 'react-redux'

export default function Header() {

    const result = useSelector((state) => state.cartData)
    console.warn('Header cartData = ', result)

    return (
        <div className='header'>
            <div className='cart-div'>
                <span>{result.length}</span>
                <img src='https://cdn-icons-png.flaticon.com/512/263/263142.png' alt=''></img>
            </div>
            Learn Redux in React
        </div>
    )
}
