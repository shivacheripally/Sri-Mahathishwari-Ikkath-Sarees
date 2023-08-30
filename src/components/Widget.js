import React, { useState } from "react";
import styled from '../App.module.css';


function BuyNow(){
    
}

export default function Widget(props){
    const {imageUrl, id, cost, name} = props;
    console.log("name", name);
    return(
        <div className={styled.widget}>
                <img src={imageUrl} alt={"image"+id} />
                <div className={styled.product_info}>
                    {/* <span> {name}</span> */}
                    <span>Price: <b>{cost}</b></span>
                </div>
                <div className={styled.buttons}>
                    <button className="btn btn-primary">Buy Now</button>
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
    );
}