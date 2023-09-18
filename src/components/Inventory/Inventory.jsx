import React from "react";
import { useEffect, useState } from "react";
import getCars from "../../services/cars/getCars";
import "./inventory.css";
import {ferrari} from "../../img/ferrari.jpeg";

export const Inventory = () => {
  const [cars, getCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await getCars();
        console.log(response.data);
        getCars(response.data.cars);
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

  // return (
  //   <div className="flex-container">
  //    <div className="grid-container">
  //     {cars.map((item) => (
  //       <div key={item.id} className="grid-item">
  //         <div className="item-title">{item.title}</div>
  //         <div className="item-image">
  //           <img src={item.imageUrl} alt={item.title} />
  //         </div>
  //         <div className="item-attributes" colSpan="2">
  //           <div className="attribute">{item.attribute1}</div>
  //           <div className="attribute">{item.attribute2}</div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  //   </div>
  // );
};

  // const cars2 = [
  //   {
  //     id: 1,
  //     title: 'Item 1',
  //     imageUrl: 'image1.jpg',
  //     attribute1: 'Attribute A',
  //     attribute2: 'Attribute B',
  //   },
  //   {
  //     id: 2,
  //     title: 'Item 2',
  //     imageUrl: 'image2.jpg',
  //     attribute1: 'Attribute C',
  //     attribute2: 'Attribute D',
  //   },
  // ];
