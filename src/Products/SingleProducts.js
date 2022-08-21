import React, { useContext } from 'react'
import { Cart } from '../Context/Context';

const SingleProducts = ({ prod }) => {

    const { state, dispatch } = useContext(Cart)

    const { products, cart } = state;

    //   console.log(state);

    return (
        <>
            <div className="card" style={{ width: "15rem" }} key={prod.id}>
                <img src={prod.image} className="card-img-top" alt={prod.name} />
                <div className="card-body">
                    <h5 className="card-title"> {prod.name} </h5>
                    <p className="card-text"> ₹ {prod.price} </p>

                    <div className="buttons">

                        {
                            cart.some((p) => p.id == prod.id) ? (
                                <a href="#" className="btn btn-danger btn-sm"
                                    onClick={() => { dispatch({ type: 'REMOVE_FROM_CART', payload: prod.id }) }}
                                >Remove from Cart</a>
                            ) : (
                                <a href="#" className="btn btn-primary btn-sm"
                                    onClick={() => { dispatch({ type: 'ADD_TO_CART', payload: prod }) }}
                                >Add to Cart</a>
                            )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProducts