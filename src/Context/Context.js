import { createContext, useReducer } from "react";
import {faker} from '@faker-js/faker'
import { productReducer } from "./productReducer";

const Cart = createContext();

const CartContext = ({ children }) => {

    const products = [...Array(20)].map(()=>{
        return {
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price().split(".")[0],
            image: faker.image.image(),
            inStock: faker.datatype.number({ min: 0, max: 5}),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.datatype.number({ min: 1, max: 5}),
        }
    });

    const [state, dispatch] = useReducer(productReducer, {
        products: products,
        cart: []
    })

return <Cart.Provider value={{state, dispatch}} > {children} </Cart.Provider>
}

export { Cart, CartContext };