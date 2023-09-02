import React, { useEffect, useState } from "react";
import styled from '../App.module.css';

function BuyNow(imageUrl, cost) {
    const phoneNumber = "9030903058"; // Replace with the actual phone number
    const message = `Hey, I want to buy this product which costs ${cost}.\n \nPlease have a look at the product Image: \n\n${imageUrl}`;
  
    // Encode the message and phone number for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  
    // Open the WhatsApp link
    window.open(whatsappUrl, '_blank');
}
  

export default function Widget(props){
    const {imageUrl, id, cost, name} = props;
    const [fav, setFav] = useState([]);

    useEffect(() => {
        const favorites = localStorage.getItem('fav');
    
        if (favorites) {
            setFav(JSON.parse(favorites)); // Parse the stored string back to an array
        }
    }, []);
    
    function AddToCart(imageUrl, cost, name) {
        const updatedFav = [...fav, { imageUrl, cost, name }];
        setFav(updatedFav);
        localStorage.setItem('fav', JSON.stringify(updatedFav)); // Convert array to JSON string before storing
        console.log("fav", updatedFav);
        alert('Add to cart is not available right now!');
    }

    console.log("name", name);
    return(
        <div className={styled.widget}>
                <div className={styled.image}>
                    <img src={imageUrl} alt={"image"+id} />
                </div>
                <div className={styled.product_info}>
                    <span> {name}</span>
                    <span>Price: <b>{cost}</b></span>
                </div>
                <div className={styled.buttons}>
                    <button onClick={()=>{BuyNow(imageUrl, cost)}} className="btn btn-primary">Buy Now</button>
                    <button onClick={()=>{AddToCart(imageUrl, cost, name)}} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
    );
}