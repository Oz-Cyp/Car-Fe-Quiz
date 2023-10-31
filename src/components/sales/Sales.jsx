import React from "react";
import { useEffect, useState } from "react";
import getSales from "../../services/sales/getSales";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import "./Sales.css";
import { Reusable } from "../../Headings/Headings";

export const Sales = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        setLoading(true);
        const response = await getSales();
        setSales(response.data.sales);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };

    fetchSales();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>Error!!!</div>;
  }

  return (
    <Reusable
      sales={sales}
      header={"Sales"}
      header2={"Customers"}
      header3={"Year"}
      header4={"saledate"}
      btnText={"Add Sale"}
    />
  );
};
