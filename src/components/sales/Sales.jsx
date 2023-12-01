import React from "react";
import { useEffect, useState } from "react";
import getSales from "../../services/sales/getSales";
import postSale from "../../services/sales/postSale";
import deleteSaleById from "../../services/sales/DeleteSaleById";
import "bootstrap/dist/css/bootstrap.min.css";
import AddSaleModal from "./AddSaleModal";
import { FaTrash } from "react-icons/fa";
import "./Sales.css";

export const Sales = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [saledate, setSaledate] = useState("");
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenAddModal = () => {
    console.log("Opening modal");
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    console.log("Closing modal");
    setIsAddModalOpen(false);
  };

  const handleAddSale = (sales) => {
    postSale(sales)
      .then((response) => {
        setSales([...sales, response.data.sale]);
      })
      .catch((error) => {
        console.error("API Error", error);
      });
  };

  const handleDelete = (saleId, event) => {
    event.preventDefault();
    deleteSaleById({
      saleId,
      firstName,
      lastName,
      brand,
      model,
      year,
      price,
      saledate,
    })
      .then((response) => {
        const deletedSaleIndex = sales.findIndex(
          (sale) => sale.saleId === saleId
        );
        if (deletedSaleIndex !== -1) {
          const deletedSales = [...sales];
          deletedSales.splice(deletedSaleIndex, 1);
          setSales(deletedSales);
        }
      })
      .catch((error) => {
        console.error("API Error", error);
      });
  };

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
  if (!sales || sales.length === 0) {
    return <div>No data available..</div>;
  }

  return (
    <div className="rectangle">
      <div className="flex-con1">
        <div className="headings">
          <h1 className="sales">Sales</h1>
          <button className="search">Search</button>
          <form className="add-sale">
            Add Sale
            <button className="add" onClick={handleOpenAddModal}></button>
          </form>
        </div>
        <AddSaleModal
          isOpen={isAddModalOpen}
          onClose={handleCloseAddModal}
          onAdd={handleAddSale}
        />
        <div className="parameters">
          <span>Customers</span>
          <div>Car Details</div>
          <div>Year </div>
          <div>Price</div>
          <div>Purchase Date</div>
        </div>

        {sales &&
          sales.map((sale) => {
            return (
              <div className="sale-info">
                <div className="rows">
                  <div className="names">
                    <div>
                      {sale.firstName} {sale.lastName}
                    </div>
                  </div>
                  <div className="car-details">
                    <div>
                      {sale.brand} {sale.model}
                    </div>
                  </div>

                  <div className="car-details2">
                    <div>{sale.year}</div>
                    <div>{sale.price}</div>
                  </div>
                  <div className="envelope">
                    <div>{sale.saledate}</div>
                    <div className="buttons">
                      <button className="update">update</button>
                      <button
                        className="delete"
                        onClick={(e) => handleDelete(sale.saleId, e)}
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
