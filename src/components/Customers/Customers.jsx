import React from "react";
import { useEffect, useState } from "react";
import getCustomers from "../../services/customers/getCustomers";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import deleteCustomerById from "../../services/customers/deleteCustomerById";
import "./Customers.css";

export const Customers = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleOpenAddModal = () => {
    console.log("Opening modal");
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    console.log("Closing modal");
    setIsAddModalOpen(false);
  };

  const handleAddCustomer = (customers) => {
    postSale(customers)
      .then((response) => {
        setSales([...customers, response.data.customer]);
      })
      .catch((error) => {
        console.error("API Error", error);
      });
  };

  const handleDelete = (customerId, event) => {
    event.preventDefault();
    deleteCustomerById({
      customerId,
      firstName,
      email,
      lastName,
      brand,
      model,
      price,
    })
      .then((response) => {
        const deletedCustomerIndex = customers.findIndex(
          (customer) => customer.customerId === customerId
        );
        if (deletedCustomerIndex !== -1) {
          const deletedCustomers = [...customers];
          deletedCustomers.splice(deletedCustomerIndex, 1);
          setCustomers(deletedCustomers);
        }
      })
      .catch((error) => {
        console.error("API Error", error);
      });
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        const response = await getCustomers();
        setCustomers(response.data.customers);
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
    <div className="rectangle">
      <div className="flex-con1">
        <div className="headings">
          <h1 className="sales">Customers</h1>
          <button className="search">Search</button>
          <div className="add-sale">
            Add Customer
            <button className="add"></button>
          </div>
        </div>
        <div className="parameters2">
          <div>Fullname</div>
          <div>E_mail</div>
          <div>Car Details</div>
          <div>Price</div>
          <div>Purchase Date</div>
        </div>
        {customers &&
          customers.map((customer) => {
            return (
              <div className="customer-info">
                <div className="rows2">
                  <div className="names2">
                    <div>
                      {customer.firstName} {customer.lastName}
                    </div>
                  </div>
                  <div className="customer_mail">
                    <div>{customer.email}</div>
                  </div>
                  <div className="car-details3">
                    <div>
                      {customer.brand} {customer.model}
                    </div>
                  </div>

                  <div className="car-details4">
                    <div>{customer.price}</div>
                  </div>
                  <div className="envelope">
                    <div>{customer.saledate}</div>
                    <div className="buttons">
                      <button className="update">update</button>
                      <button
                        className="delete"
                        onClick={(e) => handleDelete(customer.customerId, e)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
