import React from "react";
import { Searchcar } from "../searchcar/searchcar";
import { Addcar } from "../addcar/Addcar";
import { Inventory } from "../Inventory/inventory";
import { useState } from "react";
import "./Cars.css";

export const Cars = () => {
  const [activeTab, setActiveTab] = useState("search");
  return (
    <div>
      <div className="dashboard-child-container">
        <div className="navmenu">
          <div
            className={
              activeTab === "search" ? "activeSearchbox" : "search-box"
            }
          >
            <div
              className="text"
              onClick={() => {
                setActiveTab("search");
              }}
            >
              Search
            </div>
          </div>
          <div
            className={activeTab === "add" ? "activeSearchbox" : "search-box"}
          >
            <div
              className="text"
              onClick={() => {
                setActiveTab("add");
              }}
            >
              Add
            </div>
          </div>
          <div
            className={
              activeTab === "inventory" ? "activeSearchbox" : "search-box"
            }
          >
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
