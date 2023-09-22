import React from "react";
import { useEffect, useState } from "react";
import getSales from "../../services/sales/getSales";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import "./Sales.css";

export const Sales = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [isopen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        setLoading(true);
        const response = await getSales();
        console.log(response.data);
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
    <div className="rectangle">
      <div className="flex-con1">
        <div className="headings">
          <h1 className="sales">Sales</h1>
          <button className="search">Search</button>
          <div className="add-sale">
            Add Sale<button className="add"></button>
          </div>
        </div>
        <div className="parameters">
          <div>Customer</div>
          <div> Car Details </div>
          <div>Year </div>
          <div>Price</div>
          <div>Purchase Date</div>
        </div>
        {sales.map((sale) => {
          console.log(sale);
          return (
            <div className="sale-info">
              <div class>
                {sale.firstName}
                {sale.lastName}
              </div>
              <div>
                {sale.brand}
                {sale.model}
              </div>
              <div>{sale.year}</div>
              <div>{sale.price}</div>
              <div>{sale.saledate}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
