import React, { useState, useEffect } from "react";
// import useApi from "../utils/useAPI";
import getCars from "../services/cars/getCars";

export const Cars = () => {
  const [cars, setCars] = useState("ola");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // OPTION 1
  // -------------------
  // const [loading, error, response] = useApi(() => getCars());
  // this is the useApi we use to fetch data. If you dive into it
  // you will see it uses useState and useEffect.
  // advantage is that it gives you loading and error state that you can use as below

  // useEffect(() => {
  //   const { cars } = response;
  //   setCars(cars);
  //   console.log(cars);
  // }, [response]);
  // -------------------

  // OPTION 2
  // -------------------
  const fetchCars = async () => {
    try {
      setLoading(true);
      const response = await getCars();
      setLoading(false);
      setCars(response.cars);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);
  // -------------------

  // OPTION 3
  // -------------------
  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await getCars();
  //       console.log(response);
  //       setCars(response.cars);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(true);
  //       console.log(error);
  //     }
  //   };

  //   fetchCars();
  // }, []);

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>Error!!!</div>;
  }

  return <div>Success</div>;
};
