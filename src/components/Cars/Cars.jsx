import React from 'react'
import { Searchcar } from '../searchcar/searchcar'
import { Addcar } from '../addcar/Addcar'
import {Inventory} from '../Inventory/Inventory'
import { useState } from 'react'
import car from "../../img/Car.jpg"

export const Cars = () => {
  const [activeTab, setActiveTab] = useState("search");
  return (
    <div>
    <div className="dashboard-child-container">
        <div className="navmenu">
          <div className="search-box">
            <div className="text" onClick={()=>{ setActiveTab('search')}}>Search</div>
          </div>
          <div className="search-box">
              <div className="text" onClick={()=>{ setActiveTab('add')}}>Add</div>
          </div>
          <div className="search-box">
          <div className="text" onClick={()=>{ setActiveTab('inventory')}}>Inventory</div>
          </div>
        </div>
        <div className="flex-container">
          <img className="img-left" src={car} alt="logo" />
          <div className="form">
            {activeTab === "search" && <Searchcar />}
            {activeTab === "add" && <Addcar></Addcar>}
            {activeTab === "inventory" && <div><Inventory></Inventory></div>}
          </div>
        </div>
      </div>
    </div>
  )
}
