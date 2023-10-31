import React from "react";
import { useEffect, useState } from "react";
import getSales from "../../services/sales/getSales";
import { Modal } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const Addsale = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  const handleFirstnamechange = (event) => {
    setFirstname(event.target.value);
  };

  const handleLastnamechange = (event) => {
    setLastname(event.target.value);
  };

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
    postCar({ firstname, lastname, brand, model, year, price })
      .then((response) => {
        setFirstname("");
        setLastname("");
        setBrand("");
        setModel("");
        setYear("");
        setPrice("");
      })
      .catch((error) => {
        console.error("API Error", error);
      });
  };
};
