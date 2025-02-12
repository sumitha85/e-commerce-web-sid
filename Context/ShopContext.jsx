// import React, { createContext, useState, useEffect } from "react";
// import all_product from "../Components/Assets/all_product";

// export const ShopContext = createContext(null);
// const getDefaultCart = () => {

//     let cart = {};
//     for (let index = 0; index < all_product.length + 1; index++) {
//         cart[index] = 0;
//     }
//     return cart;
// }

// const ShopContextProvider = (props) => {

//     const [cartItems, setCartItems] = useState(getDefaultCart());


//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
//         console.log(cartItems);
//     }

//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
//     }
//     useEffect(() => {
//         console.log(cartItems);
//     }, [cartItems]);

//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 let itemInfo = all_product.find((product) => product.id === Number(item))
//                 totalAmount += itemInfo.new_price * cartItems[item];
//             }
//         }
//         return totalAmount;
//     }
//     const getTotalCartItems = () => {
//         let totalItem = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 totalItem += cartItems[item];
//             }
//         }
//         return totalItem;
//     }

//     const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };
//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>

//     );
// }

// export default ShopContextProvider;



import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";

// Initialize the cart with zero quantity for each product
const getDefaultCart = () => {
    let cart = {};
    // Initialize the cart with product ids as keys, and 0 as initial quantity for each
    all_product.forEach((product) => {
        cart[product.id] = 0;
    });
    return cart;
};

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Add item to the cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    // Remove item from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    // Log cart items whenever cart changes
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    // Get total amount of all items in the cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo?.new_price) {  // Safe check for itemInfo and new_price
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    // Get total number of items in the cart
    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    // Provide context values to other components
    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
