import React from "react";
import { useEffect } from "react";
import getCars from "../services/cars/getCars";

export const Cars = () => {
  useEffect(() => {
    const fetchCars = async () => {
  const {response} = await getCars();
  console.log (response)
    }
    fetchCars();
  }, [])


  return (
    <div>Hello</div>
  )
  }
