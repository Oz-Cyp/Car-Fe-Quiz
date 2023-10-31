import React from "react";
import { useState } from "react";
import logo from "../../img/Logo.jpg";
import "./Addcar.css";
import postCar from "../../services/cars/postCar";

export const Addcar = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  const handleBrandchange = (event) => {
    setBrand(event.target.value);
  };

  const handleModelchange = (event) => {
    setModel(event.target.value);
  };

  const handleYearchange = (event) => {
    setYear(event.target.value);
  };

  const handlePricechange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postCar({ brand, model, year, price })
      .then((response) => {
        setBrand("");
        setModel("");
        setYear("");
        setPrice("");
      })
      .catch((error) => {
        console.error("API Error", error);
      });
  };

  return (
    <div className="flex-container">
      <form className="form2" onSubmit={handleSubmit}>
        <div className="addcar">
          <img className="logo-car" src={logo} alt="logo" />
          <div className="addauto">Add New Car</div>
        </div>
        <div className="childs2">
          <div className="input-control2">
            <label>Brand</label>
            <input
              className="input2"
              type="text"
              value={brand}
              onChange={handleBrandchange}
            />
          </div>
          <div className="input-control2">
            <label>Model</label>
            <input
              className="input2"
              type="text"
              value={model}
              onChange={handleModelchange}
            />
          </div>
          <div className="input-control2">
            <label>Year</label>
            <input
              className="input2"
              type="text"
              value={year}
              onChange={handleYearchange}
            />
          </div>
          <div className="input-control2">
            <label>Price</label>
            <input
              className="input2"
              type="text"
              value={price}
              onChange={handlePricechange}
            />
          </div>
          <div className="submit">
            <button className="button2" type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
