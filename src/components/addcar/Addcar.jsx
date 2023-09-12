import React from "react";
import { useState } from "react";
import logo from "../../img/Logo.jpg";
import "./Addcar.css";

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
    //make the api call with the sumbitted data
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
    <form onSubmit={handleSubmit}>
      <div className="addcar">
        <img className="logo-car" src={logo} alt="logo" />
        <div className="addauto">Add New Car</div>
      </div>
      <div className="childs">
        <div className="input-control">
          <label>Brand:</label>
          <input type="text" value={Brand} onChange={handleBrandchange} />
        </div>
        <div className="input-control">
          <label>Model:</label>
          <input type="text" value={Model} onChange={handleModelchange} />
        </div>
        <div className="input-control">
          <label>Year:</label>
          <input type="text" value={Year} onChange={handleYearchange} />
        </div>
        <div className="input-control">
          <label>Price:</label>
          <input type="text" value={Price} onChange={handlePricechange} />
        </div>
        <div className="submit">
          <button type="submit">Sumbit</button>
        </div>
      </div>
    </form>
  );
};
