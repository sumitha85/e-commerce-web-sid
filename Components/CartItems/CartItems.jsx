// import React, { useContext } from "react";
// import './CartItems.css';
// import { ShopContext } from "../../Context/ShopContext";
// import remove_icon from "../Assets/cart_cross_icon.png";
// const CartItems = () => {
//     const {getTotalCartAmount,all_product,CartItems,removeFromCart} = useContext(ShopContext);
//     return (
//         <div className="cartitems">
//            <div className="cartitems-format-main">
//             <p>Products</p>
//             <p>Title</p>
//             <p>Price</p>
//             <p>Quantity</p>
//             <p>Total</p>
//             <p>Remove</p>
//            </div>
//            <hr />
//            {all_product.map((product) => {
//                 const quantity = cartItems[product.id];
//                 if (quantity > 0) {
//                    const totalPrice = product.new_price * quantity;
//                    return (
//                       <div key={product.id}>
//            /* {all_product.map((product)=>{
//                 // const quantity = cartItems[product.id];
//                 if (quantity > 0) {
//                 const totalPrice = product.new_price * quantity;
//                 div key={product.id}>
//             //   if(CartItems[e.id]>0)
//               {
//                 return <div > */
//                           <div className="cartitems-format cartitems-format-main">
//                     <img src={e.image} alt="" className="carticon-product-icon" />
//                     <p>{e.name}</p>
//                     <p>${e.new_price}</p>
//                     <button className="cartitems-quantity">{CartItems[e.id]}</button>
//                     <p>${e.new_price*CartItems[e.id]}</p>
//                     <img className="cartitems-remove-icon" src={remove_icon} onClick={()=> removeFromCart(e.id)} alt="" />
//                 </div>
//                 <hr />
//                 </div>
//               }
//               return null;
//            })}
//           <div className="cartitems-down">
//             <div className="cartitems-total">
//                 <h1>Cart Totals</h1>
//                 <div>
//                     <div className="cartitems-total-item">
//                         <p>Subtotal</p>
//                         <p>${getTotalCartAmount()}</p>
//                     </div>
//                     <hr />
//                     <div className="cartitems-total-item">
//                         <p> Shipping Fee </p>
//                         <p> Free </p>
//                     </div>
//                     <hr />
//                     <div className="cartitems-total-item">
//                         <h3>Total</h3>
//                         <h3>${getTotalCartAmount()}</h3>
//                     </div>
//                 </div>
//                 <button>PROCEED TO CHECKOUT</button>
//             </div>
//             <div className="cartitems-promocode">
//                 <p>If you have a promo code, Enter it here</p>
//                 <div className="cartitems-promobox">
//                     <input type="text" placeholder="Promo Code" />
//                     <button>Submit</button>
//                 </div>
//             </div>
//           </div>
//         </div>
//     )
// }

// export default CartItems;


import React, { useContext } from "react";
import './CartItems.css';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
    // Destructure required values from context
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    // Render only the items in the cart
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((product) => {
                const quantity = cartItems[product.id];
                if (quantity > 0) {
                    const totalPrice = product.new_price * quantity;
                    return (
                        <div key={product.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={product.image} alt={product.name} className="carticon-product-icon" />
                                <p>{product.name}</p>
                                <p>${product.new_price}</p>
                                <button className="cartitems-quantity">{quantity}</button>
                                <p>${totalPrice}</p>
                                <img
                                    className="cartitems-remove-icon"
                                    src={remove_icon}
                                    alt="Remove"
                                    onClick={() => removeFromCart(product.id)}
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here:</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="Promo Code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
