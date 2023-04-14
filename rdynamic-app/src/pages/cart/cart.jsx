import React, { useContext } from "react";
import { ShopContext} from "../../context/shop-context";
import { PRODUCTS } from "../../mock-data/products"
import { CartItem } from "./cart-item"
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
    const { cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cart">
                { 
                    PRODUCTS.map((product) => {
                        return cartItems[product.id] !==0 ? <CartItem data={product} /> : false;
                    })
                };
            </div>
            {totalAmount > 0 ? (
            <div className="checkout">
                <p> Subtotal: R{totalAmount} </p>
                <button onClick={() => navigate("/")}>Continue Shopping</button>
                <button>Checkout</button>
            </div>
            ) : (
                <h1> Your Cart is Empty</h1>
            )}
        </div>
    )
}