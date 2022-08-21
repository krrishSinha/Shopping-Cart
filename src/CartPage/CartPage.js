import React, { useContext, useState } from 'react'
import { Cart } from '../Context/Context'
import SingleProductList from './SingleProductList'
import './CartPage.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const CartPage = () => {
  const [total, setTotal]= useState()

  const {state, dispatch} = useContext(Cart);
  const cart = state.cart;

  useEffect(() => {
    const price = cart.reduce((acc,curr)=> acc + Number(curr.price) , 0)
    setTotal(price)
  }, [cart])
  

  return (
    <>
      <h1 className='cart_page_heading'> Your Products </h1>

    <div className='cart_page_div'>
      <div className="products_lists_div">
        <SingleProductList cart={cart} dispatch={dispatch} />
      </div>

      <div className="total_div bg-dark text-white">
        <h2>SubTotal: ₹ {total} </h2>
        <Link to='/'><button className='w-100 btn btn-primary'> Go to Shopping Cart </button></Link>
      </div>

    </div>
    </>
  )
}

export default CartPage