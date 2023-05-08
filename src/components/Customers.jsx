import React, { useEffect, useState } from "react";

export const Customers = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:3001/customers")
      .then((res) => res.json())
      .then((data) => setBackendData(data));
  }, []);
  return(
  <>
    <div>
      {typeof backendData.customers === "undefined" ? (
        <p>Loading</p>
      ) : (
        backendData.customers.map((customers) => (
          <p>CustomerId: {customers.customerId}</p>
        ))
      )}
    </div>
    <div>
      {typeof backendData.customers === "undefined" ? (
        <p>Loading</p>
      ) : (
        backendData.customers.map((customers) => (
          <p>Firstname: {customers.firstName}</p>
        ))
      )}
    </div>
    <div>
    {typeof backendData.customers === "undefined" ? (
      <p>Loading</p>
    ) : (
      backendData.customers.map((customers) => (
        <p>Lastname: {customers.lastName}</p>
      ))
    )}
    </div>
  </>
  );
}
