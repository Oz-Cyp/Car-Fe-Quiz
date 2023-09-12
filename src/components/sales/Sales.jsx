import React from "react";
import { useEffect, useState } from "react";
import getSales from "../../services/sales/getSales";

export const Sales = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
    <div>
      {sales.map((sale) => {
        console.log(sale);
        return (
          <ul key={sale.id}>
            <li>
              {sale.firstName}
              {sale.lastName}
            </li>
          </ul>
        );
      })}
    </div>
  );
};
