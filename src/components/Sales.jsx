import React, { useEffect, useState } from "react";

export const Sales = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:3001/sales")
      .then((res) => res.json())
      .then((data) => setBackendData(data));
  }, []);
  return (
    <>
      <div>
        {typeof setBackendData.sales === "undefined" ? (
          <p>Loading</p>
        ) : (
          backendData.sales.map((sales) => (
          <p>SalesId: {sales.salesId}</p>
          ))
        )}
      </div>
      <div>
        {typeof setBackendData.sales === "undefined" ? (
          <p>Loading</p>
        ) : (
          backendData.sales.map((sales) => (
            <p>CustomerId: {sales.customerId}</p>
          ))
        )}
      </div>
      <div>
        {typeof setBackendData.sales === "undefined" ? (
          <p>Loading</p>
        ) : (
          backendData.sales.map((sales) => (
          <p>CarId: {sales.carId}</p>
          ))
        )}
      </div>
    </>
  );
};
