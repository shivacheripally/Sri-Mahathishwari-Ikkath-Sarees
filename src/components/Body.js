import { collection, onSnapshot, doc } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import Widget from './Widget';
import db from '../FirebaseInit';
import styled from '../App.module.css';

export default function Body() {
    const [products, setProducts] = useState([]);
    const [ratesAvailable, setRatesAvailable] = useState([]);

    useEffect(() => {
        const fetchRates = async () => {
            const unsubscribe = onSnapshot(collection(db, "rates"), (querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setRatesAvailable(data);
            });

            // Return a cleanup function to unsubscribe when component unmounts
            return () => {
                unsubscribe();
            };
        };

        fetchRates();
    }, []);
    
    useEffect(() => {
        const fetchProducts = async (rate) => {
            const ratesDocRef = doc(db, "rates", rate); //uploadRate.toString()
            const productsCollectionRef = collection(ratesDocRef, "products");

            const unsubProductsCollection = onSnapshot(productsCollectionRef, (snapshot) => {
                const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProducts((prevProducts) => [...prevProducts, data]);
                dataArr.push(data);
            });

            return () => {
                unsubProductsCollection();
            };
        };

        const dataArr = [];
        setProducts([]);
        
        for (const rate of ratesAvailable) {
            fetchProducts(rate.id);
        }

    }, [ratesAvailable])

    return (
        <div className={styled.main_container}>
            {products.map((product) =>
                product.map((item) => (
                    <Widget
                        key={item.id}
                        imageUrl={item.imageUrl}
                        cost={item.price}
                        id={item.id}
                        name={item.name}
                    />
                ))
            )}
        </div>
    );
}