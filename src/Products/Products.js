import React, { useContext } from 'react'
import { Cart } from '../Context/Context'
import './Products.css'
import SingleProducts from './SingleProducts'

const Products = () => {

  const { state } = useContext(Cart)

  const products = state.products;

  // console.log(state.cart);

  return (
    <div>
      <h1 className='mt-4 mb-4 product_page_heading'>Latest Products</h1>

      <div className="prod_filter_div mt-4">

        {/* <div className="filters_div bg-dark text-white rounded">
          <h2> Filters </h2>

          <div className="form-check mt-3">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Assending
              </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Dessending
              </label>
          </div>
        </div> */}

        <div className="products_div">
          {products.map((prod) => {
            return (
              // <h1> {prod.className} </h1>
              <SingleProducts prod={prod} key={prod.id} />
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Products