import React from "react";
import './DescriptionBox.css';
const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="description-nav-box">Description</div>
                <div className="description-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that allows customers to buy and sell goods
                and services without visiting a physical store.E-commerce websites allow customers to shop
                from anywhere at any time, and provide a wide range of product options. They also allow 
                businesses to sell to a global audience with minimal investment.Unlike brick-and-mortar
                stores, an online presence allows businesses to connect with customers around the
                world, expanding their market reach and potentially increasing sales.</p>
                <p>E-commerce typically uses the web for at least a part of a transaction's life cycle
                   although it may also use other technologies such as e-mail. Typical e-commerce 
                   transactions include the purchase of products</p>
                   </div>       
        </div>
    )
}

export default DescriptionBox;