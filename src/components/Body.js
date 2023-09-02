import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import Widget from './Widget';
import db from '../FirebaseInit';
import styled from '../App.module.css';

export default function Body(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            onSnapshot(
                collection(db, "rates"), 
                (snapshot) => {
                    const data = snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}));
                    setData(data);
                },
                (error) => {
                    console.log('Error While Fecthing Data: ');
                    return ;
                });
            }
        fetchData();
    },[setData])

    return (
        <div className={styled.main_container}>
            {data && data.map((products) => {
                return products.products.map((product, itemIndex) => {
                    return (
                        <Widget
                            key={itemIndex}
                            imageUrl={product.imageUrl}
                            cost={products.id}
                            id={products.id}
                            name={product.name}
                        />
                    );
                });
            })}
        </div>
    );
    
}