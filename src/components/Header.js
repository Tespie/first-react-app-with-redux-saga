import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { productSearch } from '../redux/productAction'

export default function Header() {

    const result = useSelector((state) => state.cartData)
    console.warn('Header cartData = ', result)

    const dispatch = useDispatch();

    return (
        <div className='header'>
            <Link to="/"><h1 className='logo'>My redux-saga Shopping-Center</h1></Link>
            <div className='search-box'>
                <input type="text" onChange={(event) => dispatch(productSearch(event.target.value))} placeholder='Search Product' />
            </div>
            <Link to="/cart">
                <div className='cart-div'>
                    <span>{result.length}</span>
                    <img src='https://cdn2.vectorstock.com/i/1000x1000/06/01/black-shopping-cart-icon-on-transparent-background-vector-22510601.jpg' alt=''></img>
                </div>
            </Link>
        </div>
    )
}
