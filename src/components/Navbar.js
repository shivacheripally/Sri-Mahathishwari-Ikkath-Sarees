import React, { useEffect, useState } from "react";
import styled from '../App.module.css';
import Widget from './Widget';

export default function Navbar(){
  const[fav, setFav] = useState([]);

  const onClickFav = ()=>{
    const fav = localStorage.getItem('fav');
    console.log('fav',typeof fav);
    setFav(fav);
  }

    return(
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src="https://i.ibb.co/7jwyxj0/logo.jpg" alt="logo" className={styled.logo_img}/>
    <a className="navbar-brand" href="#">Sri Mahathishwari Ikkath Sarees</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" target="_blank" aria-current="page" href="https://wa.me/919030903058"><i className="bi bi-whatsapp"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" target="_blank" href="https://www.facebook.com/rspochampallyikkatsarees?mibextid=LQQJ4d"><i className="bi bi-facebook"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" target="_blank" href="https://instagram.com/pochampallyikkatsarees?igshid=MGU3ZTQzNzY="><i className="bi bi-instagram"></i></a>
        </li>
        <li className="nav-item">
          <a data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="nav-link" href="#"><i onClick={onClickFav} className="bi bi-bag-heart"></i></a>
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
          <div className="modal-content">
          <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">Favorites</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">  
        {/* {fav && fav.map((item, index)=>{
          console.log('Item', item);
          return(
            <Widget key={index} imageUrl={item.imageUrl} cost={item.cost} name={item.name}/>
          );
        })} */}
        </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primay">Buy All</button>
      </div>
    </div>
  </div>
</div>
        </li>
        <li className="nav-item">
          <a className="nav-link" target="_blank" href="https://youtube.com/@Mahathishwarisarees"><i className="bi bi-youtube"></i></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#"><span>Less than 7000</span></a></li>
            <li><a className="dropdown-item" href="#"><span>7000-8000</span></a></li>
            <li><a className="dropdown-item" href="#"><span>8000-9000</span></a></li>
            <li><a className="dropdown-item" href="#"><span>9000-10000</span></a></li>
            <li><a className="dropdown-item" href="#"><span>10000-11000</span></a></li>
            <li><a className="dropdown-item" href="#"><span>More than 11000</span></a></li>            
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" target="_blank" href="mailto:shivacheripally14@gmail.com"><i className="bi bi-envelope-at"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" target="_blank" href="https://maps.app.goo.gl/fdmSG5Xr7YtsaHyUA?g_st=iw"><i className="bi bi-geo-alt-fill"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="tel: 9848963748"><i className="bi bi-telephone-outbound-fill"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}