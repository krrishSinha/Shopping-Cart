import React from 'react'
import './CartPage.css'
import { AiFillDelete } from 'react-icons/ai'

const SingleProductList = ({ cart, dispatch }) => {
    return (
        <>
            {
                cart.map((prod) => {
                    return (
                        <>
                        <div className='single_product_list'>
                            <img src={prod.image} alt={prod.name} />
                            <h4> {prod.name} <br /> <h5 className='mt-2' > ₹ {prod.price} </h5> </h4>
                            <p className='btn btn-primary'  onClick={() => { dispatch({ type: 'REMOVE_FROM_CART', payload: prod.id }) }}
                            > <AiFillDelete /> </p>
                        </div>
                        <hr />
                        </>
                    )
                })
            }
        </>
    )
}

export default SingleProductList