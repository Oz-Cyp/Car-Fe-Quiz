import React from "react";
import { useEffect, useState } from "react";
import getCustomers from "../../services/customers/getCustomers";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import "./Customers.css";
import { Reusable } from "../../Headings/Headings";

export const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        const response = await getCustomers();
        console.log("response: ", response);
        setCustomers(response.data.Customers);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>Error!!!</div>;
  }

  return (
    <Reusable
      data={customers}
      header={"Customers"}
      header2={"Fullname"}
      header3={"email"}
      header4={"Phone Number"}
      btnText={"Add Customer"}
    />
  );
};
