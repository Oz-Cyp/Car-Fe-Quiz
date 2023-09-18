import React from "react";
import { useState } from "react";
import logo from "../../img/Logo.jpg";
import "./Addcar.css";
import postCar from "../../services/cars/postCar";

export const Addcar = () => {
  const [Brand, setBrand] = useState("");
  const [Model, setModel] = useState("");
  const [Year, setYear] = useState("");
  const [Price, setPrice] = useState("");

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
    //make the api call with the submitted data
    fetch("/cars", {
      method: "POST",
      body: JSON.stringify({ Brand, Model, Year, Price }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //handle apiresponse
        console.log("API Response", data);
        //reset form
        setBrand("");
        setModel("");
        setYear("");
        setPrice("");
      })
      .catch((error) => {
        //Handle errors
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
            <input classname="input2" type="text" value={Brand} onChange={handleBrandchange} />
          </div>
          <div className="input-control2">
            <label>Model</label>
            <input classname="input2" type="text" value={Model} onChange={handleModelchange} />
          </div>
          <div className="input-control2">
            <label>Year</label>
            <input classname="input2" type="text" value={Year} onChange={handleYearchange} />
          </div>
          <div className="input-control2">
            <label>Price</label>
            <input classname="input2" type="text" value={Price} onChange={handlePricechange} />
          </div>
          <div className="submit">
            <button className="button2" type="submit">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  );
};
