import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

export const Reusable = ({
  data,
  header,
  header2,
  header3,
  header4,
  btnText,
}) => {
  return (
    <div className="rectangle">
      <div className="flex-con1">
        <div className="headings">
          <h1 className="sales">{header}</h1>
          <button className="search">Search</button>
          <div className="add-sale">
            {btnText}
            <button className="add"></button>
          </div>
        </div>
        <div className="parameters">
          <span>{header2}</span>
          <div>Car Details</div>
          <div>{header3} </div>
          <div>Price</div>
          <div>{header4}</div>
        </div>
        {/* {data.map((sale) => {
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
                    <button className="delete">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
