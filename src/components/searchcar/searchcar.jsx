import React from "react";
import "./searchcar.css";
import logo from "../../img/Logo.jpg";
import car from "../../img/Car.jpg";
import { useState } from "react";
import getCars from "../../services/cars/getCars";
import { useEffect } from "react";

export const Searchcar = () => {
  const [cars, setCars] = useState([]);
  const [Brand, setBrand] = useState();
  const [Model, setModel] = useState();
  const [Year, setYear] = useState();
  const [Price, setPrice] = useState();
  const [filteredCars, setFilteredCars] = useState();

  console.log("cars: ", cars);

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

  const handleSearch = () => {
    const brandResult = cars.map((car) => {
      if (car.brand === Brand) {
        setFilteredCars(car);
        return car;
      }
    });

    if (brandResult.length > 1) {
      const modelResult = brandResult.map((car) => {
        if (Model) {
          if (car.model === Model) {
            setFilteredCars(car);
            return car;
          }
        }
      });

      if (modelResult.length > 1) {
        const yearResult = brandResult.map((car) => {
          if (Year) {
            if (car.year === Year) {
              setFilteredCars(car);
              return car;
            }
          }
        });

        if (yearResult.length > 1) {
          const priceResult = brandResult.map((car) => {
            if (Price) {
              if (car.price === Price) {
                setFilteredCars(car);
                return car;
              }
            }
          });
        }
      }
    }
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await getCars();
        console.log("response.data", response.data);
        console.log("response.data.crs", response.data.cars);
        setCars(response.data.cars);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCars();
  }, []);

  console.log("filteredCars", filteredCars);

  return (
    <>
      <div className="flex-container">
        <img className="img-left" src={car} alt="logo" />
        <form className="form1" onSubmit={handleSearch}>
          <div className="searchcar">
            <img className="logo-car" src={logo} alt="logo" />
            <div className="searchauto">Search auto</div>
          </div>
          <div className="childs1">
            <div className="input-control1">
              <label>Brand</label>
              <input
                className="input1"
                type="text"
                onChange={handleBrandchange}
              />
            </div>
            <div className="input-control1">
              <label>Model</label>
              <input
                className="input1"
                type="text"
                onChange={handleModelchange}
              />
            </div>
            <div className="input-control1">
              <label>Year</label>
              <input
                className="input1"
                type="number"
                onChange={handleYearchange}
              />
            </div>
            <div className="input-control1">
              <label>Price</label>
              <input
                className="input1"
                type="number"
                onChange={handlePricechange}
              />
            </div>

            <div className="submit1">
              <button className="button" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* <div className="filteredcars">
        {filteredCars?.length > 0 ? (
          filteredCars?.map((car) => (
            <div key={car.id}>
              <p>{car.Brand}</p>
              <p>{car.Model}</p>
              <p>{car.Year}</p>
              <p>{car.Price}</p>
            </div>
          ))
        ) : (
          <p> No cars found.</p>
        )}
      </div> */}
    </>
  );
};
