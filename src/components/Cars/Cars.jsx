import React from "react";
import { Searchcar } from "../searchcar/searchcar";
import { Addcar } from "../addcar/Addcar";
import { Inventory } from "../Inventory/Inventory";
import { useState } from "react";

export const Cars = () => {
  const [activeTab, setActiveTab] = useState("search");
  return (
    <div>
      <div className="dashboard-child-container">
        <div className="navmenu">
          <div className="search-box">
            <div
              className="text"
              onClick={() => {
                setActiveTab("search");
              }}
            >
              Search
            </div>
          </div>
          <div className="search-box">
            <div
              className="text"
              onClick={() => {
                setActiveTab("add");
              }}
            >
              Add
            </div>
          </div>
          <div className="search-box">
            <div
              className="text"
              onClick={() => {
                setActiveTab("inventory");
              }}
            >
              Inventory
            </div>
          </div>
        </div>
        {activeTab === "search" && <Searchcar />}
        {activeTab === "add" && <Addcar />}
        {activeTab === "inventory" && <Inventory />}
      </div>
    </div>
  );
};
