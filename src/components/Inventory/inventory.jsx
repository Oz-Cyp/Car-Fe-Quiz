import React from "react";
import { useEffect, useState } from "react";
import getCars from "../../services/cars/getCars";
import "./inventory.css";
import { FaTrash } from "react-icons/fa";

import deleteCarById from "../../services/cars/DeleteCarById";
import UpdateCarModal from "../Inventory/UpdateCarModal";

export const Inventory = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleOpenModal = (car) => {
    setSelectedCar(car);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
  };
  const handleDelete = (carId, event) => {
    event.preventDefault();
    deleteCarById({ carId, brand, model, year, price })
      .then((response) => {
        const deletedCarIndex = cars.findIndex((car) => car.carId === carId);
        if (deletedCarIndex !== -1) {
          const deletedCars = [...cars];
          deletedCars.splice(deletedCarIndex, 1);
          setCars(deletedCars);
        }
      })
      .catch((error) => {
        console.error("API Error", error);
      });
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await getCars();
        setCars(response.data.cars);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.error("API Error", error);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>Error!!!</div>;
  }

  return (
    <>
      <div className="rectangle2">
        {cars.map((car) => (
          <div className="flexbox2" key={car.carId}>
            <form className="form3">
              <img className="img-car" src={car.imageUrl} alt="" />
              <div className="info">
                <div className="left-column">
                  <div className="left-column-top">
                    <div className="properties">Brand </div>
                    {car.brand}
                  </div>
                  <div className="left-column-bot">
                    <div className="properties">Model</div>
                    {car.model}
                  </div>
                </div>
                <div className="right-column">
                  <div className="right-column-top">
                    <label className="properties">Year</label>
                    {car.year}
                  </div>
                  <div className="right-column-bot">
                    <div className="properties">Price</div>
                    {car.price}
                  </div>
                </div>
                <div className="buttons2">
                  <button
                    className="update"
                    onClick={(e) => handleOpenModal(car)}
                  >
                    Update
                  </button>
                  <button
                    className="delete"
                    onClick={(e) => handleDelete(car.carId, e)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </form>
          </div>
        ))}
      </div>
      {selectedCar && (
        <UpdateCarModal
          isOpen={!!selectedCar}
          onClose={handleCloseModal}
          onUpdate={handleUpdate}
          car={selectedCar}
        />
      )}
    </>
  );
};
