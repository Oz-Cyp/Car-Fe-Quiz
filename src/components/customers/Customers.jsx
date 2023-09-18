import React from "react";
import { useEffect, useState } from "react";
import getCustomers from "../../services/customers/getCustomers";

export const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        const response = await getCustomers();
        console.log(response.data);
        setCustomers(response.data.customers);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };

    fetchCustomers();
  }, []);
  console.log(customers, "grthrrhrh");
  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>Error!!!</div>;
  }

  return (
    <div>
      {customers.map((customer) => {
        console.log(customer);
        return (
          <ul key={customer.id}>
            <li>
              {customer.firstName}
              {customer.lastName}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

// import React, { useEffect, useState } from "react";

// export const Customers = () => {
//   const [backendData, setBackendData] = useState([{}]);

//   useEffect(() => {
//     fetch("http://localhost:3001/customers")
//       .then((res) => res.json())
//       .then((data) => setBackendData(data));
//   }, []);
//   return(
//   <>
//     <div>
//       {typeof backendData.customers === "undefined" ? (
//         <p>Loading</p>
//       ) : (
//         backendData.customers.map((customers) => (
//           <p>CustomerId: {customers.customerId}</p>
//         ))
//       )}
//     </div>
//     <div>
//       {typeof backendData.customers === "undefined" ? (
//         <p>Loading</p>
//       ) : (
//         backendData.customers.map((customers) => (
//           <p>Firstname: {customers.firstName}</p>
//         ))
//       )}
//     </div>
//     <div>
//     {typeof backendData.customers === "undefined" ? (
//       <p>Loading</p>
//     ) : (
//       backendData.customers.map((customers) => (
//         <p>Lastname: {customers.lastName}</p>
//       ))
//     )}
//     </div>
//   </>
//   );
// }
