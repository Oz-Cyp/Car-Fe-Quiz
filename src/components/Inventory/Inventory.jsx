import React from "react";
import { useEffect, useState } from "react";
import getCars from "../../services/cars/getCars";
import "./inventory.css";
import { FaTrash } from "react-icons/fa";
// const image_url = require("../../img/ferrari.jpeg");

export const Inventory = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [image_url, SetImage_url] = useState("");

  const handleimagechange = (event) => {
    SetImage_url(event.target.value);
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await getCars();
        console.log("response.data", response.data);
        console.log("response.data.crs", response.data.cars);
        setCars(response.data.cars);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };

    fetchCars();
  }, []);

  console.log("cars", cars);
  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>Error!!!</div>;
  }

  return (
    <>
      <div className="rectangle2">
        {cars.map((car) => {
          console.log(car);
          return (
            <div className="flexbox2" key={car.id}>
              <img
                style={{ width: "200px" }}
                className="img-car"
                src={car.imageUrl}
                onChange={handleimagechange}
              />
              <div className="info">
                <div className="left-column">
                  <div className="left-column-top">
                    <div className="properties">Brand</div>
                    {car.brand}
                  </div>
                  <div className="left-column-bot">
                    <div className="properties">Model</div>
                    {car.model}
                  </div>
                </div>
                <div className="right-column">
                  <div className="right-column-top">
                    <div className="properties">Year</div>
                    {car.year}
                  </div>
                  <div className="right-column-bot">
                    <div className="properties">Price</div>
                    {car.price}
                  </div>
                </div>
                <div className="buttons">
                  <button className="update">UPDATE</button>
                  <button className="delete">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
