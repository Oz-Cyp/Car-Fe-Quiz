import React from "react";
import "./searchcar.css";
import logo from "../../img/Logo.jpg";
export const Searchcar = () => {
  return (
    <>
      <div className="searchcar">
        <img className="logo-car" src={logo} alt="logo" />
        <div className="searchauto">Search auto</div>
      </div>
      <div className="childs1">
        <div className="input-control1">
          <label>Brand</label>
          <input className="input1" type="text" required />
        </div>
        <div className="input-control1">
          <label>Model</label>
          <input className="input1" type="text" required />
        </div>
        <div className="input-control1">
          <label>Year</label>
          <input className="input1" type="text" required />
        </div>
        <div className="input-control1">
          <label>Price</label>
          <input className="input1" type="text" required />
        </div>

        <div className="submit1">
          <button type="submit">Search</button>
        </div>
      </div>
    </>
  );
};
