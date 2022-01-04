import React from "react";
import { Link } from "react-router-dom";
import '../styles/Cards.css';
const Cards = ({ src, title, des }) => {
  return (
    <div className="Doughnuts-cards">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={src} alt="Card one" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{des}</p>
          <Link to="/Bakery" className="btnLanding">
          Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;