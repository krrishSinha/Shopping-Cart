import React, { useContext } from 'react'
import './Header.css'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
import { Cart } from '../Context/Context'
import { Link } from 'react-router-dom'

const Header = () => {

    const { state, dispatch } = useContext(Cart);

    const { products, cart } = state;

    console.log(cart)

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid nav-div">
                    <a className="navbar-brand" href="#"> Shopping Cart </a>

                    {/* <div className="d-none d-md-block" id="">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div> */}

                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaShoppingCart /> <span class="badge badge-light"> {cart.length} </span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end  dropdown-menu-dark">

                            {
                                cart.length > 0 ? (cart.map((prod) => {
                                    return (

                                        <span className='product_list'>
                                            <img src={prod.image} alt={prod.name} />
                                            <div className='price_div'>
                                                <h6> {prod.name} </h6>
                                                <h6> ₹ {prod.price} </h6>
                                            </div>
                                            <h5 onClick={() => { dispatch({ type: 'REMOVE_FROM_CART', payload: prod.id }) }} > <AiFillDelete /> </h5>
                                        </span>

                                    )
                                }))
                                    : (
                                        <>
                                            <h6 style={{ padding: '.5rem 1rem' }} >Cart is empty</h6>
                                        </>
                                    )
                            }

                            <Link to='/cart'><button disabled={cart.length===0} id='go_to_cart' className='btn btn-primary'> Go To Cart </button> </Link>

                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header