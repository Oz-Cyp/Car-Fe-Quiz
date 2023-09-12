import React from "react";
import { useEffect, useState } from "react";
import getCars from "../../services/cars/getCars";

export const Inventory = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await getCars();
        console.log(response.data);
        setCars(response.data.cars);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
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
    <div>
      {cars.map((car) => {
        console.log(car);
        return (
          <ul key={car.id}>
            <li>
              {car.brand}
              {car.model}
              {car.year}
              {car.price}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

