import React from "react";
import styled from '../App.module.css';

export default function Footer(){
    return (
    <div id={styled.footer}>
      <div className={styled.footer_div1}>
        <h1 className={`${styled.white_color} ${styled.contact_details}`}><img src="https://i.ibb.co/7jwyxj0/logo.jpg" alt="logo" />Contact Details</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.372688639326!2d78.8163599!3d17.345790600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb0dcd040f429b%3A0x8d7bd59579d763d4!2sMahathishwari%20Sarees!5e0!3m2!1sen!2sin!4v1693402398646!5m2!1sen!2sin" width="450" height="320" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <h2 className={styled.white_color}><i className="fa-solid fa-address-card"></i> Sri Mahathishwari Ikkath Sarees</h2>
        <h5 className={styled.white_color}>phone: +91 9030903058 / +91 9030903062</h5>
        <h5 className={styled.white_color}><i className="fa-solid fa-location-dot"></i> Opp. Sai Ram Theatre Road,</h5>
        <h5 className={styled.white_color}>Bhoodan pochampally</h5>
        <h5 className={styled.white_color}>Dist: Yadadri Bhuvanagiri - 508284.</h5>
        <h5 className={styled.white_color}>Telangana</h5>
        <h5><a href="https://wa.me/919030903058">Get Your Own Design</a></h5>
        <h5><a href="https://wa.me/919848963748" target="_blank">Developer Contact</a></h5>
      </div>
      <div className={styled.footer_div2}>
        <h1 className={`${styled.white_color} ${styled.contact_details}`}>Feedback</h1>
        <form className={styled.user_data}>
          <input type="text" name="name" placeholder="Enter Your Name: " required />
          <input type="phone" name="phone" placeholder="Enter Your phone number: " required />
          <input type="email" name="email" placeholder="Enter Your emailId: " required />
          <input type="text" name="Address" placeholder="Enter Your Address: " />
          <label htmlFor="comment">Your Comments:</label>
          <br/>
          <textarea id="comment" className={styled.comment} name="comment" rows="4" cols="50"></textarea>
          <br />
          <button id={styled.submit} type="submit" className="submit">Submit</button>
       </form>
      </div>
    </div>
    );
}