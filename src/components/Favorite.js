import React, { useEffect, useState } from "react";
import Widget from "./Widget";
import styled from '../App.module.css';

export default function Favorite(){
  const [favorites, setFavorites] = useState([]);

  useEffect(()=>{
    function getFavFromLocalStorage() {
      const storedFavString = localStorage.getItem('fav');
      const storedFavArray = storedFavString ? JSON.parse(storedFavString) : [];
      setFavorites(storedFavArray);
    }
    getFavFromLocalStorage();
  }, []);

    return(
  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">Favorites</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className={styled.main_container}>
              {favorites.map((product) =>
                      <Widget style={{width: '100%'}}
                          key={product.id}
                          imageUrl={product.imageUrl}
                          cost={product.cost}
                          name={product.name}
                      />
              )}
          </div>
          </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>);
}